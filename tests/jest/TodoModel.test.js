/* eslint-disable no-undef */

const storage = require('../../src/js/storage');
const TaskModel = require('../../src/js/TaskModel');

afterEach(() => {
  TaskModel.truncate();
});

test('can insert a new task', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');

  const tasks = storage.load(TaskModel.KEY);
  const { name } = tasks[0];

  expect(name).toBe('Lorem Khaled Ipsum is a major key to success.');
});

test('can retrieve all tasks', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');
  TaskModel.create('Celebrate success right, the only way, apple.');

  const names = TaskModel.all().map((t) => t.name);
  expect(names).toEqual([
    'Lorem Khaled Ipsum is a major key to success.',
    'Celebrate success right, the only way, apple.',
  ]);
});
