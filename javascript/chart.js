const url = 'http://localhost:3002/api/get'

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
        })
    }
    
)

