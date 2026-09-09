/* =========================================
   CIRCUITO — script.js
========================================= */

/* =========================================
   CATEGORIAS
   Adicione ou remova categorias aqui. O "id" é usado
   para ligar produtos <-> categoria <-> filtros.
========================================= */
const categories = [
  { id: "notebooks", nome: "Notebooks", icone: "💻" },
  { id: "smartphones", nome: "Smartphones", icone: "📱" },
  { id: "audio", nome: "Áudio", icone: "🎧" },
  { id: "games", nome: "Games", icone: "🎮" },
  { id: "monitores", nome: "Monitores", icone: "🖥️" },
  { id: "perifericos", nome: "Periféricos", icone: "⌨️" },
  { id: "cameras", nome: "Câmeras", icone: "📷" },
  { id: "componentes", nome: "Componentes", icone: "⚡" },
];

/* =========================================
   PRODUTOS
   Para adicionar um novo produto, copie um bloco { ... }
   e ajuste os campos. "category" precisa ser um dos
   ids definidos em `categories` acima.

   IMAGEM DO PRODUTO: as URLs abaixo são placeholders.
   Substitua "image" pela URL real da imagem do produto.

   LINK DE AFILIADO: substitua "affiliateLink" pelo seu
   link de afiliado de cada produto — cada card usa esse
   campo diretamente no botão "VER OFERTA".
========================================= */
const products = [
  // ---------- NOTEBOOKS ----------
  {
    id: "p01",
    name: "Notebook Gamer Vortex X15",
    category: "notebooks",
    // IMAGEM DO PRODUTO: SUBSTITUA A URL ABAIXO
    image: "https://picsum.photos/seed/vortex-x15/480/360",
    oldPrice: 6499.90,
    price: 4799.90,
    rating: 4.6,
    // =========================================
    // LINK DE AFILIADO DO PRODUTO
    // SUBSTITUA O LINK ABAIXO PELO SEU LINK
    // =========================================
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p02",
    name: "Ultrabook Slim Air 14",
    category: "notebooks",
    image: "https://picsum.photos/seed/slim-air-14/480/360",
    oldPrice: 4299.00,
    price: 3399.00,
    rating: 4.8,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p03",
    name: "Notebook Office Prime 15",
    category: "notebooks",
    image: "https://picsum.photos/seed/office-prime-15/480/360",
    oldPrice: 2899.00,
    price: 2199.00,
    rating: 4.3,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- SMARTPHONES ----------
  {
    id: "p04",
    name: "Smartphone Nebula S23",
    category: "smartphones",
    image: "https://picsum.photos/seed/nebula-s23/480/360",
    oldPrice: 3999.00,
    price: 2999.00,
    rating: 4.7,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p05",
    name: "Smartphone Fusion Lite 128GB",
    category: "smartphones",
    image: "https://picsum.photos/seed/fusion-lite/480/360",
    oldPrice: 1899.00,
    price: 1399.00,
    rating: 4.4,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p06",
    name: "Smartphone Zenith Pro Max",
    category: "smartphones",
    image: "https://picsum.photos/seed/zenith-pro-max/480/360",
    oldPrice: 6299.00,
    price: 4999.00,
    rating: 4.9,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- ÁUDIO ----------
  {
    id: "p07",
    name: "Fone Bluetooth SoundWave Pro",
    category: "audio",
    image: "https://picsum.photos/seed/soundwave-pro/480/360",
    oldPrice: 599.90,
    price: 349.90,
    rating: 4.5,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p08",
    name: "Caixa de Som Boom Cube 60W",
    category: "audio",
    image: "https://picsum.photos/seed/boom-cube/480/360",
    oldPrice: 799.00,
    price: 549.00,
    rating: 4.2,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- GAMES ----------
  {
    id: "p09",
    name: "Controle Wireless ProPlay",
    category: "games",
    image: "https://picsum.photos/seed/proplay/480/360",
    oldPrice: 349.90,
    price: 249.90,
    rating: 4.6,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p10",
    name: "Headset Gamer BattleSound 7.1",
    category: "games",
    image: "https://picsum.photos/seed/battlesound/480/360",
    oldPrice: 499.90,
    price: 329.90,
    rating: 4.4,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p11",
    name: "Cadeira Gamer FlexZone",
    category: "games",
    image: "https://picsum.photos/seed/flexzone/480/360",
    oldPrice: 1299.00,
    price: 899.00,
    rating: 4.3,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- MONITORES ----------
  {
    id: "p12",
    name: 'Monitor Gamer 27" 165Hz UltraView',
    category: "monitores",
    image: "https://picsum.photos/seed/ultraview-27/480/360",
    oldPrice: 1899.00,
    price: 1349.00,
    rating: 4.7,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p13",
    name: 'Monitor UltraWide 34" CineView',
    category: "monitores",
    image: "https://picsum.photos/seed/cineview-34/480/360",
    oldPrice: 2999.00,
    price: 2199.00,
    rating: 4.8,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- PERIFÉRICOS ----------
  {
    id: "p14",
    name: "Teclado Mecânico RGB TypeMaster",
    category: "perifericos",
    image: "https://picsum.photos/seed/typemaster/480/360",
    oldPrice: 449.90,
    price: 299.90,
    rating: 4.5,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p15",
    name: "Mouse Gamer HyperClick 16000DPI",
    category: "perifericos",
    image: "https://picsum.photos/seed/hyperclick/480/360",
    oldPrice: 259.90,
    price: 169.90,
    rating: 4.6,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p16",
    name: "Mousepad XL SpeedSurface",
    category: "perifericos",
    image: "https://picsum.photos/seed/speedsurface/480/360",
    oldPrice: 129.90,
    price: 79.90,
    rating: 4.1,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- CÂMERAS ----------
  {
    id: "p17",
    name: "Câmera Action Cam ClickPro 4K",
    category: "cameras",
    image: "https://picsum.photos/seed/clickpro-4k/480/360",
    oldPrice: 899.00,
    price: 649.00,
    rating: 4.4,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p18",
    name: "Webcam FullHD StreamEye",
    category: "cameras",
    image: "https://picsum.photos/seed/streameye/480/360",
    oldPrice: 349.90,
    price: 229.90,
    rating: 4.3,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },

  // ---------- COMPONENTES ----------
  {
    id: "p19",
    name: "Placa de Vídeo RTX Turbo 4070",
    category: "componentes",
    image: "https://picsum.photos/seed/rtx-turbo-4070/480/360",
    oldPrice: 4999.00,
    price: 3799.00,
    rating: 4.9,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p20",
    name: "Processador Ryzen Core Fusion 9",
    category: "componentes",
    image: "https://picsum.photos/seed/fusion-9/480/360",
    oldPrice: 2799.00,
    price: 2199.00,
    rating: 4.7,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
  {
    id: "p21",
    name: "SSD NVMe 1TB VelocityX",
    category: "componentes",
    image: "https://picsum.photos/seed/velocityx/480/360",
    oldPrice: 599.90,
    price: 379.90,
    rating: 4.6,
    affiliateLink: "COLE_SEU_LINK_DE_AFILIADO_AQUI",
  },
];

/* =========================================
   NOTÍCIAS
   Conteúdo fictício/demonstrativo. Para adicionar uma
   notícia real, copie um bloco e ajuste os campos.
   "link" é o local para colocar a URL da notícia completa.
========================================= */
const news = [
  {
    id: "n01",
    title: "Nova geração de processadores promete até 30% mais desempenho",
    category: "Componentes",
    date: "2026-09-05",
    image: "https://picsum.photos/seed/news-cpu-gen/640/420",
    summary: "Fabricantes apresentam nova arquitetura voltada para eficiência energética, prometendo ganhos relevantes em tarefas do dia a dia e em jogos.",
    // NOTÍCIA COMPLETA: SUBSTITUA O LINK ABAIXO
    link: "#",
  },
  {
    id: "n02",
    title: "Placas de vídeo com IA embutida chegam ao mercado",
    category: "Componentes",
    date: "2026-09-03",
    image: "https://picsum.photos/seed/news-gpu-ai/640/420",
    summary: "Novos modelos trazem núcleos dedicados a inteligência artificial, melhorando upscaling de imagem e geração de quadros em jogos.",
    link: "#",
  },
  {
    id: "n03",
    title: "Fabricante anuncia smartphone com câmera de 200MP",
    category: "Smartphones",
    date: "2026-09-01",
    image: "https://picsum.photos/seed/news-phone-200mp/640/420",
    summary: "O sensor promete mais detalhes em zoom digital e melhor desempenho em ambientes com pouca luz, segundo a fabricante.",
    link: "#",
  },
  {
    id: "n04",
    title: "Novo notebook ultrafino pesa menos de 1kg",
    category: "Notebooks",
    date: "2026-08-29",
    image: "https://picsum.photos/seed/news-notebook-1kg/640/420",
    summary: "Modelo aposta em chassi de fibra de carbono e bateria de longa duração, mantendo o desempenho para tarefas de produtividade.",
    link: "#",
  },
  {
    id: "n05",
    title: "Inteligência artificial passa a rodar direto no chip do celular",
    category: "Inteligência Artificial",
    date: "2026-08-27",
    image: "https://picsum.photos/seed/news-ai-chip/640/420",
    summary: "Processamento local reduz a dependência da internet para tarefas de IA, melhorando velocidade de resposta e privacidade dos dados.",
    link: "#",
  },
  {
    id: "n06",
    title: "Streaming de jogos ganha nova plataforma gratuita",
    category: "Games",
    date: "2026-08-24",
    image: "https://picsum.photos/seed/news-game-streaming/640/420",
    summary: "Serviço permite jogar títulos populares direto do navegador, sem necessidade de instalação ou hardware potente.",
    link: "#",
  },
  {
    id: "n07",
    title: "Fone de ouvido com cancelamento de ruído adaptativo é lançado",
    category: "Áudio",
    date: "2026-08-21",
    image: "https://picsum.photos/seed/news-anc-headphone/640/420",
    summary: "Tecnologia ajusta o nível de cancelamento automaticamente conforme o ambiente, sem necessidade de configuração manual.",
    link: "#",
  },
  {
    id: "n08",
    title: "Monitor com taxa de atualização de 500Hz chega ao Brasil",
    category: "Monitores",
    date: "2026-08-18",
    image: "https://picsum.photos/seed/news-monitor-500hz/640/420",
    summary: "Voltado para jogos competitivos, o modelo promete reduzir ainda mais a sensação de atraso entre o comando e a imagem na tela.",
    link: "#",
  },
  {
    id: "n09",
    title: "Empresa de tecnologia anuncia parceria para expandir fábricas",
    category: "Empresas",
    date: "2026-08-15",
    image: "https://picsum.photos/seed/news-factory-deal/640/420",
    summary: "Acordo prevê aumento na produção de componentes, o que pode ajudar a reduzir custos e prazos de entrega no setor.",
    link: "#",
  },
  {
    id: "n10",
    title: "Novo teclado mecânico aposta em switches óticos ultrarrápidos",
    category: "Periféricos",
    date: "2026-08-12",
    image: "https://picsum.photos/seed/news-optical-keyboard/640/420",
    summary: "Tecnologia óptica promete resposta mais rápida que switches mecânicos tradicionais, sendo indicada para jogos competitivos.",
    link: "#",
  },
];

/* =========================================
   ESTADO DOS FILTROS
========================================= */
const state = {
  categoriaAtiva: "todos",
  faixaPreco: "todas",
  busca: "",
};

/* =========================================
   HELPERS
========================================= */
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularDesconto(oldPrice, price) {
  return Math.round((1 - price / oldPrice) * 100);
}

function nomeCategoria(id) {
  const cat = categories.find((c) => c.id === id);
  return cat ? cat.nome : id;
}

/* =========================================
   RENDER: CATEGORIAS
========================================= */
function renderCategorias() {
  const grid = document.getElementById("categoriasGrid");
  grid.innerHTML = categories
    .map(
      (cat) => `
      <button class="categoria-card" data-categoria="${cat.id}">
        <span class="categoria-icone">${cat.icone}</span>
        <span class="categoria-nome">${cat.nome}</span>
      </button>`
    )
    .join("");

  grid.querySelectorAll(".categoria-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.categoriaAtiva = card.dataset.categoria;
      sincronizarFiltrosAtivos();
      renderProdutos();
      document.getElementById("ofertas").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Rodapé — lista de categorias
  const footerList = document.getElementById("footerCategorias");
  footerList.innerHTML = categories
    .map((cat) => `<li><a href="#ofertas" data-categoria="${cat.id}">${cat.icone} ${cat.nome}</a></li>`)
    .join("");

  footerList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      state.categoriaAtiva = link.dataset.categoria;
      sincronizarFiltrosAtivos();
      renderProdutos();
    });
  });
}

/* =========================================
   RENDER: FILTROS DE CATEGORIA (seção Ofertas)
========================================= */
function renderFiltros() {
  const container = document.getElementById("filtrosCategorias");
  const botoes = [{ id: "todos", nome: "Todos" }, ...categories.map((c) => ({ id: c.id, nome: c.nome }))];

  container.innerHTML = botoes
    .map(
      (b) => `<button class="filtro-btn" data-categoria="${b.id}">${b.nome}</button>`
    )
    .join("");

  container.querySelectorAll(".filtro-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.categoriaAtiva = btn.dataset.categoria;
      sincronizarFiltrosAtivos();
      renderProdutos();
    });
  });

  sincronizarFiltrosAtivos();
}

function sincronizarFiltrosAtivos() {
  document.querySelectorAll(".filtro-btn").forEach((btn) => {
    btn.classList.toggle("ativo", btn.dataset.categoria === state.categoriaAtiva);
  });
  document.querySelectorAll(".categoria-card").forEach((card) => {
    card.classList.toggle("ativa", card.dataset.categoria === state.categoriaAtiva);
  });
}

/* =========================================
   RENDER: PRODUTOS
========================================= */
function produtosFiltrados() {
  return products.filter((p) => {
    const porCategoria = state.categoriaAtiva === "todos" || p.category === state.categoriaAtiva;

    let porPreco = true;
    if (state.faixaPreco !== "todas") {
      const [min, max] = state.faixaPreco.split("-").map(Number);
      porPreco = p.price >= min && p.price <= max;
    }

    const termo = state.busca.trim().toLowerCase();
    const porBusca =
      termo === "" ||
      p.name.toLowerCase().includes(termo) ||
      nomeCategoria(p.category).toLowerCase().includes(termo);

    return porCategoria && porPreco && porBusca;
  });
}

function cardProdutoHTML(p) {
  const desconto = calcularDesconto(p.oldPrice, p.price);
  return `
    <article class="produto-card">
      <div class="produto-imagem">
        <!-- IMAGEM DO PRODUTO: SUBSTITUA A URL ABAIXO -->
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="produto-desconto">-${desconto}%</span>
      </div>
      <div class="produto-corpo">
        <span class="produto-categoria">${nomeCategoria(p.category)}</span>
        <h3 class="produto-nome">${p.name}</h3>
        <span class="produto-avaliacao"><span class="estrela">★</span> ${p.rating.toFixed(1)}</span>
        <div class="produto-precos">
          <span class="produto-preco-antigo">${formatarPreco(p.oldPrice)}</span>
          <span class="produto-preco-atual">${formatarPreco(p.price)}</span>
        </div>
        <!-- =========================================
             LINK DE AFILIADO
             COLE SEU LINK DE AFILIADO AQUI (via campo affiliateLink)
        ========================================= -->
        <a class="produto-btn" href="${p.affiliateLink}" target="_blank" rel="noopener sponsored">Ver oferta</a>
      </div>
    </article>`;
}

function renderProdutos() {
  const grid = document.getElementById("produtosGrid");
  const vazio = document.getElementById("produtosVazio");
  const lista = produtosFiltrados();

  grid.innerHTML = lista.map(cardProdutoHTML).join("");
  vazio.hidden = lista.length > 0;
  grid.hidden = lista.length === 0;
}

/* =========================================
   RENDER: PRODUTO EM DESTAQUE (Hero)
========================================= */
function renderHeroFeature() {
  const destaque = [...products].sort(
    (a, b) => calcularDesconto(b.oldPrice, b.price) - calcularDesconto(a.oldPrice, a.price)
  )[0];

  const desconto = calcularDesconto(destaque.oldPrice, destaque.price);

  document.getElementById("heroFeature").innerHTML = `
    <div class="feature-card">
      <span class="feature-tag">Maior desconto do momento — ${desconto}% OFF</span>
      <!-- IMAGEM DO PRODUTO: SUBSTITUA A URL ABAIXO -->
      <img src="${destaque.image}" alt="${destaque.name}">
      <h3>${destaque.name}</h3>
      <div class="feature-prices">
        <span class="feature-price-old">${formatarPreco(destaque.oldPrice)}</span>
        <span class="feature-price-new">${formatarPreco(destaque.price)}</span>
      </div>
    </div>`;

  document.getElementById("statProdutos").textContent = products.length;
}

/* =========================================
   RENDER: NOTÍCIAS
========================================= */
function formatarData(iso) {
  const data = new Date(iso + "T00:00:00");
  return data.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function cardNoticiaHTML(n, destaque) {
  return `
    <article class="noticia-card${destaque ? " destaque" : ""}">
      <div class="noticia-imagem">
        <!-- IMAGEM DA NOTÍCIA: SUBSTITUA A URL ABAIXO -->
        <img src="${n.image}" alt="${n.title}" loading="lazy">
      </div>
      <div class="noticia-corpo">
        <span class="noticia-categoria">${n.category}</span>
        <h3 class="noticia-titulo">${n.title}</h3>
        <p class="noticia-resumo">${n.summary}</p>
        <div class="noticia-rodape">
          <span class="noticia-data">${formatarData(n.date)}</span>
          <!-- NOTÍCIA COMPLETA: SUBSTITUA O LINK ABAIXO (campo "link") -->
          <a class="noticia-link" href="${n.link}" target="_blank" rel="noopener">Ler notícia</a>
        </div>
      </div>
    </article>`;
}

function renderNoticias() {
  const grid = document.getElementById("noticiasGrid");
  grid.innerHTML = news
    .map((n, i) => cardNoticiaHTML(n, i === 0))
    .join("");
}

/* =========================================
   BUSCA
========================================= */
function configurarBusca() {
  const toggle = document.getElementById("searchToggle");
  const bar = document.getElementById("searchBar");
  const input = document.getElementById("searchInput");
  const close = document.getElementById("searchClose");
  const hint = document.getElementById("searchHint");

  function abrirBusca() {
    bar.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    setTimeout(() => input.focus(), 200);
  }

  function fecharBusca() {
    bar.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    bar.classList.contains("open") ? fecharBusca() : abrirBusca();
  });

  close.addEventListener("click", () => {
    input.value = "";
    state.busca = "";
    hint.textContent = "";
    renderProdutos();
    fecharBusca();
  });

  input.addEventListener("input", () => {
    state.busca = input.value;
    const resultados = produtosFiltrados();
    hint.textContent = state.busca.trim()
      ? `${resultados.length} resultado(s) para "${state.busca.trim()}"`
      : "";
    renderProdutos();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("ofertas").scrollIntoView({ behavior: "smooth" });
    }
    if (e.key === "Escape") {
      close.click();
    }
  });
}

/* =========================================
   FILTRO DE PREÇO
========================================= */
function configurarFiltroPreco() {
  const select = document.getElementById("filtroPreco");
  select.addEventListener("change", () => {
    state.faixaPreco = select.value;
    renderProdutos();
  });
}

/* =========================================
   MENU MOBILE
========================================= */
function configurarMenuMobile() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  btn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    btn.classList.toggle("open", aberto);
    btn.setAttribute("aria-expanded", String(aberto));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================
   INICIALIZAÇÃO
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderCategorias();
  renderFiltros();
  renderProdutos();
  renderHeroFeature();
  renderNoticias();
  configurarBusca();
  configurarFiltroPreco();
  configurarMenuMobile();

  document.getElementById("statCategorias").textContent = categories.length;
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
});
