/**
 * Índice de Temas
 * Centraliza todos los estilos de cada negocio
 * Agrega cada nuevo tema aquí nada más
 */

export const themes = {
  avibis: '/src/assets/styles/themes/avibis.css',
  opasalgado: './themes/opaSalgado.css',    
  // novaterra: './themes/novaterra.css',      // Cuando lo crees, descomenta
} as const;

export type ThemeSlug = keyof typeof themes;

/**
 * Devuelve la ruta del CSS correspondiente al slug
 * Si no existe, usa avibis por defecto
 */
export function getThemePath(slug: string): string {
  const themeKey = slug as ThemeSlug;
  return themes[themeKey] || themes.avibis;
}

/**
 * Verifica si el tema existe
 */
export function hasTheme(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(themes, slug);
}