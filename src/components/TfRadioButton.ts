import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .container {
    --background: var(--tf-sys-light-surface);
    --outline: var(--tf-sys-light-outline);
    --color: var(--tf-sys-light-onprimary);
    --error: var(--tf-sys-light-error);
    display: flex;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .container:focus-within {
    --outline: var(--tf-sys-light-primary);
    --color: var(--tf-sys-light-primary);
  }

  .radio-box {
    background-color: var(--background);
    border: 1px solid var(--outline);
    border-radius: 0.75rem;
    color: var(--color);
    display: flex;
    position: relative;
    padding: 0.25rem;
    width: 1rem;
    height: 1rem;
  }

  label {
    color: var(--color);
  }

  .disabled {
    --background: var(--tf-sys-light-surface-variant);
    --color: var(--tf-sys-light-outline);
  }

  .error {
    --background: var(--tf-sys-light-error-container);
    --outline: var(--tf-sys-light-error);
    --color: var(--tf-sys-light-error);
  }

  input[type='radio' i] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;
  }

  input[type='radio' i]:focus-visible {
    outline: none;
  }

  input[type='radio' i] ~ .radio-icon {
  }

  .radio-icon {
    visibility: hidden;
    background-color: var(--color);
    border-radius: 0.75rem;
    position: absolute;
    top: calc(50% - 0.25rem);
    left: calc(50% - 0.25rem);
    width: 0.5rem;
    height: 0.5rem;
  }

  .checked .radio-icon {
    visibility: visible;
  }
`);

export class TfRadioButton extends TfBase {
  constructor() {
    super();
    this.adoptStylesheet(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <div class="container">
          <div class="radio-box">
            <div class="radio-icon"></div>
            <input
              type="radio"
              id="${this.id || 'radio'}"
              name="${this.name}"
              value="${this.value}"
            />
          </div>
          <label for="${this.id || 'radio'}">
            <slot></slot>
          </label>
        </div>
      `);
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector('input');

    if (!input) return;

    input.addEventListener('focus', () => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    input.addEventListener('blur', () => {
      this.dispatchEvent(new CustomEvent('blur'));
    });
    input.addEventListener('input', this._updateValue.bind(this));
    input.addEventListener('change', () => {
      this.dispatchEvent(
        new CustomEvent('tf-change', { detail: this.value, bubbles: true, composed: true })
      );
    });
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'error', 'value', 'name', 'id'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    const container = this.shadowRoot?.querySelector('.container');
    const input = this.shadowRoot?.querySelector('input');
    const label = this.shadowRoot?.querySelector('label');

    if (!container || !input) return;

    if (name === 'name') {
      input.name = newValue;
      return;
    }

    if (name === 'id') {
      input.id = newValue;
      label?.setAttribute('for', newValue);
      return;
    }

    if (name === 'value') {
      input.value = newValue;
      return;
    }

    container.classList.remove('checked', 'disabled', 'error');
    input.removeAttribute('checked');

    if (name === 'checked') {
      input.checked = this.checked;
      this.checked && container.classList.add('checked');
    }

    if (name === 'disabled') {
      input.disabled = this.disabled;
      this.disabled && container.classList.add('disabled');
    }

    if (name === 'error') {
      this.error && container.classList.add('error');
    }
  }

  private _updateValue() {
    const input = this.shadowRoot?.querySelector('input');
    if (!input) return;
    this.checked = input.checked;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('tf-input', { bubbles: true, composed: true }));
  }

  get value() {
    return this.getAttribute('value') || 'on';
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  set checked(value) {
    value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    value ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
  }

  get error() {
    return this.hasAttribute('error');
  }

  set error(value) {
    value ? this.setAttribute('error', '') : this.removeAttribute('error');
  }

  get name() {
    return this.getAttribute('name') || '';
  }

  set name(value) {
    this.setAttribute('name', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-radio-button': TfRadioButton;
  }
}

customElements.define('tf-radio-button', TfRadioButton);
