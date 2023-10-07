const researchForms = document.querySelector('#research-forms')
const submitButton = document.querySelector('#submit-button')


//agrupar as entradas e transformar em objeto
function getFormData(e) {

    const formData = {
        name: researchForms.querySelector('#name').value.trim(),
        ra: researchForms.querySelector('#ra').value.trim(),
        email: researchForms.querySelector('#email').value.trim(),
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

    const url = 'http://localhost:3002/api/create'

    const postData = async (url, data)=>{
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
    postData(url, formData);
}

//inicia a chamada
researchForms.addEventListener('submit', getFormData)
