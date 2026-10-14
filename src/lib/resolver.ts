export interface CompanyKey {
  segment: string;
  slug: string;
}

/** "Opa Salgados" → "opa-salgados" (minúsculas, sin acentos, espacios a guiones) */
export const normalizeSlug = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// /{segment}/{slug} con cualquier subruta opcional (/splash, /menu, etc.)
const PATTERN = /^\/?([a-z0-9-]+)\/([a-z0-9-]+)(?:\/.*)?$/;

/** Extrae segmento y slug de una URL completa (QR) o de una ruta pegada. */
export function parseCompanyPath(input: string, allowedHosts?: string[]): CompanyKey | null {
  let path = input.trim();
  if (!path) return null;

  if (/^https?:\/\//i.test(path)) {
    try {
      const url = new URL(path);
      // Si se definen hosts permitidos, un QR de otro dominio se rechaza
      if (allowedHosts && !allowedHosts.includes(url.host)) return null;
      path = url.pathname;
    } catch {
      return null;
    }
  }

  path = path.split(/[?#]/)[0].toLowerCase();
  const match = path.match(PATTERN);
  return match ? { segment: match[1], slug: match[2] } : null;
}

export const splashUrl = ({ segment, slug }: CompanyKey) => `/${segment}/${slug}/splash`;

/** Para el QR y para links pegados. Devuelve el splash o null si la empresa no existe. */
export function resolveSplashUrl(
  input: string,
  companies: CompanyKey[],
  allowedHosts?: string[]
): string | null {
  const key = parseCompanyPath(input, allowedHosts);
  if (!key) return null;
  const exists = companies.some((c) => c.segment === key.segment && c.slug === key.slug);
  return exists ? splashUrl(key) : null;
}

/**
 * Para el formulario de la home: segmento (del select) + texto del input.
 * Si el usuario pega un link o una ruta (empieza con / o http), se ignora el select.
 */
export function resolveFromForm(
  segment: string,
  text: string,
  companies: CompanyKey[]
): string | null {
  const value = text.trim();
  if (!value) return null;

  if (/^(https?:\/\/|\/)/i.test(value)) {
    return resolveSplashUrl(value, companies);
  }

  const slug = normalizeSlug(value);
  const exists = companies.some((c) => c.segment === segment && c.slug === slug);
  return exists ? splashUrl({ segment, slug }) : null;
}