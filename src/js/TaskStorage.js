import * as storage from './storage';


const TaskStorage = {
  KEY: 'tasks',
  data: storage.load(this.KEY, []),

  insert(task) {
    this.data.push(task.data);
    this.save();
  },

  save() {
    storage.save(this.KEY, this.data);
  },

  update(task) {
    this.data[task.id] = task.data;
    this.save();
  },

  clear() {
    storage.clear(this.KEY);
    this.data = [];
  },

  get length() {
    return this.data.length;
  },
};

export default TaskStorage;
