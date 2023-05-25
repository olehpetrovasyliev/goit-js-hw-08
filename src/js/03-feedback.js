import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const email = document.querySelector('[name="email"]');
const msg = document.querySelector('[name="message"]');

const formFunc = evt => {
  evt.preventDefault();
  localStorage.setItem(
    storageKey,
    JSON.stringify({ email: email.value, message: msg.value })
  );
  console.log(localStorage.getItem(storageKey));
};

form.addEventListener('submit', throttle(formFunc, 500));
