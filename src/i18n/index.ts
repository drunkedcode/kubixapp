import ptCommon from './portuguese/common';
import ptIndex from './portuguese/index';
import ptProfile from './portuguese/profile';
import ptConfig from './portuguese/config';

import esCommon from './spanish/common';
import esIndex from './spanish/index';
import esProfile from './spanish/profile';
import esConfig from './spanish/config';

import { getLang } from './store';
import type { AstroCookies } from 'astro';

const translations = {
  pt: {
    common: ptCommon,
    index: ptIndex,
    profile: ptProfile,
    config: ptConfig,
  },
  es: {
    common: esCommon,
    index: esIndex,
    profile: esProfile,
    config: esConfig,
  },
} as const;

export function useTranslations(astroCookies?: AstroCookies, url?: URL) {
  // Obtenemos el idioma priorizando las cookies del servidor o la URL
  let lang = getLang(astroCookies) as keyof typeof translations;

  if (!lang && url) {
    const [, urlLang] = url.pathname.split('/');
    if (urlLang && urlLang in translations) {
      lang = urlLang as keyof typeof translations;
    }
  }

  if (!translations[lang]) {
    lang = 'pt';
  }

  return function t(keyPath: string): string {
    const parts = keyPath.split('.');
    let current: any = translations[lang];

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback a portugués
        let fallback: any = translations['pt'];
        for (const fp of parts) {
          if (fallback && typeof fallback === 'object' && fp in fallback) {
            fallback = fallback[fp];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }

    return typeof current === 'string' ? current : keyPath;
  };
}