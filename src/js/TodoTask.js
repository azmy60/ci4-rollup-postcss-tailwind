const templateHtml = /* html */`
  <li class="flex items-center justify-between w-full py-2 rounded-lg hover:bg-violet-100">
  <span></span>
  <button class="px-1 py-1 text-gray-500 border border-gray-400 rounded-lg">
    <svg class="invisible w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </button>
  </li>
`;
const template = document.createElement('template');
document.head.appendChild(template);
template.innerHTML = templateHtml;

class TodoTask extends HTMLElement {
  getName() {
    return this.getAttribute('name');
  }

  getCompleted() {
    return this.getAttribute('completed') === 'true';
  }

  setCompleted(value) {
    this.setAttribute('completed', value.toString());
  }

  getTaskId() {
    return this.getAttribute('task-id');
  }

  toggleCompleted() {
    this.svg.classList.toggle('invisible');
    this.nameSpan.classList.toggle('line-through');
    this.nameSpan.classList.toggle('text-gray-500');
    this.setCompleted(!this.getCompleted());

    fetch('/update', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        id: this.getTaskId(),
        completed: this.getCompleted(),
      }),
    }).then({
      // do nothing
    }).catch({
      // TODO popup error
    });
  }

  constructor() {
    super();

    this.svg = null;
    this.nameSpan = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));

    this.nameSpan = this.querySelector('span');
    this.svg = this.querySelector('svg');

    this.nameSpan.innerText = this.getName();

    if (this.getCompleted()) {
      this.svg.classList.remove('invisible');
      this.nameSpan.classList.add('line-through', 'text-gray-500');
    }

    const button = this.querySelector('button');
    button.addEventListener('click', () => this.toggleCompleted());
  }
}

customElements.define('todo-task', TodoTask);

export default true;
