// Dados simulados de Resultados
const resultados = [
    {
        data: '28/09/2026',
        time1: 'Flamengo',
        placar1: 3,
        time2: 'Vasco',
        placar2: 1,
        competicao: 'Série A'
    },
    {
        data: '28/09/2026',
        time1: 'São Paulo',
        placar1: 2,
        time2: 'Corinthians',
        placar2: 2,
        competicao: 'Série A'
    },
    {
        data: '27/09/2026',
        time1: 'Palmeiras',
        placar1: 4,
        time2: 'Santos',
        placar2: 0,
        competicao: 'Série A'
    },
    {
        data: '27/09/2026',
        time1: 'Botafogo',
        placar1: 1,
        time2: 'Atlético Mineiro',
        placar2: 1,
        competicao: 'Série A'
    }
];

// Dados simulados de Notícias
const noticias = [
    {
        titulo: 'Flamengo avança para semifinal da Copa do Brasil',
        descricao: 'O Flamengo conquistou uma vitória emocionante contra o Vasco na partida de ida das quartas de final.',
        data: '28/09/2026',
        emoji: '🏆'
    },
    {
        titulo: 'Neymar marca dois gols em jogo do PSG',
        descricao: 'O craque brasileiro brilhou em campo e levou sua equipe à vitória na Liga dos Campeões.',
        data: '27/09/2026',
        emoji: '⭐'
    },
    {
        titulo: 'Seleção Brasileira confirma amistosos para outubro',
        descricao: 'A CBF anunciou dois amistosos preparatórios para as eliminatórias do próximo ano.',
        data: '26/09/2026',
        emoji: '🇧🇷'
    },
    {
        titulo: 'Mercado de transferências aquece na Europa',
        descricao: 'Principais clubes europeus anunciam investimentos para reforçar seus elencos.',
        data: '25/09/2026',
        emoji: '💰'
    }
];

// Dados simulados de Classificação
const classificacao = [
    { posicao: 1, time: 'Palmeiras', jogos: 26, vitorias: 18, empates: 5, derrotas: 3, gols: 58, contra: 25, saldo: 33, pontos: 59 },
    { posicao: 2, time: 'Flamengo', jogos: 26, vitorias: 17, empates: 4, derrotas: 5, gols: 54, contra: 28, saldo: 26, pontos: 55 },
    { posicao: 3, time: 'Botafogo', jogos: 26, vitorias: 16, empates: 6, derrotas: 4, gols: 50, contra: 30, saldo: 20, pontos: 54 },
    { posicao: 4, time: 'Atletico Mineiro', jogos: 26, vitorias: 15, empates: 5, derrotas: 6, gols: 48, contra: 32, saldo: 16, pontos: 50 },
    { posicao: 5, time: 'São Paulo', jogos: 26, vitorias: 14, empates: 6, derrotas: 6, gols: 45, contra: 34, saldo: 11, pontos: 48 },
    { posicao: 6, time: 'Fortaleza', jogos: 26, vitorias: 13, empates: 7, derrotas: 6, gols: 42, contra: 36, saldo: 6, pontos: 46 },
    { posicao: 7, time: 'Internacional', jogos: 26, vitorias: 12, empates: 6, derrotas: 8, gols: 40, contra: 38, saldo: 2, pontos: 42 },
    { posicao: 8, time: 'Corinthians', jogos: 26, vitorias: 11, empates: 5, derrotas: 10, gols: 38, contra: 40, saldo: -2, pontos: 38 }
];

