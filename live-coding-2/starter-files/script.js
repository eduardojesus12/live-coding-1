//Aldo Beltran:
//Retro me falto aun estudiar mas y desarrollar mi logica de programacion.

const API_ENDPOINT = 'https://yesno.wtf/api';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const answerDiv = document.getElementById('answer');
    const errorDiv = document.getElementById('error');
    

    //1.- Construye una función fetchAnswer que realice una petición al API https://yesno.wtf/api.
    const fetchAnswer = async () => {

        answerDiv.textContent = '';
        errorDiv.textContent = '';

        const question = input.value.trim();
        try {

            if (!question) {
                throw new Error('Porfavor pregunte de nuevo.');
            }

            const response = await fetch(API_ENDPOINT);
            const data = await response.json();

            answerDiv.textContent = data.answer;

            setTimeout(() => {
                answerDiv.textContent = '';
            }, 5000);
        } catch (error) {

            errorDiv.textContent = error.message;

            setTimeout(() => {
                errorDiv.textContent = '';
            }, 5000);
        }
    };

    button.addEventListener('click', fetchAnswer);

});
