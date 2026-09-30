const resultados = [
  {
    data: "28/09/2026",
    time1: "Flamengo",
    placar1: 3,
    time2: "Vasco",
    placar2: 1,
    competicao: "Série A"
  },
  {
    data: "28/09/2026",
    time1: "São Paulo",
    placar1: 2,
    time2: "Corinthians",
    placar2: 2,
    competicao: "Série A"
  },
  {
    data: "27/09/2026",
    time1: "Palmeiras",
    placar1: 4,
    time2: "Santos",
    placar2: 0,
    competicao: "Série A"
  },
  {
    data: "27/09/2026",
    time1: "Botafogo",
    placar1: 1,
    time2: "Atlético Mineiro",
    placar2: 1,
    competicao: "Série A"
  }
];

const noticias = [
  {
    titulo: "Arrascaeta sofre lesão e Flamengo avalia recuperação",
    descricao: "O meia rubro-negro segue fora por causa da lesão no punho e deve passar por reavaliações.",
    data: "30/09/2026",
    emoji: "🏥",
    fonte: "Goal Brasil",
    url: "https://www.goal.com/br"
  },
  {
    titulo: "Clubes pressionam por mudanças na regulamentação das apostas",
    descricao: "O tema segue no centro do debate do futebol brasileiro e pode impactar patrocínios e receitas.",
    data: "30/09/2026",
    emoji: "⚖️",
    fonte: "UOL Esporte",
    url: "https://www.uol.com.br/esporte/futebol/ultimas/"
  },
  {
    titulo: "Neymar é destaque nas expectativas do Santos",
    descricao: "A torcida aguarda o retorno do atacante com grande expectativa para a próxima sequência.",
    data: "30/09/2026",
    emoji: "⭐",
    fonte: "CNN Brasil",
    url: "https://www.cnnbrasil.com.br/tudo-sobre/futebol-brasileiro/"
  },
  {
    titulo: "Flamengo e Palmeiras brigam pela liderança",
    descricao: "A disputa pela ponta ganha emoção e coloca os dois clubes em destaque na reta final.",
    data: "30/09/2026",
    emoji: "🏆",
    fonte: "R7 Esportes",
    url: "https://esportes.r7.com/futebol/campeonato-brasileiro-serie-a/noticias/"
  },
  {
    titulo: "São Paulo lida com desafios financeiros",
    descricao: "O clube segue trabalhando no planejamento para manter a estabilidade do elenco e da estrutura.",
    data: "30/09/2026",
    emoji: "📰",
    fonte: "UOL Esporte",
    url: "https://www.uol.com.br/esporte/futebol/ultimas/"
  },
  {
    titulo: "Seleção Brasileira segue em preparação",
    descricao: "A comissão técnica analisa opções para o próximo ciclo internacional do time nacional.",
    data: "30/09/2026",
    emoji: "🇧🇷",
    fonte: "Lance!",
    url: "https://www.lance.com.br/"
  }
];

