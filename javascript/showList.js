const respostas = document.querySelector('.respostas')


<<<<<<< Updated upstream
//mostrando as respostas
function answerList(){
    let answers = JSON.parse(localStorage.getItem('respostas'))
    let table = document.querySelector('.respostas')
    
    
    answers.forEach(answer => {
        //linha
        let row = document.createElement('tr')
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
=======
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
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
        respostas.appendChild(row)
    })

    
}

answerList()
=======
        respostas.appendChild(row)}))
    .catch(error => console.log(error))
    
>>>>>>> Stashed changes
