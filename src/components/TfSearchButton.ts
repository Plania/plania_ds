import { css, html, TfBase } from './TfBase.js';

const style = css`
   button {
      padding: 0.5rem 1rem;
      border-radius: 30px;
      text-align: center;
      border: none;
      color: var(--tf-sys-light-ontertiary);
      font-weight: bold;
   }

   button:hover {
      cursor: pointer;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
   }

   .small {
      padding: 6px 16px;
      font-size: 11px;
   }

   .large {
      padding: 8px 16px;
   }

   .medium {
      padding: 4px 16px;
   }

   .disabled {
      opacity: 0.4;
      color: #fff;
   }
`;

export class TfSearchButton extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <button class="primary">
               <slot></slot>
            </button>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['variant', 'state', 'size', 'active'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const buttonElem = this.shadowRoot?.querySelector('button');

    if (!buttonElem) return;

    if (['variant', 'state', 'size'].includes(name)) {
      buttonElem.classList.remove(oldValue);
      buttonElem.classList.add(newValue);
    }

    if (name === 'active') {
      buttonElem.disabled = newValue !== 'true';
      newValue === 'false'
        ? buttonElem.classList.add('disabled')
        : buttonElem.classList.remove('disabled');
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get state() {
    return this.getAttribute('state') || 'default';
  }
  set state(value) {
    this.setAttribute('state', value);
  }

  get size() {
    return this.getAttribute('size') || 'medium';
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  get active() {
    return this.getAttribute('active') || 'true';
  }

  set active(value) {
    this.setAttribute('active', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-search-button': TfSearchButton;
   }
}


customElements.define('tf-search-button', TfSearchButton);
