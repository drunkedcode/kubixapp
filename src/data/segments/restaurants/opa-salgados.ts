import type { Restaurant } from './types';

export const opaSalgados: Restaurant = {
  slug: 'opa-salgados',
  name: "Opa! Salgados",
  tagline: "Sabor que te conquista",
  phone: "(41) 9XXXX-XXXX",
  logo: "/images/restaurants/opa/opaSalgados.png",
  splashStyle: 'geometric',
  address: "Algum lugar de Capão Raso, Curitiba - PR",
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
  menuData: {
    // ✅ SE USA — Combos Premium (destaques/promociones)
    combosPremium: {
      title: "Destaques",
      items: [
        {
          id: "op1",
          name: "Combo Família Salgado",
          shortName: "Combo Família",
          shortDescription: "20 salgados variados + 2 refrigerantes 1L",
          largeDescription: "A melhor opção para reunir a família. Salgados quentes feitos na hora com massa crocante e recheios generosos, acompanhados de bebidas geladas.",
          price: 85.0,
          promoPrice: 72.0,
          badge: "Mais Pedido",
          serves: "4 a 6 pessoas",
          image: "https://img.magnific.com/free-photo/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view_2829-17420.jpg?semt=ais_hybrid&w=740&q=80",
          includes: [
            "5x Coxinhas",
            "5x Risoles de Queijo",
            "5x Pastéis de Carne",
            "5x Bolinhas de Queijo",
            "2x Refrigerante 1L",
          ],
        },
        {
          id: "op2",
          name: "Combo Festa",
          shortName: "Combo Festa",
          shortDescription: "40 salgados variados + 4 refrigerantes",
          largeDescription: "Perfeito para eventos e comemorações. Grande variedade dos nossos salgados mais vendidos.",
          price: 150.0,
          badge: "Promoção",
          serves: "8 a 10 pessoas",
          image: "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg",
          includes: [
            "10x Coxinhas",
            "10x Risoles de Presunto e Queijo",
            "10x Pastéis",
            "10x Empadas de Frango",
            "4x Refrigerante 1L",
          ],
        },
      ],
    },

    // NO SE USA — Combos Simples → vacío
    combosSimples: undefined,

    // NO SE USA — Lista a la carta → vacío
    lists: undefined,

    // SE USA — Bebidas
    drinks: {
      title: "Bebidas",
      note: "Todas geladas para acompanhar seu salgado",
      categories: [
        {
          id: "refrigerantes",
          name: "Refrigerantes",
          items: [
            {
              id: "dr1",
              name: "Guaraná Antarctica",
              variants: [
                { id: "dr1-lata", label: "Lata 350ml", price: 5.0 },
                { id: "dr1-1l", label: "Garrafa 1L", price: 9.5 },
                { id: "dr1-2l", label: "Garrafa 2L", price: 15.0 },
              ],
              image: "/images/restaurants/opa/drink-placeholder.jpg",
            },
            {
              id: "dr2",
              name: "Coca-Cola",
              variants: [
                { id: "dr2-lata", label: "Lata 350ml", price: 5.5 },
                { id: "dr2-600", label: "Garrafa 600ml", price: 8.5 },
                { id: "dr2-2l", label: "Garrafa 2L", price: 16.0 },
              ],
              image: "/images/restaurants/opa/drink-placeholder.jpg",
            },
            {
              id: "dr3",
              name: "Água Mineral",
              variants: [
                { id: "dr3-sem", label: "Sem gás 500ml", price: 3.5 },
                { id: "dr3-com", label: "Com gás 500ml", price: 4.0 },
              ],
              image: "/images/restaurants/opa/drink-placeholder.jpg",
            },
          ],
        },
        {
          id: "sucos",
          name: "Sucos Naturais",
          items: [
            {
              id: "dr4",
              name: "Suco de Laranja",
              description: "Feito na hora, sem açúcar",
              variants: [
                { id: "dr4-300", label: "Copo 300ml", price: 12.0 },
                { id: "dr4-500", label: "Garrafa 500ml", price: 18.0 },
              ],
              image: "/images/restaurants/opa/drink-placeholder.jpg",
            },
            {
              id: "dr5",
              name: "Suco de Maracujá",
              variants: [
                { id: "dr5-300", label: "Copo 300ml", price: 13.0 },
                { id: "dr5-500", label: "Garrafa 500ml", price: 19.0 },
              ],
              image: "/images/restaurants/opa/drink-placeholder.jpg",
            },
          ],
        },
      ],
    },

    // ✅ SE USA — Menú del Día
    menuDelDia: {
      title: "Prato do Dia 🍽️",
      days: [
        {
          day: 2, // Miércoles
          title: "Feijoada Completa",
          items: [
            {
              id: "dia1",
              name: "Feijoada Completa",
              description: "Feijão preto, carnes, farofa, couve, arroz e laranja",
              price: 32.0,
              image: "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg",
            },
            {
              id: "dia2",
              name: "Porção Extra de Farofa",
              price: 8.0,
            },
          ],
        },
        {
          day: 3, // Jueves
          title: "Frango Assado com Polenta",
          items: [
            {
              id: "dia3",
              name: "Frango Assado Inteiro",
              description: "Com polenta cremosa, arroz e salada",
              price: 45.0,
              image: "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg",
            },
          ],
        },
        {
          day: 4, // Viernes
          title: "Macarrão com Carne",
          items: [
            {
              id: "dia4",
              name: "Macarrão ao Molho",
              description: "Com carne moída, queijo ralado e arroz",
              price: 28.0,
            },
          ],
        },
      ],
    },
  },
};