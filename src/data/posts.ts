export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover: string;
  content: Block[];
}

export const posts: Post[] = [
  {
    slug: "como-cuidar-do-seu-jeans",
    title: "Como cuidar do seu jeans para que ele dure uma vida",
    excerpt:
      "Lavar menos, secar à sombra e respeitar o tempo do tecido. Um guia simples para manter a cor e o caimento do seu denim favorito.",
    category: "Cuidados",
    date: "12 set 2026",
    readingTime: "5 min",
    cover: "1602293589930-45aad59ba3ab",
    content: [
      { type: "p", text: "Um bom jeans não é descartável. Ele ganha a forma do seu corpo, registra os seus caminhos e, com o cuidado certo, fica mais bonito com o passar dos anos. O segredo está em pequenos hábitos." },
      { type: "h2", text: "Lave menos do que você imagina" },
      { type: "p", text: "O denim de qualidade não precisa ir para a máquina a cada uso. Arejar a peça à sombra, pendurada, já resolve boa parte do dia a dia. Quando for lavar, prefira água fria e vire a peça do avesso para preservar a cor." },
      { type: "ul", items: ["Vire do avesso e feche botões e zíperes", "Use água fria e sabão neutro", "Evite alvejantes e amaciantes em excesso", "Nunca use secadora — seque à sombra"] },
      { type: "quote", text: "O jeans perfeito não se compra pronto. Ele se constrói com o tempo." },
      { type: "h2", text: "Guarde com carinho" },
      { type: "p", text: "Dobre as calças em vez de pendurá-las pelos passantes, que podem deformar. Jaquetas vão bem em cabides largos de madeira, que respeitam a estrutura dos ombros." },
      { type: "p", text: "E lembre-se: pequenas marcas de uso não são defeito. São a história da sua peça." },
    ],
  },
  {
    slug: "chapeu-certo-para-seu-rosto",
    title: "O chapéu certo para o formato do seu rosto",
    excerpt: "Aba larga, copa alta, feltro ou palha? Descubra qual modelo valoriza os seus traços e combina com a sua rotina.",
    category: "Estilo",
    date: "28 ago 2026",
    readingTime: "4 min",
    cover: "1718225729835-3ac920f9a299",
    content: [
      { type: "p", text: "O chapéu é a assinatura do look country. Mas, para que ele pareça uma extensão natural de quem você é, vale observar proporções." },
      { type: "h2", text: "Rosto redondo" },
      { type: "p", text: "Prefira copas mais altas e abas médias, levemente curvadas nas laterais. Elas criam verticalidade e alongam o rosto." },
      { type: "h2", text: "Rosto alongado" },
      { type: "p", text: "Abas mais largas e copas mais baixas equilibram a proporção. Modelos rancheros em feltro são uma ótima escolha." },
      { type: "quote", text: "Quando o chapéu está certo, você esquece que está usando — e todos reparam." },
      { type: "h2", text: "Rosto quadrado ou coração" },
      { type: "p", text: "Abas com curvatura suave quebram ângulos marcados. Aposte em tons terrosos, que suavizam ainda mais o conjunto." },
    ],
  },
  {
    slug: "guarda-roupa-country-essencial",
    title: "Guarda-roupa country essencial: 7 peças que resolvem tudo",
    excerpt: "Com poucas peças bem escolhidas é possível montar dezenas de looks — do rodeio ao jantar, sem perder a elegância.",
    category: "Moda",
    date: "15 ago 2026",
    readingTime: "6 min",
    cover: "1776951128555-00bf9306372b",
    content: [
      { type: "p", text: "Um guarda-roupa inteligente começa pela base. Estas são as peças que mais usamos, combinamos e recomendamos para quem quer se vestir bem com o mínimo de esforço." },
      { type: "ul", items: ["Uma calça jeans flare de lavagem média", "Uma calça reta de denim escuro", "Camisa western de tricoline branca", "Jaqueta jeans clássica", "Um vestido midi fluido", "Bota texana em couro caramelo", "Chapéu de feltro em tom neutro"] },
      { type: "h2", text: "A regra das três cores" },
      { type: "p", text: "Monte cada look com no máximo três cores principais. Azul do denim, um tom terroso e um neutro claro formam uma combinação que nunca falha." },
      { type: "quote", text: "Menos peças, mais intenção." },
      { type: "p", text: "A partir dessa base, os acessórios — cintos, bolsas, lenços — entram para dar personalidade a cada produção." },
    ],
  },
  {
    slug: "vida-no-campo-com-elegancia",
    title: "Vida no campo, com elegância",
    excerpt: "A mulher do agro de hoje transita entre a lida e a cidade. Conversamos sobre como o estilo acompanha essa rotina.",
    category: "Lifestyle",
    date: "02 ago 2026",
    readingTime: "7 min",
    cover: "1545556227-703d61c769d2",
    content: [
      { type: "p", text: "Ela acorda cedo, confere o gado, resolve a planilha, pega a estrada e, à noite, ainda encontra as amigas para jantar. A rotina é múltipla — e o guarda-roupa precisa acompanhar." },
      { type: "h2", text: "Peças que transitam" },
      { type: "p", text: "Jeans de boa modelagem, camisas bem cortadas e uma bota confortável formam o uniforme de quem não tem tempo a perder. A troca de um acessório transforma o look do dia no look da noite." },
      { type: "quote", text: "Tradição não é o oposto de sofisticação. É a sua raiz." },
      { type: "p", text: "Na Estância Country, acreditamos que vestir-se bem é uma forma de respeito: pela terra, pelo trabalho e por si mesma." },
    ],
  },
  {
    slug: "bota-texana-guia",
    title: "Bota texana: guia para escolher, amaciar e conservar",
    excerpt: "Do bico ao salto, tudo o que você precisa saber antes de investir no par que vai te acompanhar por anos.",
    category: "Cuidados",
    date: "20 jul 2026",
    readingTime: "5 min",
    cover: "1553385363-6d4790dbd976",
    content: [
      { type: "p", text: "Uma boa bota texana é um investimento. Escolher bem e cuidar direito faz toda a diferença entre um par que machuca e um que parece feito sob medida." },
      { type: "h2", text: "Na hora de escolher" },
      { type: "ul", items: ["O calcanhar pode subir levemente nos primeiros usos", "A parte mais larga do pé deve coincidir com a da bota", "Prefira experimentar no fim do dia, com meias finas"] },
      { type: "h2", text: "Amaciando o couro" },
      { type: "p", text: "Use a bota em casa por curtos períodos durante a primeira semana. O couro legítimo cede e se molda ao seu pé naturalmente." },
      { type: "quote", text: "Couro bom é como amizade antiga: melhora com o tempo." },
      { type: "h2", text: "Conservação" },
      { type: "p", text: "Limpe com pano seco, hidrate o couro a cada dois meses e guarde com formas ou jornal por dentro, longe da umidade." },
    ],
  },
  {
    slug: "tons-terrosos-na-moda",
    title: "Tons terrosos: a paleta que nunca sai de cena",
    excerpt: "Caramelo, café, vinho e creme. Por que as cores da terra são sinônimo de sofisticação atemporal.",
    category: "Moda",
    date: "05 jul 2026",
    readingTime: "4 min",
    cover: "1649099690583-c68f829216de",
    content: [
      { type: "p", text: "Existe algo de profundamente elegante nas cores que vêm da natureza. Elas acalmam, harmonizam entre si e combinam com todos os tons de pele." },
      { type: "h2", text: "Como combinar" },
      { type: "p", text: "Comece com uma base clara — creme ou off-white — e adicione camadas de caramelo e marrom. Um toque de vinho ou dourado, em um acessório, completa a composição." },
      { type: "quote", text: "A terra já nos deu a paleta perfeita. Só precisamos vesti-la." },
      { type: "p", text: "Tons terrosos também envelhecem bem nas peças: o couro escurece, o suede ganha textura e tudo parece ainda mais autêntico." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
