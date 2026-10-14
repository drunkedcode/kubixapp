const DEFAULT_LANG = 'pt';

/**
 * Obtiene el idioma actual leyendo de la Cookie (para el servidor) o localStorage (para el cliente).
 */
export function getLang(cookies?: AstroCookies): string {
  // Si estamos en el servidor y tenemos acceso a las cookies de Astro
  if (cookies && typeof cookies.get === 'function') {
    const cookieLang = cookies.get('kubix_lang')?.value;
    if (cookieLang === 'pt' || cookieLang === 'es') {
      return cookieLang;
    }
  }

  // Si estamos en el navegador
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('kubix_lang');
    if (saved && (saved === 'pt' || saved === 'es')) {
      return saved;
    }
  }

  return DEFAULT_LANG;
}

/**
 * Cambia el idioma guardándolo en localStorage y en una Cookie accesible por el servidor.
 */
export function setLanguage(lang: 'pt' | 'es') {
  if (typeof window !== 'undefined') {
    localStorage.setItem('kubix_lang', lang);
    // Establecemos una cookie que expire en 1 año, válida para todo el sitio
    document.cookie = `kubix_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }
}