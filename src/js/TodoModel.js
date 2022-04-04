const { save, load, clear } = require('./storage');

const TodoModel = {
  KEY: 'todos',
  data: load(this.KEY, []),

  create(name) {
    this.data.push({ name });
    save(this.KEY, this.data);
  },

  clear() {
    clear(this.KEY);
    this.data = [];
  },
};

module.exports = TodoModel;
