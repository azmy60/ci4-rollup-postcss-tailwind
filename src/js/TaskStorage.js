import * as storage from './storage';

const KEY = 'tasks';

const TaskStorage = {
  KEY,
  tasks: storage.load(KEY, []),

  insert(task) {
    this.tasks.push(task.data);
    this.save();
  },

  save() {
    storage.save(KEY, this.tasks);
  },

  update(task) {
    this.tasks[task.id] = task.data;
    this.save();
  },

  clear() {
    storage.clear(KEY);
    this.tasks = [];
  },

  get length() {
    return this.tasks.length;
  },
};

export default TaskStorage;
