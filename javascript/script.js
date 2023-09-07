const researchForms = document.querySelector('#research-forms')
const submitButton = document.querySelector('#submit-button')


//agrupar as entradas e transformar em objeto
function getFormData(){
    
    const formData = {
        name: researchForms.querySelector('#name').value,
        ra: researchForms.querySelector('#ra').value
    }


    saveInLocalStorage(formData)
}

//transforma em JSON / Salva no LocalStorage
function saveInLocalStorage(formData){
   let answerList = localStorage.getItem('respostas') ? JSON.parse(localStorage.getItem('respostas')) : []
   answerList.push(formData)
   localStorage.setItem('respostas', JSON.stringify(answerList))
}


//inicia a chamada
submitButton.addEventListener('click', getFormData)




//checar se as infos são válidas.

