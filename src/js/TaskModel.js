import TaskStorage from './TaskStorage';

export default class TaskModel {
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
    return TaskStorage.tasks.map((task, index) => {
      const model = new TaskModel();
      model.id = index;
      model.name = task.name;
      model.completed = task.completed;
      return model;
    });
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