// Dados dos Times
const times = [
    {
        nome: 'Flamengo',
        fundacao: 'Fundado em 1895',
        estadio: 'Maracanã',
        vitorias: 17,
        empates: 4,
        derrotas: 5,
        emoji: '🔴'
    },
    {
        nome: 'Palmeiras',
        fundacao: 'Fundado em 1914',
        estadio: 'Allianz Parque',
        vitorias: 18,
        empates: 5,
        derrotas: 3,
        emoji: '💚'
    },
    {
        nome: 'São Paulo',
        fundacao: 'Fundado em 1930',
        estadio: 'Morumbi',
        vitorias: 14,
        empates: 6,
        derrotas: 6,
        emoji: '⚪'
    },
    {
        nome: 'Corinthians',
        fundacao: 'Fundado em 1910',
        estadio: 'Neo Química Arena',
        vitorias: 11,
        empates: 5,
        derrotas: 10,
        emoji: '⚫'
    },
    {
        nome: 'Atlético Mineiro',
        fundacao: 'Fundado em 1908',
        estadio: 'Mineirão',
        vitorias: 15,
        empates: 5,
        derrotas: 6,
        emoji: '🔵'
    },
    {
        nome: 'Botafogo',
        fundacao: 'Fundado em 1894',
        estadio: 'Nilton Santos',
        vitorias: 16,
        empates: 6,
        derrotas: 4,
        emoji: '⭐'
    }
];

// Função para carregar Resultados
function carregarResultados() {
    const container = document.getElementById('resultadosContainer');
    container.innerHTML = resultados.map(resultado => `
        <div class="resultado-card">
            <div class="resultado-data">${resultado.data}</div>
            <div class="resultado-times">
                <div class="time">${resultado.time1}</div>
                <div class="placar">${resultado.placar1} - ${resultado.placar2}</div>
                <div class="time">${resultado.time2}</div>
            </div>
            <div class="competicao">${resultado.competicao}</div>
        </div>
    `).join('');
}

// Função para carregar Notícias
function carregarNoticias() {
    const container = document.getElementById('noticiasContainer');
    container.innerHTML = noticias.map(noticia => `
        <div class="noticia-card">
            <div class="noticia-imagem">${noticia.emoji}</div>
            <div class="noticia-conteudo">
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descricao}</p>
                <div class="noticia-data">${noticia.data}</div>
                <a href="#" class="leia-mais">Leia mais →</a>
            </div>
        </div>
    `).join('');
}

// Função para carregar Tabela de Classificação
function carregarTabela() {
    const container = document.getElementById('tabelaContainer');
    let html = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>GP</th>
                <th>GC</th>
                <th>SG</th>
                <th>Pts</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    classificacao.forEach(time => {
        html += `
            <tr>
                <td class="posicao">${time.posicao}</td>
                <td class="nome-time">${time.time}</td>
                <td>${time.jogos}</td>
                <td>${time.vitorias}</td>
                <td>${time.empates}</td>
                <td>${time.derrotas}</td>
                <td>${time.gols}</td>
                <td>${time.contra}</td>
                <td>${time.saldo > 0 ? '+' : ''}${time.saldo}</td>
                <td class="numero-destaque">${time.pontos}</td>
            </tr>
        `;
    });
    
    html += '</tbody>';
    container.innerHTML = html;
}

// Função para carregar Times
function carregarTimes() {
    const container = document.getElementById('timesContainer');
    container.innerHTML = times.map(time => `
        <div class="time-card">
            <div class="time-logo">${time.emoji}</div>
            <div class="time-info">
                <h3>${time.nome}</h3>
                <p>${time.fundacao}</p>
                <p><strong>Estádio:</strong> ${time.estadio}</p>
                <div class="time-stats">
                    <div class="stat">
                        <div class="stat-numero">${time.vitorias}</div>
                        <div class="stat-label">Vitórias</div>
                    </div>
                    <div class="stat">
                        <div class="stat-numero">${time.empates}</div>
                        <div class="stat-label">Empates</div>
                    </div>
                    <div class="stat">
                        <div class="stat-numero">${time.derrotas}</div>
                        <div class="stat-label">Derrotas</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para animar scroll suave
function setupNavegacao() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    carregarResultados();
    carregarNoticias();
    carregarTabela();
    carregarTimes();
    setupNavegacao();
    
    // Animação de entrada
    document.querySelectorAll('.section').forEach((section, index) => {
        section.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
        section.style.opacity = '0';
    });
});

// Keyframe de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);