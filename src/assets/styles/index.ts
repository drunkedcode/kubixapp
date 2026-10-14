/**
 * Temas por empresa.
 * Patrón: themes/{slug}.css. Para una empresa nueva solo se crea ese archivo,
 * sin registrar nada aquí.
 * Si no existe el archivo, la empresa usa los defaults de Kubix (global.css).
 */

const files = import.meta.glob('./themes/*.css', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// './themes/avibis.css' → 'avibis'
const themes: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop()!.replace('.css', ''),
    url,
  ])
);

/** URL final del tema de la empresa, o null si no tiene. */
export function getThemePath(slug: string): string | null {
  return themes[slug] ?? null;
}

export function hasTheme(slug: string): boolean {
  return slug in themes;
}