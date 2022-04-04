const form = document.querySelector('form');
const mainInput = document.querySelector('#main-input');
const inputBtn = document.querySelector('#main-input ~ button');
const listContainer = document.querySelector('#list-container');
const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

function init() {
  if (tasks.length === 0) return;

  tasks.forEach((task) => {
    const todoTask = document.createElement('todo-task');
    todoTask.setAttribute('name', task.name);
    todoTask.setAttribute('completed', task.completed.toString());
    listContainer.prepend(todoTask);
  });
}

function appendTask(name) {
  tasks.push({
    name,
    completed: false,
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  const todoTask = document.createElement('todo-task');
  todoTask.setAttribute('name', name);
  todoTask.setAttribute('completed', 'false');
  listContainer.prepend(todoTask);
}

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

  appendTask(name);
});

init();
