/* eslint-disable no-undef */

import { load } from '../../src/js/storage';
import TaskModel from '../../src/js/TaskModel';

function getTasksFromStorage() {
  return load(TaskModel.KEY);
}

afterEach(() => {
  TaskModel.clearAll();
});

test('insert tasks to storage', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');

  const tasks = getTasksFromStorage();
  const { name, completed } = tasks[0];

  expect(completed).toBe(false);
  expect(name).toBe('Lorem Khaled Ipsum is a major key to success.');
});

test('can retrieve all tasks', () => {
  TaskModel.create('Lorem Khaled Ipsum is a major key to success.');
  TaskModel.create('Celebrate success right, the only way, apple.');

  const tasks = TaskModel.all().map((task) => ({
    name: task.name,
    completed: task.completed,
  }));

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
  expect(getTasksFromStorage()[0].completed).toBe(true);

  task.uncomplete();
  expect(getTasksFromStorage()[0].completed).toBe(false);
});