const dataFifa = [
  {
    titulo: "Brasil é convocado para amistosos contra Austrália e Índia",
    descricao: "A CBF divulgou a lista de Carlo Ancelotti para a janela internacional com 26 jogadores e oito estreantes.",
    data: "09/09/2026",
    emoji: "🇧🇷",
    fonte: "CBF",
    url: "https://www.cbf.com.br/selecao-brasileira/noticias/selecao-masculina/a/selecao-brasileira-e-convocada-para-amistosos-contra-australia-e-india"
  },
  {
    titulo: "Brasil x Austrália — primeiro amistoso",
    descricao: "Partida marcada para 25/09/2026, em Townsville, com início às 7h de Brasília.",
    data: "25/09/2026 • 7h",
    emoji: "📅",
    fonte: "TNH1",
    url: "https://www.tnh1.com.br/noticia/nid/convocacao-da-selecao-brasileira-2026-veja-horario-e-adversarios-dos-amistosos/"
  },
  {
    titulo: "Austrália x Brasil — segundo amistoso",
    descricao: "O duelo será realizado em Brisbane, no Suncorp Stadium, às 7h de Brasília.",
    data: "29/09/2026 • 7h",
    emoji: "⚽",
    fonte: "Terra",
    url: "https://www.terra.com.br/esportes/brasil/convocacao-da-selecao-brasileira-2026-veja-horario-e-adversarios-dos-amistosos,fb69f40567c41fcf162632226982e0568mhb447f.html"
  },
  {
    titulo: "Índia x Brasil — encerramento da Data FIFA",
    descricao: "A partida está prevista para Calcutá, no Estádio Salt Lake, às 11h de Brasília.",
    data: "03/10/2026 • 11h",
    emoji: "🌏",
    fonte: "Agência Brasil",
    url: "https://agenciabrasil.ebc.com.br/esportes/noticia/2026-09/selecao-brasileira-tera-1a-convocacao-pos-copa-em-9-de-setembro"
  },
  {
    titulo: "Convocação marca início de renovação",
    descricao: "A lista inclui oito estreantes e reforça a tendência de renovação do elenco.",
    data: "Setembro/2026",
    emoji: "🔄",
    fonte: "ge",
    url: "https://ge.globo.com/futebol/selecao-brasileira/noticia/2026/09/09/convocacao-da-selecao-veja-a-lista-de-carlo-ancelotti-para-os-amistosos-contra-australia-e-india.ghtml"
  },
  {
    titulo: "Data FIFA movimenta o mundo",
    descricao: "Além do Brasil, seleções de Europa, África e Ásia também disputam amistosos e torneios na janela internacional.",
    data: "30/09/2026",
    emoji: "🌍",
    fonte: "Olympics",
    url: "https://www.olympics.com/pt/noticias/data-fifa-setembro-outubro-2026-jogos-onde-assistir"
  }
];

const classificacao = [
  ["Flamengo", 28, 18, 6, 4, 55, 23, 32, 60],
  ["Palmeiras", 28, 16, 9, 3, 47, 21, 26, 57],
  ["Athletico Paranaense", 28, 14, 7, 7, 43, 32, 11, 49],
  ["Fluminense", 28, 13, 9, 6, 44, 36, 8, 48],
  ["Bahia", 28, 12, 10, 6, 43, 35, 8, 46],
  ["Cruzeiro", 28, 13, 6, 9, 42, 40, 2, 45],
  ["Atlético Mineiro", 27, 11, 7, 9, 36, 32, 4, 40],
  ["Santos", 27, 10, 8, 9, 41, 40, 1, 38],
  ["Coritiba", 28, 10, 8, 10, 37, 43, -6, 38],
  ["Red Bull Bragantino", 27, 10, 6, 11, 33, 31, 2, 36],
  ["São Paulo", 27, 10, 6, 11, 32, 30, 2, 36],
  ["Botafogo", 28, 9, 8, 11, 41, 45, -4, 35],
  ["Vitória", 28, 9, 6, 13, 28, 42, -14, 33],
  ["Corinthians", 28, 8, 8, 12, 29, 32, -3, 32],
  ["Mirassol", 28, 8, 8, 12, 33, 42, -9, 32],
  ["Vasco da Gama", 27, 8, 7, 12, 34, 41, -7, 31],
  ["Grêmio", 28, 7, 8, 13, 30, 38, -8, 29],
  ["Internacional", 28, 6, 10, 12, 30, 36, -6, 28],
  ["Remo", 28, 5, 8, 15, 32, 47, -15, 23],
  ["Chapecoense", 27, 3, 9, 15, 29, 53, -24, 18]
];

