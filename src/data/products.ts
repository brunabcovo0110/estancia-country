export type Category = "jeans" | "roupas" | "acessorios";

export const categories: { value: Category | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "jeans", label: "Jeans" },
  { value: "roupas", label: "Roupas" },
  { value: "acessorios", label: "Acessórios" },
];

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: string;
  tagline: string;
  description: string;
  details: string[];
  sizes: string[];
  /** IDs de fotos do Unsplash; a primeira é a capa. */
  images: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "jaqueta-jeans-sertao",
    name: "Jaqueta Jeans Sertão",
    category: "jeans",
    price: "R$ 389",
    tagline: "O clássico que atravessa estações.",
    description:
      "Jaqueta em denim de algodão encorpado, lavagem média e caimento levemente amplo. Pensada para sobrepor camisas de botão e vestidos leves, do café na fazenda ao jantar na cidade.",
    details: ["100% algodão, 12 oz", "Botões metálicos envelhecidos", "Bolsos frontais com lapela", "Lavagem média artesanal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: ["1587385963734-f90a8054ab3e", "1627910002390-9312430eabf3", "1543076447-215ad9ba6923"],
    featured: true,
  },
  {
    slug: "calca-flare-porteira",
    name: "Calça Flare Porteira",
    category: "jeans",
    price: "R$ 329",
    tagline: "Cintura alta, barra ampla, postura de sobra.",
    description:
      "A flare que alonga a silhueta e abraça a bota. Cintura alta, elastano na medida certa para conforto o dia inteiro e barra desenhada para cair perfeitamente sobre o cano da bota texana.",
    details: ["98% algodão, 2% elastano", "Cintura alta", "Barra ampla para uso com bota", "Lavagem clara stone"],
    sizes: ["36", "38", "40", "42", "44", "46"],
    images: ["1475178626620-a4d074967452", "1541099649105-f69ad21f3246", "1602293589930-45aad59ba3ab"],
    featured: true,
  },
  {
    slug: "calca-reta-cerca-viva",
    name: "Calça Reta Cerca Viva",
    category: "jeans",
    price: "R$ 299",
    tagline: "Reta, honesta e feita para durar.",
    description:
      "Modelagem reta de cintura média em denim rígido que amacia com o uso, ganhando a sua forma. A peça-base de qualquer guarda-roupa country.",
    details: ["100% algodão rígido", "Cintura média", "Cinco bolsos", "Costuras reforçadas em caramelo"],
    sizes: ["36", "38", "40", "42", "44"],
    images: ["1472749551955-e2319841d9a0", "1602293589930-45aad59ba3ab", "1541099649105-f69ad21f3246"],
  },
  {
    slug: "jaqueta-franjada-cafe",
    name: "Jaqueta Franjada Café",
    category: "roupas",
    price: "R$ 549",
    tagline: "Movimento em cada passo.",
    description:
      "Jaqueta em suede sintético de toque macio com franjas longas nas mangas e na pala. Uma homenagem ao western clássico em um tom café que combina com tudo.",
    details: ["Suede sintético premium", "Forro em viscose", "Franjas de 18 cm", "Fechamento por botões de pressão"],
    sizes: ["P", "M", "G"],
    images: ["1509461641751-ed8c60422376", "1762236097078-c124af3ab2f5", "1775563622960-b2cfe13d495d"],
    featured: true,
  },
  {
    slug: "camisa-western-alvorada",
    name: "Camisa Western Alvorada",
    category: "roupas",
    price: "R$ 259",
    tagline: "Pala recortada, botões de madrepérola.",
    description:
      "Camisa de tricoline com pala western recortada, botões em madrepérola e punhos longos. Fica impecável por dentro do jeans com um bom cinto de fivela.",
    details: ["100% algodão tricoline", "Pala western frontal e costas", "Botões em madrepérola", "Modelagem ajustada"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: ["1682715829643-85dc08535121", "1776951128555-00bf9306372b", "1590881155820-8bc541eb95c7"],
    featured: true,
  },
  {
    slug: "vestido-midi-entardecer",
    name: "Vestido Midi Entardecer",
    category: "roupas",
    price: "R$ 369",
    tagline: "Leveza para os fins de tarde no campo.",
    description:
      "Vestido midi em viscose fluida, decote em V com botões e cintura marcada. Combina com bota e chapéu para uma produção romântica sem perder a atitude.",
    details: ["100% viscose", "Comprimento midi", "Botões frontais", "Faixa removível na cintura"],
    sizes: ["P", "M", "G"],
    images: ["1677213583988-538cd7a777d4", "1595871644797-a5bd863fa75d", "1685457801785-4050705fafe1"],
  },
  {
    slug: "colete-camurca-tropeira",
    name: "Casaco Camurça Tropeira",
    category: "roupas",
    price: "R$ 489",
    tagline: "O tom da terra, em camadas.",
    description:
      "Casaco em camurça sintética com corte reto e bolsos amplos. Uma terceira peça que eleva o jeans e a camisa básica a um look completo.",
    details: ["Camurça sintética", "Forro acetinado", "Bolsos laterais", "Comprimento ao quadril"],
    sizes: ["P", "M", "G", "GG"],
    images: ["1762236097078-c124af3ab2f5", "1775563622960-b2cfe13d495d", "1509461641751-ed8c60422376"],
  },
  {
    slug: "chapeu-feltro-ranchera",
    name: "Chapéu Feltro Ranchera",
    category: "acessorios",
    price: "R$ 459",
    tagline: "A assinatura de todo look.",
    description:
      "Chapéu em feltro de lã com copa marcada e aba de 9 cm levemente curvada. Fita em couro legítimo com pequeno detalhe metálico dourado.",
    details: ["Feltro 100% lã", "Aba de 9 cm", "Fita em couro legítimo", "Carneira interna ajustável"],
    sizes: ["55", "56", "57", "58"],
    images: ["1590881155820-8bc541eb95c7", "1543059583-04b5b0950e9a", "1718225729835-3ac920f9a299"],
    featured: true,
  },
  {
    slug: "chapeu-noite-pampa",
    name: "Chapéu Noite no Pampa",
    category: "acessorios",
    price: "R$ 479",
    tagline: "Preto absoluto, elegância sem esforço.",
    description:
      "Versão em feltro preto do nosso chapéu mais amado. Copa alta e aba estruturada para quem gosta de presença.",
    details: ["Feltro 100% lã", "Aba de 10 cm", "Fita em gorgurão", "Acompanha caixa para transporte"],
    sizes: ["55", "56", "57", "58"],
    images: ["1548178414-0cb6a33e9a1a", "1776951129807-546f0ecd3e3e", "1776951130024-3e9c2d0cfba3"],
  },
  {
    slug: "bota-texana-caramelo",
    name: "Bota Texana Caramelo",
    category: "acessorios",
    price: "R$ 689",
    tagline: "Couro legítimo, pesponto à mão.",
    description:
      "Bota texana em couro bovino legítimo com cano bordado em pesponto tom sobre tom, bico fino e salto cubano de 5 cm. Feita para durar anos — e ficar mais bonita com eles.",
    details: ["Couro bovino legítimo", "Salto cubano 5 cm", "Palmilha acolchoada", "Solado em couro e borracha"],
    sizes: ["34", "35", "36", "37", "38", "39"],
    images: ["1649639763329-dccbd16fbf4d", "1553385363-6d4790dbd976", "1735851733101-4c700ce2df4c"],
    featured: true,
  },
  {
    slug: "cinto-fivela-estrela",
    name: "Cinto Fivela Estrela",
    category: "acessorios",
    price: "R$ 219",
    tagline: "O detalhe que amarra tudo.",
    description:
      "Cinto em couro legítimo com fivela metálica trabalhada em estilo western. Largura de 3,5 cm, ideal para passantes de calças jeans.",
    details: ["Couro legítimo", "Fivela em metal envelhecido", "Largura de 3,5 cm", "Cinco furos de ajuste"],
    sizes: ["P", "M", "G"],
    images: ["1752386268324-0533ffbfbc0e", "1776951129328-d85072dbdefe", "1472749551955-e2319841d9a0"],
  },
  {
    slug: "bolsa-tote-selaria",
    name: "Bolsa Tote Selaria",
    category: "acessorios",
    price: "R$ 529",
    tagline: "Couro que conta histórias.",
    description:
      "Tote espaçosa em couro legítimo com acabamento de selaria, alças longas e bolso interno. Cabe o dia inteiro — e envelhece com charme.",
    details: ["Couro legítimo", "Costuras de selaria", "Bolso interno com zíper", "Medidas: 38 × 32 × 12 cm"],
    sizes: ["Único"],
    images: ["1637759292654-a12cb2be085e", "1473188588951-666fce8e7c68", "1624687943971-e86af76d57de"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryLabel(category: Category) {
  return categories.find((c) => c.value === category)?.label ?? category;
}
