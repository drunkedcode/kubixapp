export interface ScheduleDay {
  day: string;
  hours: string;
  current: boolean;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface GalleryItem {
  id: number;
  image?: string;
  video?: string;
  alt: string;
}

// ==========================================
// TIPOS DEL MENÚ MODULAR
// Todas las secciones son opcionales: si no hay datos, no se renderiza.
// ==========================================

/** Campos comunes a toda sección del menú */
export interface MenuSectionBase {
  /** Título de la sección (si falta, se usa uno por defecto) */
  title?: string;
  /** Aviso de toda la sección. Ej: "+30% si agregas porco agridoce" */
  note?: string;
}

// ---------- Combos (premium y simples) ----------

export interface ComboItem {
  id: string;
  name: string;
  /** Nombre corto para tarjetas pequeñas (grid de 3 columnas). Si falta, se usa name */
  shortName?: string;
  shortDescription?: string;
  largeDescription?: string;
  price: number;
  promoPrice?: number;
  badge?: string;
  /** Obligatoria: todos los combos llevan foto */
  image?: string;
  includes?: string[];
  /** Para cuántos es. Ej: "3 pessoas" */
  serves?: string;
}

/** Slider de destacados */
export interface CombosPremiumSection extends MenuSectionBase {
  items: ComboItem[];
}

/** Grid de 3 columnas: muestra los primeros `previewCount` y enlaza a "Ver todos" */
export interface CombosSimplesSection extends MenuSectionBase {
  items: ComboItem[];
  /** Cuántos se ven en el menú antes de "Ver todos". Por defecto 6 */
  previewCount?: number;
}

// ---------- Lista tipo iFood ----------

/** Variante de tamaño o cantidad. Ej: P, M, G; 3, 5, 8 pedazos */
export interface ItemVariant {
  id: string;
  label: string;
  price: number;
}

export interface MenuListItem {
  id: string;
  name: string;
  description?: string;
  /** Precio fijo. Si el ítem tiene variants, se omite */
  price?: number;
  /** Si existe, el cliente elige una antes de agregar */
  variants?: ItemVariant[];
  image?: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  /** Aviso de la categoría. Ej: "Para 1 pessoa: 600 g" */
  note?: string;
  items: MenuListItem[];
}

export interface MenuListSection extends MenuSectionBase {
  categories: MenuCategory[];
}

// ---------- Menú del día ----------

/** 0 = domingo ... 6 = sábado (igual que Date.getDay()) */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DayMenu {
  day: Weekday;
  /** Título opcional del día. Ej: "Feijoada" */
  title?: string;
  items: MenuListItem[];
}

export interface DailyMenuSection extends MenuSectionBase {
  days: DayMenu[];
}

// ---------- Contenedor ----------

export interface RestaurantMenuData {
  combosPremium?: CombosPremiumSection;
  combosSimples?: CombosSimplesSection;
  lists?: MenuListSection;
  drinks?: MenuListSection;
  menuDelDia?: DailyMenuSection;
}

// ==========================================
// RESTAURANTE
// ==========================================

export interface Restaurant {
  slug: string;
  name: string;
  tagline: string;
  phone: string;
  whatsapp?: string;
  logo: string;
  splash?: string;
  splashStyle?: 'geometric' | 'minimal' | 'neon';
  address: string;
  isOpen: boolean;
  todayHours: string;
  schedule: ScheduleDay[];
  heroSlider: HeroSlide[];
  gallery: GalleryItem[];
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
  menuPath: string;

  menuData?: RestaurantMenuData;
}