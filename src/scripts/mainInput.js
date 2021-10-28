const mainInput = document.querySelector('#main-input');
const inputBtn = document.querySelector('#main-input ~ button');

mainInput.addEventListener('input', (e) => {
  if (e.target.value) {
    mainInput.classList.add('rounded-r-none');
    inputBtn.classList.remove('hidden');
  } else {
    mainInput.classList.remove('rounded-r-none');
    inputBtn.classList.add('hidden');
  }
});
