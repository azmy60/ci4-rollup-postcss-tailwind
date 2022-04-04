/* eslint-disable no-undef */

const { load, save, clear } = require('../../src/js/storage');

const myData = {
  name: 'myName',
  age: 123,
  hobbies: ['hobby1', 'hobby2'],
};

test('should save to localStorage', () => {
  save('myData', myData);
  expect(localStorage.getItem('myData')).toBeDefined();
});

test('should load and parse from localStorage', () => {
  expect(load('myData')).toEqual(myData);
});

test('can clear localStorage by key', () => {
  clear('myData');
  expect(load('myData')).not.toBeDefined();
});