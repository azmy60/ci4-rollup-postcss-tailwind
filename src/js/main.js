/* eslint-disable no-use-before-define */
import TaskElement from './TaskElement';

const form = document.getElementById('form');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const list = document.getElementById('list');
const getTrimmedInput = () => input.value.trim();

form.addEventListener('submit', submitHandler);
input.addEventListener('input', inputHandler);

list.append(...TaskElement.all().reverse());

function submitHandler(ev) {
  ev.preventDefault();
  appendTask();
  resetInput();
}

function inputHandler() {
  if (getTrimmedInput().length > 0) styleFilledInput();
  else styleEmptiedInput();
}

function appendTask() {
  if (!getTrimmedInput()) return;
  list.prepend(TaskElement.create(getTrimmedInput()));
}

function resetInput() {
  input.value = '';
  styleEmptiedInput();
}

function styleFilledInput() {
  input.classList.add('rounded-r-none');
  submitBtn.classList.remove('hidden');
}

function styleEmptiedInput() {
  input.classList.remove('rounded-r-none');
  submitBtn.classList.add('hidden');
}
