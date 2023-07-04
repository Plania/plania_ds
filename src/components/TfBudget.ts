import { html, css, TfBase } from './TfBase.js';

const tfBudgetStyle = css`
   .level {
      color: var(--tf-sys-light-secondary);
      font-weight: bold;
   }
   .budget {
      color: var(--tf-sys-light-surface-variant));
      font-weight: bold;
   }
`;

export class TfBudget extends TfBase {
  private _currencySymbol = '€';
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${tfBudgetStyle}
            </style>
            <span class="level"> </span><span class="budget"> </span>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['level'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string): void {
    const levelElem = this.shadowRoot?.querySelector('.level');
    const budgetlElem = this.shadowRoot?.querySelector('.budget');

    if (!levelElem || !budgetlElem) return;

    if (name === 'level') {
      levelElem.innerHTML = this._currencySymbol.repeat(parseInt(newValue));
      budgetlElem.innerHTML = this._currencySymbol.repeat(5 - parseInt(newValue));
    }
  }

  get level() {
    return this.getAttribute('level') || '1';
  }

  set level(value) {
    this.setAttribute('level', value ?? '1');
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-budget': TfBudget;
   }
}

customElements.define('tf-budget', TfBudget);
