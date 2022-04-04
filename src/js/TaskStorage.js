const storage = require('./storage');

const TaskStorage = {
  KEY: 'tasks',
  data: storage.load(this.KEY, []),

  insert(task) {
    this.data.push(task.raw);
    this.save();
  },

  save() {
    storage.save(this.KEY, this.data);
  },

  update(task) {
    this.data[task.id] = task.raw;
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

module.exports = TaskStorage;
