import type { Restaurant } from "./types";

export const avibis: Restaurant = {
  slug: "avibis",
  name: "Avibi's",
  tagline: "Tempero e Sabor",
  splashStyle: "minimal",
  phone: "(41) 99146-6120",
  logo: "/images/restaurants/avibis/cheff.png",
  splash: "/images/restaurants/avibis/splash.jpg",
  address: "Rua Arnoldo, 1051 - Fazendinha, Curitiba - PR",
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
      image:
        "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?s=612x612&w=0&k=20&c=jwKJmGErrLe2XsTWNYEEyiNicudYVA4j8jvnTiJdp58=",
      title: "Promoção do Dia!",
      subtitle: "Prato completo com desconto especial",
    },
    {
      id: 2,
      image:
        "https://controlenamao.com.br/blog/wp-content/uploads/2025/02/Como-Montar-um-Restaurante-Prato-Feito-PF_-Guia-em-10-passos.webp",
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
      image:
        "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=0&k=20&c=prMIQVeOLhb-dudI5C-gHr_LkAzDEbFxU06LU4Omi6E=",
      alt: "Prato especial",
    },
    {
      id: 2,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      alt: "Reel: Preparando na cozinha",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=",
      alt: "Mesa servida",
    },
    {
      id: 4,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      alt: "Reel: Nossos cortes de carne",
    },
    {
      id: 5,
      image:
        "https://img.magnific.com/free-photo/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view_2829-17420.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Detalhe do prato",
    },
    {
      id: 6,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      alt: "Reel: Ambiente do restaurante",
    },
    {
      id: 7,
      image:
        "https://img.magnific.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg",
      alt: "Prato do dia",
    },
    {
      id: 8,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      alt: "Reel: Sobremesas especiais",
    },
    {
      id: 9,
      image:
        "https://media.istockphoto.com/id/1471662975/photo/summer-cold-drinks-big-glass-jars-with-tap-filled-with-fresh-cold-drinks-served-in-bar-event.jpg?s=1024x1024&w=is&k=20&c=-EMrJ6LjNkbOy5YCGNfRRtr6hDliQ0eVcukHMbp9ka8=",
      alt: "Bebida gelada",
    },
    {
      id: 10,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      alt: "Reel: Drinks da casa",
    },
    {
      id: 11,
      image:
        "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=",
      alt: "Família",
    },
    {
      id: 12,
      image: "https://kriaan.com/wp-content/uploads/2025/08/task-lighting.webp",
      alt: "Avibi's",
    },
  ],

  social: {
    facebook: "https://facebook.com/avibis",
    instagram: "https://instagram.com/avibis",
    tiktok: "https://tiktok.com/@avibis",
  },

  menuPath: "/menu",

  menuData: {
    combosPremium: {
      title: "Combos Premium",
      items: [
        {
          id: "c1",
          name: "Combo Avibi Especial",
          shortName: "Avibi Especial",
          shortDescription: "A combinação perfeita para 2 pessoas.",
          largeDescription:
            "Desfrute do nosso Combo Avibi Especial preparado na hora com ingredientes frescos. Inclui porção generosa ideal para compartilhar, acompanhada de molhos especiais da casa e bebida gelada.",
          price: 58.9,
          promoPrice: 49.9,
          badge: "Mais Pedido",
          serves: "2 pessoas",
          image:
            "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=0&k=20&c=prMIQVeOLhb-dudI5C-gHr_LkAzDEbFxU06LU4Omi6E=",
          includes: [
            "1x Arroz Cantonês Médio",
            "2x Lumpias Tradicionais",
            "1x Guaraná 1L",
          ],
        },
        {
          id: "c2",
          name: "Combo Família Cantonesa",
          shortName: "Família Cantonesa",
          shortDescription: "Servidão completa para até 4 pessoas.",
          largeDescription:
            "A opção definitiva para reunir a família. Porção robusta de arroz cantonês com carnes selecionadas, rolinhos primavera crocantes e acompanhamentos de primeira qualidade para garantir a satisfação de todos.",
          price: 98.0,
          badge: "Super Desconto",
          serves: "4 pessoas",
          image:
            "https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=",
          includes: [
            "1x Arroz Cantonês Grande",
            "1x Frango Xadrez",
            "4x Lumpias",
            "1x Refrigerante 2L",
          ],
        },
      ],
    },
    combosSimples: {
      title: "Combos",
      note: "Todas as promoções: se quiser adicionar porco agridoce, haverá um adicional de 30% no valor da porção.",
      previewCount: 6,
      items: [
        {
          id: "cs1",
          name: "Arroz Chino + Frango Agridoce + Batata Frita + 1 Coca 600ml",
          shortName: "Arroz Chino + Frango",
          price: 100,
          serves: "1 pessoa",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: [
            "Arroz Chino",
            "Frango Agridoce",
            "Batata Frita",
            "1 Coca 600ml",
          ],
        },
        {
          id: "cs2",
          name: "Arroz Tradicional + Frango Agridoce",
          shortName: "Tradicional + Frango",
          price: 210,
          serves: "3 pessoas",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: ["Arroz Tradicional", "Frango Agridoce"],
        },
        {
          id: "cs3",
          name: "Arroz Chino + Doble Frango Agridoce + Batata Frita + 1 Pepsi 2L",
          shortName: "Chino + Doble Frango",
          price: 315,
          serves: "4 pessoas",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: [
            "Arroz Chino",
            "Doble Frango Agridoce",
            "Batata Frita",
            "1 Pepsi 2L",
          ],
        },
        {
          id: "cs4",
          name: "Arroz Chino + Frango Agridoce + 1 Coca 1L",
          shortName: "Chino + Frango + Coca",
          price: 260,
          serves: "3 pessoas",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: ["Arroz Chino", "Frango Agridoce", "1 Coca 1L"],
        },
        {
          id: "cs5",
          name: "Arroz Chino Especial com Camarão + 1 Refri 1L",
          shortName: "Especial com Camarão",
          shortDescription: "Retirar no balcão",
          price: 210,
          serves: "2 pessoas",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: ["Arroz Chino Especial com Camarão", "1 Refri 1L"],
        },
        {
          id: "cs6",
          name: "Promoção de Camarão — 15 camarões",
          shortName: "Promoção de Camarão",
          price: 115,
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: ["15 camarões"],
        },
        {
          id: "cs7",
          name: "Arroz Canton + Frango Agridoce",
          shortName: "Canton + Frango",
          price: 185,
          serves: "3 pessoas",
          image: "/images/restaurants/avibis/combo-placeholder.jpg",
          includes: ["Arroz Canton", "Frango Agridoce"],
        },
      ],
    },
    lists: {
      title: "Cardápio",
      categories: [
        {
          id: "arroz",
          name: "Arroz Chino Cantonez",
          note: "Para 1 pessoa: 600 g de comida. Brinde: 1 refri 350ml por pessoa.",
          items: [
            { id: "a1", name: "Arroz Tradicional", price: 48 },
            { id: "a2", name: "Arroz Tradicional + Frango", price: 78 },
            {
              id: "a3",
              name: "Arroz Tradicional + Frango + Batata",
              price: 96,
            },
            { id: "a4", name: "Arroz Cantonez", price: 90 },
            { id: "a5", name: "Arroz Delícia", price: 102 },
            { id: "a6", name: "Arroz Chino Mar e Terra", price: 144 },
          ],
        },
        {
          id: "porcoes",
          name: "Porções",
          items: [
            {
              id: "p1",
              name: "Frango Frito",
              variants: [
                { id: "3", label: "3 pedaços G", price: 96 },
                { id: "5", label: "5 pedaços", price: 120 },
                { id: "8", label: "8 pedaços", price: 156 },
                { id: "10", label: "10 pedaços", price: 180 },
              ],
            },
            {
              id: "p2",
              name: "Batata Frita",
              variants: [
                { id: "400", label: "400 g", price: 72 },
                { id: "500", label: "500 g", price: 84 },
                { id: "1000", label: "1 kg", price: 120 },
              ],
            },
            {
              id: "p3",
              name: "Lumpia",
              variants: [
                { id: "1", label: "1 unidade", price: 36 },
                { id: "3", label: "3 unidades", price: 72 },
                { id: "5", label: "5 unidades", price: 120 },
              ],
            },
            {
              id: "p4",
              name: "Costelinha Agridoce Porco",
              variants: [
                { id: "p", label: "P · 3 pessoas", price: 96 },
                { id: "m", label: "M · 5 pessoas", price: 180 },
                { id: "g", label: "G · 8 pessoas", price: 216 },
              ],
            },
          ],
        },
      ],
    },
    drinks: {
      title: "Bebidas",
      note: "Bebidas geladas para acompanhar sua refeição",
      categories: [
        {
          id: "refrigerantes",
          name: "Refrigerantes",
          items: [
            {
              id: "b1",
              name: "Guaraná Antarctica",
              description: "Tradicional e gelado",
              variants: [
                { id: "b1-350", label: "Lata 350ml", price: 6.0 },
                { id: "b1-1l", label: "Garrafa 1L", price: 12.0 },
                { id: "b1-2l", label: "Garrafa 2L", price: 18.0 },
              ],
              image: "/images/restaurants/avibis/drink-placeholder.jpg",
            },
            {
              id: "b2",
              name: "Coca-Cola",
              description: "Original",
              variants: [
                { id: "b2-350", label: "Lata 350ml", price: 5.5 },
                { id: "b2-600", label: "Garrafa 600ml", price: 9.0 },
                { id: "b2-1l", label: "Garrafa 1L", price: 13.0 },
                { id: "b2-2l", label: "Garrafa 2L", price: 19.0 },
              ],
              image: "/images/restaurants/avibis/drink-placeholder.jpg",
            },
            {
              id: "b3",
              name: "Pepsi",
              description: "Refrescante",
              variants: [
                { id: "b3-350", label: "Lata 350ml", price: 5.0 },
                { id: "b3-2l", label: "Garrafa 2L", price: 17.0 },
              ],
              image: "/images/restaurants/avibis/drink-placeholder.jpg",
            },
          ],
        },
        {
          id: "outros",
          name: "Outras Bebidas",
          items: [
            {
              id: "b4",
              name: "Água Mineral",
              description: "Sem gás / Com gás",
              variants: [
                { id: "b4-sg", label: "Sem gás 500ml", price: 4.0 },
                { id: "b4-cg", label: "Com gás 500ml", price: 4.5 },
                { id: "b4-15l", label: "Garrafa 1.5L", price: 8.0 },
              ],
              image: "/images/restaurants/avibis/drink-placeholder.jpg",
            },
            {
              id: "b5",
              name: "Suco Natural de Laranja",
              description: "Feito na hora, sem açúcar",
              variants: [
                { id: "b5-300", label: "Copo 300ml", price: 15.0 },
                { id: "b5-500", label: "Garrafa 500ml", price: 22.0 },
              ],
              image: "/images/restaurants/avibis/drink-placeholder.jpg",
            },
          ],
        },
      ],
    },
  },
};
