import { css, html, TfBase } from './TfBase.js';

const style = css`
  div {
    background-color: var(--tf-ref-primary-primary-100);
    font: var(--tf-label-large);
    color: var(--tf-sys-light-primary);
    display: flex;
    padding: 0.25rem 0rem 0.25rem 1rem;
    align-items: flex-start;
    gap: 0.25rem;
  }

  div > span:nth-child(1) {
    text-transform: uppercase;
  }
`;

class TfMonthHeader extends TfBase {
  allMonth: string[];
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div></div>
      `);

    this.allMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  connectedCallback() {
    const div = this.shadowRoot?.querySelector('div');
    if (!div) return;
    div.innerHTML = `<span>${this.month}</span> <span>${this.year}</span>`;
  }

  static get observedAttributes() {
    return ['month', 'year'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const div = this.shadowRoot?.querySelector('div');
    if (!div) return;
    if (oldValue === newValue) return;
    div.innerHTML = '';
    switch (name) {
    case 'month':
      div.innerHTML = `<span>${newValue}</span> <span>${this.year}</span>`;
      break;
    case 'year':
      div.innerHTML = `<span>${this.month}</span> <span>${newValue}</span>`;
      break;
    }
  }

  get month() {
    const today = new Date();
    const month = this.allMonth[today.getMonth()];

    return this.getAttribute('month') || month;
  }

  set month(value) {
    this.setAttribute('month', value);
  }

  get year() {
    const today = new Date();
    const year = today.getFullYear().toString();
    return this.getAttribute('year') || year;
  }

  set year(value) {
    this.setAttribute('year', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-month-header': TfMonthHeader;
  }
}

customElements.define('tf-month-header', TfMonthHeader);
