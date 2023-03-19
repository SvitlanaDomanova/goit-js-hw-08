import '../css/03-feedback.css'
import '../css/common.css'
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let properties = {};


const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

populateTextarea();

formEl.addEventListener(
    'input',
    throttle( event => {
        properties[event.target.name] = event.target.value;
        localStorage.setItem(localStorageKey, JSON.stringify(properties));
    }, 500)
);


formEl.addEventListener(
    'submit',
   event => { event.preventDefault();
    if (inputEl.value !== '' && textareaEl.value !== '') {
        console.log(properties);
        localStorage.removeItem(localStorageKey);
        event.currentTarget.reset();
        return;
    }
    allert('Please');
    }
);

function populateTextarea() {
    const saveData = localStorage.getItem('feedback-form-state');
    if (saveData) {
    properties = JSON.parse(saveData);
  inputEl.value = properties.email || '';
  textareaEl.value = properties.message || '';
    }
}
