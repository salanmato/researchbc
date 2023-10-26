const tableDiv = document.querySelector('#table-div')
const form = document.querySelector('#login')
const password = document.querySelector('#password')

const senha = 'ADS2NB'

const url = 'http://0.0.0.0:3002/api/get' // substituir pelo ip da sua máquina / servidor

form.addEventListener('submit', (e) => {
    if(password.value === senha){
        e.preventDefault()

        form.remove()
        
        //apagar tabela caso já tenha sido criada
        let actualTable = document.querySelector('table')
        if (actualTable){
            actualTable.remove()
        }

        //criando tabela
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')

        let thNome = document.createElement('th')
        let thRA = document.createElement('th')
        let thEmail = document.createElement('th')
        let thWEB = document.createElement('th')
        let thMobile = document.createElement('th')
        let thDesktop = document.createElement('th')
        let thGames = document.createElement('th')
        let thInfra = document.createElement('th')
        let thSeg = document.createElement('th')
        let thProjetos = document.createElement('th')

        thNome.innerText = 'nome'
        thRA.innerText = 'ra'
        thEmail.innerText = 'email'
        thWEB.innerText = 'web'
        thMobile.innerText = 'mobile'
        thDesktop.innerText = 'desktop'
        thGames.innerText = 'games'
        thInfra.innerText = 'infra'
        thSeg.innerText = 'seg'
        thProjetos.innerText = 'projetos'

        thead.appendChild(thNome)
        thead.appendChild(thRA)
        thead.appendChild(thEmail)
        thead.appendChild(thWEB)
        thead.appendChild(thMobile)
        thead.appendChild(thDesktop)
        thead.appendChild(thGames)
        thead.appendChild(thInfra)
        thead.appendChild(thSeg)
        thead.appendChild(thProjetos)

        table.appendChild(thead)
        table.appendChild(tbody)

        tableDiv.appendChild(table)

fetch(url).then(response => response.json())

    .then(data => data.map(answer => {
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

        tbody.appendChild(row)
    }))
    .catch(error => console.log(error))
    }else{
        if(!password.value){
            alert('Digite sua senha!')
        }else{
            alert('Senha errada!')
        }
    }
})


