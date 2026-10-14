/**
 * Índice de Temas
 * Centraliza todos los estilos de cada negocio
 * Agrega cada nuevo tema aquí nada más
 *
 * IMPORTANTE: la key debe coincidir EXACTO con el `slug` del negocio
 * (mismo que usas en restaurants.ts / salons.ts, etc.) y la ruta debe
 * ser ABSOLUTA (empezar con /src/...) — una ruta relativa no resuelve
 * bien dentro de un <link href={themePath}> de Astro.
 */

export const themes = {
  avibis: '/src/assets/styles/themes/avibis.css',
  'opa-salgados': '/src/assets/styles/themes/opa-salgados.css',
  // novaterra: '/src/assets/styles/themes/novaterra.css', // Cuando lo crees, descomenta
} as const;

export type ThemeSlug = keyof typeof themes;

/**
 * Devuelve la ruta del CSS del negocio, o null si no tiene theme propio.
 * NO hay fallback a una empresa específica (antes caía en avibis por
 * default, lo cual era incorrecto): global.css ya trae su propia
 * paleta neutra de Kubix, así que "sin theme" simplemente se queda
 * con esos defaults — no con los colores de otro negocio.
 */
export function getThemePath(slug: string): string | null {
  const themeKey = slug as ThemeSlug;
  return themes[themeKey] ?? null;
}

/**
 * Verifica si el tema existe
 */
export function hasTheme(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(themes, slug);
}