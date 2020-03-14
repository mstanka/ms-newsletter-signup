const form = document.getElementById('form');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function getFieldName(input) {
  return input.id.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      if(input === "email") {
        showError(input, 'Email is required');
      } else {
        showError(input, 'Name is required');
      }      
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([firstName, lastName, email]);
  checkEmail(email);
});