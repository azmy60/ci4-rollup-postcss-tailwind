import TaskStorage from './TaskStorage';

export default class TaskModel {
  static get KEY() { return TaskStorage.KEY; }

  static create(name) {
    const task = new TaskModel({ name, id: TaskStorage.length, completed: false });
    TaskStorage.insert(task);
    return task;
  }

  static all() {
    return TaskStorage.tasks
      .map((task, id) => new TaskModel({ id, name: task.name, completed: task.completed }));
  }

  static clearAll() {
    TaskStorage.clear();
  }

  constructor({ id, name, completed }) {
    this.id = id;
    this.name = name;
    this.completed = completed;
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
    return { name: this.name, completed: this.completed };
  }
}
