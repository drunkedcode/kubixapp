// Tipos compartidos entre segmentos (restaurantes, salones, lo que venga).
// Nada específico de un negocio puntual va acá.
export interface SplashData {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  splash: string;
  previewImages?: string[];
}