import { allRestaurants } from './segments/restaurants';
// import { allSalons } from './segments/salons';

export interface CatalogEntry {
  key: string; // "segment/slug"
  segment: string;
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  isOpen?: boolean;
  href: string; // splash
}

interface SegmentItem {
  slug: string;
  name: string;
  tagline?: string;
  logo: string;
  isOpen?: boolean;
}

const fromSegment = (segment: string, list: SegmentItem[]): CatalogEntry[] =>
  list
    .filter((c) => c && c.slug)
    .map((c) => ({
      key: `${segment}/${c.slug}`,
      segment,
      slug: c.slug,
      name: c.name,
      tagline: c.tagline ?? '',
      logo: c.logo,
      isOpen: c.isOpen,
      href: `/${segment}/${c.slug}/splash`,
    }));

export const catalog: CatalogEntry[] = [
  ...fromSegment('restaurants', allRestaurants),
  // ...fromSegment('salons', allSalons),
];

// Nombre legible de cada segmento (para el select de la home)
const segmentLabels: Record<string, string> = {
  restaurants: 'Restaurantes',
  salons: 'Salones',
};

// Solo los segmentos que tienen al menos una empresa
export const segments = [...new Set(catalog.map((c) => c.segment))].map((id) => ({
  id,
  label: segmentLabels[id] ?? id,
}));