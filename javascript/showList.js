const respostas = document.querySelector('.respostas')


//mostrando as respostas
function answerList(){
    let answers = JSON.parse(localStorage.getItem('respostas'))
    console.log(answers)
    
    answers.forEach(answer => {
        let p = document.createElement('p')
        p.textContent = `${answer.name} ${answer.ra}`
        respostas.appendChild(p)
    })

    
}

answerList()
