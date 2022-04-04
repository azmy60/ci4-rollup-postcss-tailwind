const TaskStorage = require('./TaskStorage');

class TaskModel {
  static get KEY() { return TaskStorage.KEY; }

  static create(name) {
    const task = new TaskModel();
    task.name = name;
    task.id = TaskStorage.length;

    TaskStorage.insert(task);

    return task;
  }

  static all() {
    return TaskStorage.data;
  }

  static truncate() {
    TaskStorage.clear();
  }

  get raw() {
    return {
      name: this.name,
    };
  }
}

module.exports = TaskModel;
