import type { Restaurant } from './types';

export const avibis: Restaurant = {
  slug: 'avibis',
  name: "Avibi's",
  tagline: "Arroz chinesse Cantones",
  phone: "(41) 99146-6120",
  logo: "/images/restaurants/avibis/cheff.png",
  splash:"/images/restaurants/avibis/splash.jpg",
  isOpen: true,
  todayHours: "18:00 - 23:00",
  schedule: [
    { day: "Segunda-feira", hours: "18:00 - 23:00", current: true },
    { day: "Terça-feira", hours: "18:00 - 23:00", current: false },
    { day: "Quarta-feira", hours: "18:00 - 23:00", current: false },
    { day: "Quinta-feira", hours: "18:00 - 23:00", current: false },
    { day: "Sexta-feira", hours: "18:00 - 00:00", current: false },
    { day: "Sábado", hours: "18:00 - 00:00", current: false },
    { day: "Domingo", hours: "18:00 - 22:00", current: false },
  ],

  heroSlider: [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?s=612x612&w=0&k=20&c=jwKJmGErrLe2XsTWNYEEyiNicudYVA4j8jvnTiJdp58=",
      title: "Promoção do Dia!",
      subtitle: "Prato completo com desconto especial",
    },
    {
      id: 2,
      image: "https://controlenamao.com.br/blog/wp-content/uploads/2025/02/Como-Montar-um-Restaurante-Prato-Feito-PF_-Guia-em-10-passos.webp",
      title: "Nosso Tempero",
      subtitle: "Sabor que vem do coração",
    },
    {
      id: 3,
      image: "https://banner2.cleanpng.com/20180630/puq/aaylwahcv.webp",
      title: "Entrega Rápida",
      subtitle: "Peça pelo WhatsApp",
    },
  ],

gallery: [
    { 
      id: 1, 
      image: "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=0&k=20&c=prMIQVeOLhb-dudI5C-gHr_LkAzDEbFxU06LU4Omi6E=", 
      alt: "Prato especial" 
    },
    { 
      id: 2, 
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
      alt: "Reel: Preparando na cozinha" 
    },
    { 
      id: 3, 
      image: "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=", 
      alt: "Mesa servida" 
    },
    { 
      id: 4, 
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", 
      alt: "Reel: Nossos cortes de carne" 
    },
    { 
      id: 5, 
      image: "https://img.magnific.com/free-photo/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view_2829-17420.jpg?semt=ais_hybrid&w=740&q=80", 
      alt: "Detalhe do prato" 
    },
    { 
      id: 6, 
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", 
      alt: "Reel: Ambiente do restaurante" 
    },
    { 
      id: 7, 
      image: "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg", 
      alt: "Prato do dia" 
    },
    { 
      id: 8, 
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", 
      alt: "Reel: Sobremesas especiais" 
    },
    { 
      id: 9, 
      image: "https://media.istockphoto.com/id/1471662975/photo/summer-cold-drinks-big-glass-jars-with-tap-filled-with-fresh-cold-drinks-served-in-bar-event.jpg?s=1024x1024&w=is&k=20&c=-EMrJ6LjNkbOy5YCGNfRRtr6hDliQ0eVcukHMbp9ka8=", 
      alt: "Bebida gelada" 
    },
    { 
      id: 10, 
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", 
      alt: "Reel: Drinks da casa" 
    },
    { 
      id: 18, 
      image: "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=", 
      alt: "Família" 
    },
    { 
      id: 12, 
      image: "https://kriaan.com/wp-content/uploads/2025/08/task-lighting.webp", 
      alt: "Avibi's" 
    },
  ],

  social: {
    facebook: "https://facebook.com/avibis",
    instagram: "https://instagram.com/avibis",
    tiktok: "https://tiktok.com/@avibis",
  },

  menuPath: "/menu",

  categories: [],
};