const times = [
  {
    nome: "Flamengo",
    fundacao: "Fundado em 1895",
    estadio: "Maracanã",
    vitorias: 18,
    empates: 6,
    derrotas: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flamengo_brasao.svg/150px-Flamengo_brasao.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flamengo_brasao.svg/150px-Flamengo_brasao.svg.png"
  },
  {
    nome: "Palmeiras",
    fundacao: "Fundado em 1914",
    estadio: "Allianz Parque",
    vitorias: 16,
    empates: 9,
    derrotas: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/150px-Palmeiras_logo.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/150px-Palmeiras_logo.svg.png"
  },
  {
    nome: "São Paulo",
    fundacao: "Fundado em 1930",
    estadio: "Morumbi",
    vitorias: 10,
    empates: 6,
    derrotas: 11,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sao_Paulo_FC_logo.svg/150px-Sao_Paulo_FC_logo.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sao_Paulo_FC_logo.svg/150px-Sao_Paulo_FC_logo.svg.png"
  },
  {
    nome: "Corinthians",
    fundacao: "Fundado em 1910",
    estadio: "Neo Química Arena",
    vitorias: 8,
    empates: 8,
    derrotas: 12,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Corinthians_logo.svg/150px-Corinthians_logo.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Corinthians_logo.svg/150px-Corinthians_logo.svg.png"
  },
  {
    nome: "Atlético Mineiro",
    fundacao: "Fundado em 1908",
    estadio: "Arena MRV",
    vitorias: 11,
    empates: 7,
    derrotas: 9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atletico_mineiro_logo.svg/150px-Atletico_mineiro_logo.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atletico_mineiro_logo.svg/150px-Atletico_mineiro_logo.svg.png"
  },
  {
    nome: "Botafogo",
    fundacao: "Fundado em 1894",
    estadio: "Nilton Santos",
    vitorias: 9,
    empates: 8,
    derrotas: 11,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Botafogo_de_Futebol_e_Regatas_logo.svg/150px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Botafogo_de_Futebol_e_Regatas_logo.svg/150px-Botafogo_de_Futebol_e_Regatas_logo.svg.png"
  }
];

function renderResultados() {
  const container = document.getElementById("resultadosContainer");
  container.innerHTML = resultados.map((r) => `
    <article class="result-card">
      <div class="result-header">
        <span>${r.data}</span>
        <span>${r.competicao}</span>
      </div>

      <div class="result-score">
        <div class="team-inline">
          <span>${r.time1}</span>
        </div>

        <div class="score-box">${r.placar1} - ${r.placar2}</div>

        <div class="team-inline team-right">
          <span>${r.time2}</span>
        </div>
      </div>

      <div class="competicao">${r.competicao}</div>
    </article>
  `).join("");
}

function renderNoticias(lista, targetId) {
  const container = document.getElementById(targetId);
  container.innerHTML = lista.map((n) => `
    <article class="news-card">
      <div class="news-thumb">${n.emoji}</div>
      <div class="news-body">
        <h3>${n.titulo}</h3>
        <p>${n.descricao}</p>
        <div class="news-meta">
          <span>${n.data} • ${n.fonte}</span>
          <a class="news-link" href="${n.url}" target="_blank" rel="noopener noreferrer">Ler</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTabela() {
  const tbody = document.getElementById("tabelaContainer");
  tbody.innerHTML = classificacao.map((t, i) => `
    <tr>
      <td class="posicao">${i + 1}</td>
      <td class="nome-time">${t[0]}</td>
      <td>${t[1]}</td>
      <td>${t[2]}</td>
      <td>${t[3]}</td>
      <td>${t[4]}</td>
      <td>${t[5]}</td>
      <td>${t[6]}</td>
      <td>${t[7] > 0 ? "+" : ""}${t[7]}</td>
      <td class="pontos">${t[8]}</td>
    </tr>
  `).join("");
}

function renderTimes() {
  const container = document.getElementById("timesContainer");
  container.innerHTML = times.map((time) => `
    <article class="club-card">
      <div class="club-crest">
        <img src="${time.logo || time.foto}" alt="Escudo do ${time.nome}" class="club-logo">
      </div>
      <div class="club-body">
        <h3>${time.nome}</h3>
        <p>${time.fundacao}</p>
        <p><strong>Estádio:</strong> ${time.estadio}</p>
        <div class="club-stats">
          <div>
            <strong>${time.vitorias}</strong>
            <span>Vitórias</span>
          </div>
          <div>
            <strong>${time.empates}</strong>
            <span>Empates</span>
          </div>
          <div>
            <strong>${time.derrotas}</strong>
            <span>Derrotas</span>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderResultados();
  renderNoticias(noticias, "noticiasContainer");
  renderNoticias(dataFifa, "dataFifaContainer");
  renderTabela();
  renderTimes();
});

