const storage = require('./storage');

const KEY = 'tasks';

const TaskModel = {
  get KEY() { return KEY; },

  create(name) {
    const tasks = storage.load(KEY, []);
    tasks.push({ name });
    storage.save(KEY, tasks);
  },

  all() {
    return storage.load(KEY, []);
  },

  clear() {
    storage.clear(KEY);
  },
};

module.exports = TaskModel;
