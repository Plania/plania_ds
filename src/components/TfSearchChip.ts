import { css, html, TfBase } from './TfBase.js';

const style = css`
  .type {
    padding: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.625rem;
    
  }

  .activity {
    background-color: var(--tf-tertiary-main);
    color: var(--tf-main-main);
    display: inline-block;
    width: 4.2rem;
    margin: auto;
    justify-content: center;
    height: 0.9rem;
    text-align: center;
   
  }

  .poi {
    background-color: var(--tf-secondary-main);
    margin-left: 0.3rem;
  }
`;

export class TfSearchChip extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <span class="activity">
          <slot></slot>
        </span>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['type'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const chipElem = this.shadowRoot?.querySelector('span');

    if (!chipElem) return;

    if (name === 'type') {
      chipElem.classList.remove(oldValue);
      chipElem.classList.add(newValue);
    }
  }

  get type() {
    return this.getAttribute('type') || 'activity';
  }

  set type(value) {
    this.setAttribute('type', value ?? 'activity');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-search-chip': TfSearchChip;
  }
}

customElements.define('tf-search-chip', TfSearchChip);
