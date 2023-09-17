import { css, html, TfBase } from './TfBase.js';

const style = css`
  :host {
    width: fit-content;
    display: block;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    text-align: center;
    border: none;
    justify-content: center;
    font: var(--tf-button);
    width: 100%;
  }

  button:hover,
  .hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  button:active,
  .focus {
    outline: none;
    box-shadow: none;
  }

  tf-icon {
    display: none;
  }

  .icon {
    display: inline;
  }

  .disabled:hover {
    cursor: default;
    box-shadow: none;
  }

  .disabled:active {
    cursor: default;
    box-shadow: none;
  }

  .only-icon {
    padding: 6px !important;
    border-radius: 50%;
  }

  .small {
    padding: 6px 1rem;
    font-size: 0.75rem;
  }

  .large {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }

  .medium {
    padding: 4px 1rem;
    font-size: 1rem;
  }

  .disabled {
    opacity: 0.4;
    color: #fff;
  }
`;

export class TfButton extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <button class="primary">
          <tf-icon></tf-icon>
          <slot></slot>
        </button>
      `);
  }

  static get observedAttributes() {
    return ['variant', 'state', 'size', 'active', 'icon', 'text'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const buttonElem = this.shadowRoot?.querySelector('button');
    const iconElem = this.shadowRoot?.querySelector('tf-icon');

    if (!buttonElem) return;

    this.setButtonState(buttonElem);
    this.setButtonContent(buttonElem);

    switch (name) {
      case 'variant':
      case 'state':
      case 'size':
        this.updateButtonClass(buttonElem, oldValue, newValue);
        break;
    }

    if (name === 'icon') {
      if (oldValue !== newValue) {
        iconElem?.classList.add('icon');
        iconElem?.setAttribute('icon', newValue);
      }
    } else if (!this.hasIcon) {
      iconElem?.classList.remove('icon');
      iconElem?.setAttribute('icon', '');
    }
  }

  setButtonState(buttonElem: HTMLButtonElement) {
    if (!this.active) {
      buttonElem.classList.add('disabled');
      buttonElem.disabled = true;
    } else {
      buttonElem.classList.remove('disabled');
      buttonElem.disabled = false;
    }
  }

  setButtonContent(buttonElem: HTMLButtonElement) {
    if (!this.text) {
      buttonElem.classList.add('only-icon');
    } else {
      buttonElem.classList.remove('only-icon');
    }
  }

  updateButtonClass(buttonElem: HTMLButtonElement, oldValue: string, newValue: string) {
    buttonElem.classList.remove(oldValue === '' ? 'primary' : oldValue);
    buttonElem.classList.add(newValue);
  }

  insertIcon(buttonElem: HTMLButtonElement, icon: string) {
    buttonElem.insertAdjacentHTML('afterbegin', html`<tf-icon icon="${icon}"></tf-icon>`);
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
    return this.hasAttribute('active');
  }

  set active(value) {
    value && this.setAttribute('active', '');
    !value && this.removeAttribute('active');
  }

  get text() {
    return this.hasAttribute('text');
  }

  set text(value) {
    value && this.setAttribute('text', '');
    !value && this.removeAttribute('text');
  }

  get hasIcon() {
    return this.hasAttribute('icon');
  }

  get icon() {
    return this.getAttribute('icon') || '';
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-button': TfButton;
  }
}

customElements.define('tf-button', TfButton);
