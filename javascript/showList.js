const respostas = document.querySelector('.respostas')

const url = 'http://localhost:3002/api/get'

fetch(url).then(response => response.json())
    .then(data => data.map(answer => {
        console.log(answer)
        //linha
        let row = document.createElement('tr') //table row
        //itens
        let nome = document.createElement('td')
        let ra = document.createElement('td')
        let email = document.createElement('td')
        let web = document.createElement('td')
        let mobile = document.createElement('td')
        let desktop = document.createElement('td')
        let games = document.createElement('td')
        let infra = document.createElement('td')
        let seguranca = document.createElement('td')
        let projetos = document.createElement('td')

        //inserindo informação
        nome.innerText = answer.nome
        ra.innerText = answer.ra
        email.innerText = answer.email
        web.innerText = answer.web
        mobile.innerText = answer.mobile
        desktop.innerText = answer.desktop
        games.innerText = answer.games
        infra.innerText = answer.infra
        seguranca.innerText = answer.seg
        projetos.innerText = answer.projetos

        row.appendChild(nome)
        row.appendChild(ra)
        row.appendChild(email)
        row.appendChild(web)
        row.appendChild(mobile)
        row.appendChild(desktop)
        row.appendChild(games)
        row.appendChild(infra)
        row.appendChild(seguranca)
        row.appendChild(projetos)

        respostas.appendChild(row)
    }))
    .catch(error => console.log(error))