import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const FEEDBACK_FORM_STATE = 'feedback-form-state'

const save = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(state));
}, 1000);


form.addEventListener('input', save);


const saveEl = localStorage.getItem(FEEDBACK_FORM_STATE);
if (saveEl) {
  const state = JSON.parse(saveEl);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) {
    alert('Please fill in all fields!');
    return;
  }
  localStorage.removeItem(FEEDBACK_FORM_STATE);  
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
    console.log(state); 
    form.reset();
    
});

