import '../css/03-feedback.css'
import '../css/common.css'
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const localKey = "feedback-form-state";

let elements = {};

const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener(
    'input',
    throttle( event => {
        elements[event.target.name] = event.target.value;
        localStorage.setItem(localKey, JSON.stringify(elements));
    }, 500)
);


formEl.addEventListener(
    'submit',
   event => { event.preventDefault();
    if (inputEl.value !== '' && textareaEl.value !== '') {
        console.log(elements);
        localStorage.removeItem(localKey);
        event.currentTarget.reset();
        return;
    }
    allert('Please');
    }
);

function populateTextarea() {
    const saveData = localStorage.getItem('feedback-form-state');
    if (saveData) {
  elements = JSON.parse(saveData);
  inputEl.value = elements.email || '';
  textareaEl.value = elements.message || '';
    }
}
