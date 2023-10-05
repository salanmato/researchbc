<<<<<<< Updated upstream
<<<<<<< Updated upstream
const respostas = JSON.parse(localStorage.getItem('respostas'))
=======
const url = 'http://localhost:3002/api/get'
>>>>>>> Stashed changes

fetch(url).then(response => response.json())
    .then(respostas => {
        const ctx = document.getElementById('myChart')
        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['WEB', 'Mobile', 'Desktop', 'Games', 'Infra', 'Segurança', 'Projetos'],
                datasets: [{
                    label: '# of Votes',
                    data: [respostas.reduce((acc, resp) => acc + resp.web, 0), 
                    respostas.reduce((acc, resp) => acc + resp.mobile, 0),
                    respostas.reduce((acc, resp) => acc + resp.desktop, 0),
                    respostas.reduce((acc, resp) => acc + resp.games, 0),
                    respostas.reduce((acc, resp) => acc + resp.infra, 0),
                    respostas.reduce((acc, resp) => acc + resp.seg, 0),
                    respostas.reduce((acc, resp) => acc + resp.projetos, 0)],

<<<<<<< Updated upstream
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
=======
const url = 'http://localhost:3002/api/get'
fetch(url)
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('myChart')
        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['WEB', 'Mobile', 'Desktop', 'Games', 'Infra', 'Segurança', 'Projetos'],
                datasets: [{
                    label: '# of Votes',
                    data: [data.reduce((acc, e) => acc + e.web, 0),
                            data.reduce((acc, e) => acc + e.mobile, 0),
                            data.reduce((acc, e) => acc + e.desktop, 0),
                            data.reduce((acc, e) => acc + e.games, 0),
                            data.reduce((acc, e) => acc + e.infra, 0),
                            data.reduce((acc, e) => acc + e.seg, 0),
                            data.reduce((acc, e) => acc + e.projetos, 0)],
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
            }
        });
    })
=======
            }
        })
    }
    
)

>>>>>>> Stashed changes
