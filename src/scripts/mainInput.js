const form = document.querySelector('form');
const mainInput = document.querySelector('#main-input');
const inputBtn = document.querySelector('#main-input ~ button');
const listContainer = document.querySelector('#list-container');

mainInput.addEventListener('input', (e) => {
  if (e.target.value) {
    mainInput.classList.add('rounded-r-none');
    inputBtn.classList.remove('hidden');
  } else {
    mainInput.classList.remove('rounded-r-none');
    inputBtn.classList.add('hidden');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = mainInput.value;

  mainInput.value = '';
  mainInput.blur();
  inputBtn.classList.add('hidden');

  if (!name) { return; }

  fetch('/add', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: JSON.stringify({
      name,
    }),
  }).then(() => {
    const todoTask = document.createElement('todo-task');
    todoTask.setAttribute('name', name);
    todoTask.setAttribute('completed', 'false');

    listContainer.appendChild(todoTask);
  }).catch(() => {
    // TODO error message popup
  });
});
