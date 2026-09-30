// Conteúdo atualizado em 30/09/2026. Dados estáticos de referência.
// Para atualização automática, integre uma API esportiva com backend seguro.

const resultados = [
    { data: '28/09/2026', time1: 'Flamengo', placar1: 3, time2: 'Vasco', placar2: 1, competicao: 'Série A' },
    { data: '28/09/2026', time1: 'São Paulo', placar1: 2, time2: 'Corinthians', placar2: 2, competicao: 'Série A' },
    { data: '27/09/2026', time1: 'Palmeiras', placar1: 4, time2: 'Santos', placar2: 0, competicao: 'Série A' },
    { data: '27/09/2026', time1: 'Botafogo', placar1: 1, time2: 'Atlético Mineiro', placar2: 1, competicao: 'Série A' }
];

const noticias = [
    { titulo: 'Arrascaeta sofre lesão e Flamengo avalia recuperação', descricao: 'Confira as informações mais recentes sobre o meia rubro-negro.', data: '30/09/2026', emoji: '🏥', fonte: 'Goal Brasil', url: 'https://www.goal.com/br' },
    { titulo: 'Clubes discutem mudanças nas apostas esportivas', descricao: 'A regulamentação move clubes e patrocinadores do futebol brasileiro.', data: '30/09/2026', emoji: '⚖️', fonte: 'UOL Esporte', url: 'https://www.uol.com.br/esporte/futebol/ultimas/' },
    { titulo: 'Neymar é destaque nas expectativas do Santos', descricao: 'Veja as informações recentes sobre o atacante e o clube paulista.', data: '30/09/2026', emoji: '⭐', fonte: 'CNN Brasil', url: 'https://www.cnnbrasil.com.br/tudo-sobre/futebol-brasileiro/' },
    { titulo: 'Flamengo e Palmeiras disputam a liderança', descricao: 'A reta final do Brasileirão ganha emoção na briga pelas primeiras posições.', data: '30/09/2026', emoji: '🏆', fonte: 'R7 Esportes', url: 'https://esportes.r7.com/futebol/campeonato-brasileiro-serie-a/noticias/' },
    { titulo: 'São Paulo enfrenta desafios financeiros', descricao: 'O clube trabalha para organizar compromissos e manter o planejamento.', data: '30/09/2026', emoji: '📰', fonte: 'UOL Esporte', url: 'https://www.uol.com.br/esporte/futebol/ultimas/' },
    { titulo: 'Seleção Brasileira segue em preparação', descricao: 'A comissão técnica testa opções para o novo ciclo internacional.', data: '30/09/2026', emoji: '🇧🇷', fonte: 'Lance!', url: 'https://www.lance.com.br/' }
];

