import * as storage from './storage';

const KEY = 'tasks';

const TaskStorage = {
  KEY,
  data: storage.load(KEY, []),

  insert(task) {
    this.data.push(task.data);
    this.save();
  },

  save() {
    storage.save(KEY, this.data);
  },

  update(task) {
    this.data[task.id] = task.data;
    this.save();
  },

  clear() {
    storage.clear(KEY);
    this.data = [];
  },

  get length() {
    return this.data.length;
  },
};

export default TaskStorage;
