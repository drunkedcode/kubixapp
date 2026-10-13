import type { Restaurant } from './types';

export const opaSalgados: Restaurant = {
  slug: 'opa-salgados',
  name: "Opa! Salgados",
  tagline: "Sabor que te conquista",
  phone: "(41) 9XXXX-XXXX",
  logo: "/images/restaurants/opa/opaSalgados.png",
  splash: "/images/restaurants/opa/opa.jpg",
  isOpen: true,
  todayHours: "09:00 - 19:00",
  schedule: [
    { day: "Segunda-feira", hours: "Fechado", current: false },
    { day: "Terça-feira", hours: "09:00 - 19:00", current: true },
    { day: "Quarta-feira", hours: "09:00 - 19:00", current: false },
    { day: "Quinta-feira", hours: "09:00 - 19:00", current: false },
    { day: "Sexta-feira", hours: "09:00 - 20:00", current: false },
    { day: "Sábado", hours: "09:00 - 20:00", current: false },
    { day: "Domingo", hours: "09:00 - 15:00", current: false },
  ],
  heroSlider: [
    {
      id: 1,
      image: "https://img.magnific.com/free-photo/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view_2829-17420.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Salgados Quentes!",
      subtitle: "Feitos na hora, crocantes e saborosos",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=0&k=20&c=prMIQVeOLhb-dudI5C-gHr_LkAzDEbFxU06LU4Omi6E=",
      title: "Variedade Especial",
      subtitle: "Todos os sabores que você ama",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1471662975/photo/summer-cold-drinks-big-glass-jars-with-tap-filled-with-fresh-cold-drinks-served-in-bar-event.jpg?s=1024x1024&w=is&k=20&c=-EMrJ6LjNkbOy5YCGNfRRtr6hDliQ0eVcukHMbp9ka8=",
      title: "Bebidas Geladas",
      subtitle: "Combinação perfeita com seu salgado",
    },
  ],
  gallery: [
    {
      id: 1,
      image: "https://img.magnific.com/free-photo/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view_2829-17420.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Coxinha com catupiry"
    },
    {
      id: 2,
      image: "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg",
      alt: "Bandeja de salgados variados"
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=",
      alt: "Mesa servida para família"
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/1471662975/photo/summer-cold-drinks-big-glass-jars-with-tap-filled-with-fresh-cold-drinks-served-in-bar-event.jpg?s=1024x1024&w=is&k=20&c=-EMrJ6LjNkbOy5YCGNfRRtr6hDliQ0eVcukHMbp9ka8=",
      alt: "Salgados com suco natural"
    },
    {
      id: 5,
      image: "https://kriaan.com/wp-content/uploads/2025/08/task-lighting.webp",
      alt: "Ambiente da loja"
    },
  ],
  social: {
    facebook: "https://facebook.com/opasalgados",
    instagram: "https://instagram.com/opasalgados",
    tiktok: "https://tiktok.com/@opasalgados",
  },
  menuPath: "/menu",
  categories: [],
};