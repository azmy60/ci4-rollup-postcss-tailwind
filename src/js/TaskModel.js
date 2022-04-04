const TaskStorage = require('./TaskStorage');

class TaskModel {
  static get KEY() { return TaskStorage.KEY; }

  static create(name) {
    const task = new TaskModel();
    task.name = name;
    task.id = TaskStorage.length;
    task.completed = false;

    TaskStorage.insert(task);

    return task;
  }

  static all() {
    return TaskStorage.data;
  }

  static clearAll() {
    TaskStorage.clear();
  }

  complete() {
    this.completed = true;
    TaskStorage.update(this);
  }

  uncomplete() {
    this.completed = false;
    TaskStorage.update(this);
  }

  get data() {
    return {
      name: this.name,
      completed: this.completed,
    };
  }
}

module.exports = TaskModel;
