import { html, css, tfBase } from './tfBase.js';

export class tfBudget extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-budget.css" />
      <span class="level"> </span><span class="budget"> </span>
    `;
    this._currencySymbol = '€';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `${this.level} ${this._currencySymbol}`;
    this.style.color = this._color;
  }

  static get observedAttributes() {
    return ['priority'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const divElem = this.shadowRoot!.querySelector('div')!;
    if (name === 'priority') {
      divElem.classList.remove(oldValue);
      divElem.classList.add(newValue);
    }
  }

  get priority() {
    return this.getAttribute('priority') || 'cost';
  }

  set priority(value) {
    this.setAttribute('priority', value);
  }
}
