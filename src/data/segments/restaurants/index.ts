import type { Restaurant } from './types';
import { avibis } from './avibis';
import { opaSalgados } from './opa-salgados';

// Agregas aquí los demás cuando los crees:
// import { novaterra } from './novaterra';

export const allRestaurants: Restaurant[] = [
  avibis,
  opaSalgados,
  // novaterra,
];

export type { Restaurant, MenuCategory, MenuItem } from './types';