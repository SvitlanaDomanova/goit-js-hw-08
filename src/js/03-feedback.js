import '../css/03-feedback.css'
import '../css/common.css'
import throttle from 'lodash.throttle';

const formsRef = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let elements = {};
const refs = {
form: document.querySelector('.feedback-form input'),
textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Відправляємо форму')
    evt.currentTarget.reset();
    
}
function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem('feedback-form-state', message);
}

function populateTextarea() {
    const saved = localStorage.getItem('feedback-form-state');

    if (saved) {
        console.log(saved);
    refs.textarea.value = saved;

    }
}