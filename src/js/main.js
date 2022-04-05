/* eslint-disable no-use-before-define */
import TaskElement from './TaskElement';

const form = document.getElementById('form');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const list = document.getElementById('list');

form.addEventListener('submit', submitHandler);
input.addEventListener('input', inputHandler);
list.append(...TaskElement.all().reverse());

function submitHandler(ev) {
  ev.preventDefault();

  const name = input.value.trim();
  if (!name) return;

  list.prepend(TaskElement.create(name));

  input.value = '';
  styleEmptiedInput();
}

function inputHandler(ev) {
  if (ev.target.value.length > 0) styleFilledInput();
  else styleEmptiedInput();
}

function styleFilledInput() {
  input.classList.add('rounded-r-none');
  submitBtn.classList.remove('hidden');
}

function styleEmptiedInput() {
  input.classList.remove('rounded-r-none');
  submitBtn.classList.add('hidden');
}
