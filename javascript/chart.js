const url = 'http://0.0.0.0:3002/api/get' // substituir pelo ip da sua máquina / servidor

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
                        '#C4FFE2',
                        '#96FEC5',
                        '#67FBA1',
                        '#38F577',
                        '#16C145',
                        '#088E25',
                        '#035A11'
                    ]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                color: '#021E53',
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        })
    }

    
)

