const researchForms = document.querySelector('#research-forms')

//agrupar as entradas e transformar em objeto
function getFormData() {

    const formData = {
        name: researchForms.querySelector('#name').value,
        ra: researchForms.querySelector('#ra').value,
        email: researchForms.querySelector('#email').value,
        disciplinas: {
            web: researchForms.querySelector('#web').value,
            mobile: researchForms.querySelector('#mobile').value,
            desktop: researchForms.querySelector('#desktop').value,
            games: researchForms.querySelector('#games').value,
            infra: researchForms.querySelector('#infra').value,
            seguranca: researchForms.querySelector('#seguranca').value,
            projetos: researchForms.querySelector('#projetos').value
        }
    }

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    saveInLocalStorage(formData)
}

//transforma em JSON / Salva no LocalStorage
function saveInLocalStorage(formData) {
    let answerList = localStorage.getItem('respostas') ? JSON.parse(localStorage.getItem('respostas')) : []
    answerList.push(formData)
    localStorage.setItem('respostas', JSON.stringify(answerList))
}


//inicia a chamada
<<<<<<< Updated upstream
submitButton.addEventListener('click', getFormData)




//checar se as infos são válidas.
=======
researchForms.addEventListener('submit', getFormData)
>>>>>>> Stashed changes

