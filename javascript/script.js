const researchForms = document.querySelector('#research-forms')

const url = 'http://localhost:3002/api/create'

function getFormData(){
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

    const postForm = async (url, formData )=>{
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(res);
        try {
            const received = await res.json();
            console.log(received);
            return received;
        }
        catch(error) {
            console.log('ERROR: '+ error);
        }
    };
    postForm(url, formData);
    
}

researchForms.addEventListener('submit', getFormData)




//usando com localStorage
/*


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

    saveInLocalStorage(formData)
}

//transforma em JSON / Salva no LocalStorage
function saveInLocalStorage(formData) {
    let answerList = localStorage.getItem('respostas') ? JSON.parse(localStorage.getItem('respostas')) : []
    answerList.push(formData)
    localStorage.setItem('respostas', JSON.stringify(answerList))
}

researchForms.addEventListener('submit', getFormData)

*/