const dataFifa = [
    { titulo: 'Brasil é convocado para amistosos contra Austrália e Índia', descricao: 'A CBF divulgou a convocação de Carlo Ancelotti para os compromissos da Data FIFA. Oito estreantes integram o grupo de 26 jogadores.', data: '09/09/2026', emoji: '🇧🇷', fonte: 'CBF', url: 'https://www.cbf.com.br/selecao-brasileira/noticias/selecao-masculina/a/selecao-brasileira-e-convocada-para-amistosos-contra-australia-e-india' },
    { titulo: 'Brasil x Austrália — primeiro amistoso', descricao: 'Partida prevista para 25/09/2026, no Queensland Country Bank Stadium, em Townsville, às 7h de Brasília.', data: '25/09/2026 · 7h de Brasília', emoji: '📅', fonte: 'TNH1', url: 'https://www.tnh1.com.br/noticia/nid/convocacao-da-selecao-brasileira-2026-veja-horario-e-adversarios-dos-amistosos/' },
    { titulo: 'Austrália x Brasil — segundo amistoso', descricao: 'Segundo encontro previsto para 29/09/2026, no Suncorp Stadium, em Brisbane, às 7h de Brasília.', data: '29/09/2026 · 7h de Brasília', emoji: '⚽', fonte: 'Terra', url: 'https://www.terra.com.br/esportes/brasil/convocacao-da-selecao-brasileira-2026-veja-horario-e-adversarios-dos-amistosos,fb69f40567c41fcf162632226982e0568mhb447f.html' },
    { titulo: 'Índia x Brasil — encerramento da Data FIFA', descricao: 'O Brasil tem amistoso previsto contra a Índia, em Calcutá, no Estádio Salt Lake, às 11h de Brasília.', data: '03/10/2026 · 11h de Brasília', emoji: '🌏', fonte: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/esportes/noticia/2026-09/selecao-brasileira-tera-1a-convocacao-pos-copa-em-9-de-setembro' },
    { titulo: 'Convocação marca início de renovação', descricao: 'A lista de 26 jogadores inclui oito estreantes, sinalizando o início de um novo ciclo com foco em renovação.', data: 'Setembro/2026', emoji: '🔄', fonte: 'ge', url: 'https://ge.globo.com/futebol/selecao-brasileira/noticia/2026/09/09/convocacao-da-selecao-veja-a-lista-de-carlo-ancelotti-para-os-amistosos-contra-australia-e-india.ghtml' },
    { titulo: 'Data FIFA com jogos na Europa, África e Ásia', descricao: 'Além do Brasil, seleções de todo o mundo disputam amistosos e competições entre 21 de setembro e 6 de outubro.', data: '30/09/2026', emoji: '🌍', fonte: 'Olympics.com', url: 'https://www.olympics.com/pt/noticias/data-fifa-setembro-outubro-2026-jogos-onde-assistir' }
];

const classificacao = [
    ['Flamengo',28,18,6,4,55,23,32,60], ['Palmeiras',28,16,9,3,47,21,26,57],
    ['Athletico Paranaense',28,14,7,7,43,32,11,49], ['Fluminense',28,13,9,6,44,36,8,48],
    ['Bahia',28,12,10,6,43,35,8,46], ['Cruzeiro',28,13,6,9,42,40,2,45],
    ['Atlético Mineiro',27,11,7,9,36,32,4,40], ['Santos',27,10,8,9,41,40,1,38],
    ['Coritiba',28,10,8,10,37,43,-6,38], ['Red Bull Bragantino',27,10,6,11,33,31,2,36],
    ['São Paulo',27,10,6,11,32,30,2,36], ['Botafogo',28,9,8,11,41,45,-4,35],
    ['Vitória',28,9,6,13,28,42,-14,33], ['Corinthians',28,8,8,12,29,32,-3,32],
    ['Mirassol',28,8,8,12,33,42,-9,32], ['Vasco da Gama',27,8,7,12,34,41,-7,31],
    ['Grêmio',28,7,8,13,30,38,-8,29], ['Internacional',28,6,10,12,30,36,-6,28],
    ['Remo',28,5,8,15,32,47,-15,23], ['Chapecoense',27,3,9,15,29,53,-24,18]
];

const times = [
    ['Flamengo','Fundado em 1895','Maracanã',18,6,4,'🔴'], ['Palmeiras','Fundado em 1914','Allianz Parque',16,9,3,'💚'],
    ['São Paulo','Fundado em 1930','Morumbi',10,6,11,'⚪'], ['Corinthians','Fundado em 1910','Neo Química Arena',8,8,12,'⚫'],
    ['Atlético Mineiro','Fundado em 1908','Arena MRV',11,7,9,'🔵'], ['Botafogo','Fundado em 1894','Nilton Santos',9,8,11,'⭐']
];

function cards(lista) {
    return lista.map(n => `<article class="noticia-card"><div class="noticia-imagem">${n.emoji}</div><div class="noticia-conteudo"><h3>${n.titulo}</h3><p>${n.descricao}</p><div class="noticia-data">${n.data} · ${n.fonte}</div><a class="leia-mais" href="${n.url}" target="_blank" rel="noopener noreferrer">Ler fonte →</a></div></article>`).join('');
}
function carregarResultados() { document.getElementById('resultadosContainer').innerHTML = resultados.map(r => `<div class="resultado-card"><div class="resultado-data">${r.data}</div><div class="resultado-times"><div class="time">${r.time1}</div><div class="placar">${r.placar1} - ${r.placar2}</div><div class="time">${r.time2}</div></div><div class="competicao">${r.competicao}</div></div>`).join(''); }
function carregarNoticias() { document.getElementById('noticiasContainer').innerHTML = cards(noticias); document.getElementById('dataFifaContainer').innerHTML = cards(dataFifa); }
function carregarTabela() { const linhas = classificacao.map((t,i) => `<tr><td class="posicao">${i+1}</td><td class="nome-time">${t[0]}</td><td>${t[1]}</td><td>${t[2]}</td><td>${t[3]}</td><td>${t[4]}</td><td>${t[5]}</td><td>${t[6]}</td><td>${t[7] > 0 ? '+' : ''}${t[7]}</td><td class="numero-destaque">${t[8]}</td></tr>`).join(''); document.getElementById('tabelaContainer').innerHTML = `<thead><tr><th>Pos</th><th>Time</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th></tr></thead><tbody>${linhas}</tbody>`; }
function carregarTimes() { document.getElementById('timesContainer').innerHTML = times.map(t => `<div class="time-card"><div class="time-logo">${t[6]}</div><div class="time-info"><h3>${t[0]}</h3><p>${t[1]}</p><p><strong>Estádio:</strong> ${t[2]}</p><div class="time-stats"><div class="stat"><div class="stat-numero">${t[3]}</div><div class="stat-label">Vitórias</div></div><div class="stat"><div class="stat-numero">${t[4]}</div><div class="stat-label">Empates</div></div><div class="stat"><div class="stat-numero">${t[5]}</div><div class="stat-label">Derrotas</div></div></div></div></div>`).join(''); }
function setupNavegacao() { document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'}); })); }
document.addEventListener('DOMContentLoaded', () => { carregarResultados(); carregarNoticias(); carregarTabela(); carregarTimes(); setupNavegacao(); });
