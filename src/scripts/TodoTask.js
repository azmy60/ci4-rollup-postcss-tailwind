const templateHtml = /* html */`
  <li class="flex items-center justify-between w-full py-2 rounded-lg hover:bg-purple-100">
  <span></span>
  <button class="px-1.5 py-1.5 text-gray-400 border border-gray-400 rounded-xl">
    <svg class="invisible w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </button>
  </li>
`;
const template = document.createElement('template');
document.head.appendChild(template);
template.innerHTML = templateHtml;

class TodoTask extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  get completed() {
    return this.getAttribute('completed') === 'true';
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));

    const nameSpan = this.querySelector('span');
    nameSpan.innerText = this.name;

    const svg = this.querySelector('svg');
    if (this.completed) {
      svg.classList.remove('invisible');
    }
  }
}

customElements.define('todo-task', TodoTask);

export default true;