import TaskModel from './TaskModel';

const template = document.createElement('template');
template.innerHTML = /* html */`
  <div class="flex items-center justify-between w-full py-2 rounded-lg hover:bg-violet-100">
    <p class="task-name"></p>
    <button class="task-complete-btn px-1 py-1 text-gray-500 border border-gray-400 rounded-lg">
      <svg class="task-complete-svg invisible w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </button>
  </div>
`;
document.body.appendChild(template);

export default class TaskElement extends HTMLElement {
  static all() {
    return TaskModel.all().map((model) => {
      const task = new TaskElement();
      task.model = model;
      return task;
    });
  }

  static create(name) {
    const taskEl = new TaskElement();
    taskEl.model = TaskModel.create(name);
    return taskEl;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));

    this.nameEl = this.querySelector('.task-name');
    this.completeBtnEl = this.querySelector('.task-complete-btn');
    this.completeSvgEl = this.querySelector('.task-complete-svg');

    this.updateName();

    if (this.model.completed) this.styleCompleted();
    else this.styleUncompleted();

    this.completeBtnEl.addEventListener('click', this.completeBtnClick.bind(this));
  }

  completeBtnClick() {
    if (this.model.completed) {
      this.model.uncomplete();
      this.styleUncompleted();
    } else {
      this.model.complete();
      this.styleCompleted();
    }
  }

  updateName() {
    this.nameEl.innerText = this.model.name;
  }

  styleCompleted() {
    this.nameEl.classList.add('line-through');
    this.nameEl.classList.add('text-gray-500');
    this.completeSvgEl.classList.remove('invisible');
  }

  styleUncompleted() {
    this.nameEl.classList.remove('line-through');
    this.nameEl.classList.remove('text-gray-500');
    this.completeSvgEl.classList.add('invisible');
  }
}

customElements.define('x-task', TaskElement);
