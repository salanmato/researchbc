const respostas = document.querySelector('.respostas')

//mostrando as respostas
function answerList(){
    let answers = JSON.parse(localStorage.getItem('respostas'))    
    
    answers.forEach(answer => {
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
        nome.innerText = answer.name
        ra.innerText = answer.ra
        email.innerText = answer.email
        web.innerText = answer.disciplinas.web
        mobile.innerText = answer.disciplinas.mobile
        desktop.innerText = answer.disciplinas.desktop
        games.innerText = answer.disciplinas.games
        infra.innerText = answer.disciplinas.infra
        seguranca.innerText = answer.disciplinas.seguranca
        projetos.innerText = answer.disciplinas.projetos

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
    })

    
}

answerList()

