/* eslint-disable no-undef */

const storage = require('../../src/js/storage');
const TaskModel = require('../../src/js/TaskModel');

afterEach(() => {
  TaskModel.truncate();
});

test('can insert a new task', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');

  const tasks = storage.load(TaskModel.KEY);
  const { name, completed } = tasks[0];

  expect(completed).toBe(false);
  expect(name).toBe('Lorem Khaled Ipsum is a major key to success.');
});

test('can retrieve all tasks', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');
  TaskModel.create('Celebrate success right, the only way, apple.');

  const tasks = TaskModel.all();
  expect(tasks).toEqual([
    {
      name: 'Lorem Khaled Ipsum is a major key to success.',
      completed: false,
    }, {
      name: 'Celebrate success right, the only way, apple.',
      completed: false,
    },
  ]);
});

test('can complete and uncomplete a task', () => {
  const task = TaskModel.create('Lorem Khaled Ipsum is a major key to success.');

  task.complete();
  expect(TaskModel.all()[0].completed).toBe(true);

  task.uncomplete();
  expect(TaskModel.all()[0].completed).toBe(false);
});
