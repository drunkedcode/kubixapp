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
  image: string;
  alt: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Restaurant {
  slug: string;
  name: string;
  tagline: string;
  phone: string;
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
  categories: MenuCategory[];
}