import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const msg = document.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';
const savedStorage = localStorage.getItem(storageKey);

const formFuncInp = evt => {
  evt.preventDefault();
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
};
form.addEventListener('input', throttle(formFuncInp, 500));

const formFuncSub = evt => {
  evt.preventDefault();
  console.log(localStorage.getItem(storageKey));
  localStorage.clear();
  email.value = '';
  msg.value = '';
};
form.addEventListener('submit', formFuncSub);

if (storageKey) {
  const { email: storageEmail, message: storageMsg } = JSON.parse(savedStorage);
  email.value = storageEmail;
  msg.value = storageMsg;
  //   email.value = JSON.parse(localStorage.getItem(storageKey.message));
} else {
  email.value = '';
  msg.value = '';
}
