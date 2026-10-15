export interface CartLine {
  id: string;
  name: string;
  price: number; // precio final (promo si existe)
  qty: number;
}

export interface Cart {
  code: string; // código corto del pedido
  lines: CartLine[];
  updatedAt: number;
}

const TTL_MS = 12 * 60 * 60 * 1000; // el carrito se descarta tras 12 h
const EVENT = 'kubix:cart';
const storageKey = (key: string) => `kubix:cart:${key}`;
const empty = (): Cart => ({ code: '', lines: [], updatedAt: 0 });

// Sin 0/O ni 1/I para que el código no se confunda al leerlo
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function newCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
}

export function getCart(key: string): Cart {
  try {
    const raw = localStorage.getItem(storageKey(key));
    if (!raw) return empty();
    const cart = JSON.parse(raw) as Cart;
    if (!Array.isArray(cart.lines) || Date.now() - cart.updatedAt > TTL_MS) {
      localStorage.removeItem(storageKey(key));
      return empty();
    }
    return cart;
  } catch {
    return empty();
  }
}

function save(key: string, cart: Cart) {
  try {
    if (cart.lines.length === 0) {
      localStorage.removeItem(storageKey(key));
    } else {
      localStorage.setItem(storageKey(key), JSON.stringify({ ...cart, updatedAt: Date.now() }));
    }
  } catch {
    /* storage lleno o bloqueado */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: key }));
}

export function addLine(key: string, line: Omit<CartLine, 'qty'>) {
  const cart = getCart(key);
  if (!cart.code) cart.code = newCode();
  const found = cart.lines.find((l) => l.id === line.id);
  if (found) found.qty += 1;
  else cart.lines.push({ ...line, qty: 1 });
  save(key, cart);
}

export function changeQty(key: string, id: string, delta: number) {
  const cart = getCart(key);
  const line = cart.lines.find((l) => l.id === id);
  if (!line) return;
  line.qty += delta;
  cart.lines = cart.lines.filter((l) => l.qty > 0);
  save(key, cart);
}

export function clearCart(key: string) {
  save(key, empty());
}

export const cartCount = (cart: Cart) => cart.lines.reduce((n, l) => n + l.qty, 0);
export const cartTotal = (cart: Cart) => cart.lines.reduce((n, l) => n + l.price * l.qty, 0);

/** Llama a cb ahora y en cada cambio (esta pestaña u otra). Devuelve la función para desuscribirse. */
export function onCartChange(key: string, cb: (cart: Cart) => void): () => void {
  const run = () => cb(getCart(key));
  const onLocal = (e: Event) => { if ((e as CustomEvent).detail === key) run(); };
  const onStorage = (e: StorageEvent) => { if (e.key === storageKey(key)) run(); };
  window.addEventListener(EVENT, onLocal);
  window.addEventListener('storage', onStorage);
  run();
  return () => {
    window.removeEventListener(EVENT, onLocal);
    window.removeEventListener('storage', onStorage);
  };
}

export const money = (n: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(n)
    .replace(/\u00a0/g, ' ');

/** Mensaje de un pedido. Un segmento distinto (salones) aportará su propio formato. */
export function orderMessage(businessName: string, cart: Cart): string {
  const lines = cart.lines.map((l) => `• ${l.qty}x ${l.name} — ${money(l.price * l.qty)}`);
  return [
    `*Pedido #${cart.code}* · Kubix`,
    `Olá, *${businessName}*! Gostaria de fazer este pedido:`,
    '',
    ...lines,
    '',
    `*Total: ${money(cartTotal(cart))}*`,
  ].join('\n');
}

/** Número en formato internacional para wa.me, o null si no es válido. */
function toWhatsAppNumber(phone: string): string | null {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10 || digits.length === 11) return `55${digits}`;
  if (digits.startsWith('55') && digits.length >= 12) return digits;
  return null;
}

export function whatsappUrl(phone: string, message: string): string | null {
  const number = toWhatsAppNumber(phone);
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}