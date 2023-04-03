import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageImput = form.querySelector('textarea[name="message"]');
const keyEL = 'feedback-form-state'

const save = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageImput.value,
  };
  localStorage.setItem(keyEL, JSON.stringify(state));
}, 500);


form.addEventListener('input', save);


const saveEl = localStorage.getItem(keyEL);
if (saveEl) {
  const state = JSON.parse(saveEl);
  emailInput.value = state.email;
  messageImput.value = state.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.value || !messageImput.value) {
    alert('Please fill in all fields!');
    return;
  }
  localStorage.removeItem(keyEL);  
  const state = {
    email: emailInput.value,
    message: messageImput.value,
  };
    console.log(state); 
    form.reset();
    
});

