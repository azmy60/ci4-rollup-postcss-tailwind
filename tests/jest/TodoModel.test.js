/* eslint-disable no-undef */

const storage = require('../../src/js/storage');
const TodoModel = require('../../src/js/TodoModel');

afterEach(() => {
  TodoModel.clear();
});

test('can insert a new task', () => {
  TodoModel.create('Lorem Khaled Ipsum is a major key to success.');

  const tasks = storage.load(TodoModel.KEY);
  const { name } = tasks[0];

  expect(name).toBe('Lorem Khaled Ipsum is a major key to success.');
});

test('can retrieve all tasks', () => {
  TodoModel.create('Lorem Khaled Ipsum is a major key to success.');
  TodoModel.create('Celebrate success right, the only way, apple.');

  expect(TodoModel.all()).toEqual([
    { name: 'Lorem Khaled Ipsum is a major key to success.' },
    { name: 'Celebrate success right, the only way, apple.' },
  ]);
});
