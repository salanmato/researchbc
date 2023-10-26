const researchForms = document.querySelector('#research-forms')
const url = 'http://10.10.90.144:3002'

//agrupar as entradas e transformar em objeto
function getFormData() {
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

    const postData = async (url, data) => {
        const res = await fetch(`http://10.10.90.144:3002/api/create`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
       console.log(res);
        try {
            const received = await res.json();
            console.log(received);
            return received;
        }
        catch (error) {
            console.log('ERROR: ' + error);
        }
    }

    postData(url, formData)

}

//inicia a chamada
researchForms.addEventListener('submit', e => {
    e.preventDefault()

    //checando se o RA já foi utilizado ou email
    fetch('http://10.10.90.144:3002/api/get')
        .then(response => response.json())
        .then(data => {
            let verifica = data.map(resposta => {
                if (parseInt(resposta.ra) == researchForms.querySelector('#ra').value || resposta.email == researchForms.querySelector('#email').value) {
                    return 1
                }
            })
            if (verifica.indexOf(1) > -1) {
                alert('RA ou email já utilizados')
                location.reload()
            } else {
                getFormData()
                alert('Formulário recebido!')
                location.reload()
            }
        })
})
