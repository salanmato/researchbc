const respostas = JSON.parse(localStorage.getItem('respostas'))

//variaveis do gráfico
let totalWeb = 0
let totalMobile = 0
let totalDesktop = 0
let totalGames = 0
let totalInfra = 0
let totalSeguranca = 0
let totalProjetos = 0

//calculando as respostas
respostas.forEach(resposta => {
    totalWeb += parseInt(resposta.disciplinas.web)
    totalMobile += parseInt(resposta.disciplinas.mobile)
    totalDesktop += parseInt(resposta.disciplinas.desktop)
    totalGames += parseInt(resposta.disciplinas.games)
    totalInfra += parseInt(resposta.disciplinas.infra)
    totalSeguranca += parseInt(resposta.disciplinas.seguranca)
    totalProjetos += parseInt(resposta.disciplinas.projetos)
})

//grafico de exibição
const ctx = document.getElementById('myChart')
new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['WEB', 'Mobile', 'Desktop', 'Games', 'Infra', 'Segurança', 'Projetos'],
        datasets: [{
            label: '# of Votes',
            data: [totalWeb, totalMobile, totalDesktop, totalGames, totalInfra, totalSeguranca, totalProjetos],
            borderWidth: 2,
            hoverBorderColor: 'lightgrey',
            borderJoinStyle: 'round',
            backgroundColor: [
                'rgb(247, 37, 133)',
                'rgb(181, 23, 158)',
                'rgb(114, 9, 183)',
                'rgb(72, 12, 168)',
                'rgb(63, 55, 201)',
                'rgb(67, 97, 238)',
                'rgb(72, 149, 239)'
              ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});