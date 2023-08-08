const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const desiredLength = parseInt(validationInput.getAttribute('data-length'));
  const enteredValue = validationInput.value.length;

  if (enteredValue === desiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
