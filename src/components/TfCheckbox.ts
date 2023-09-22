import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
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

  .check-box {
    background-color: var(--background);
    border: 1px solid var(--outline);
    border-radius: 0.5rem;
    color: var(--color);
    display: flex;
    position: relative;
    padding: 0.25rem;
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

  input[type='checkbox'] {
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

  input[type='checkbox']:focus-visible {
    outline: none;
  }

  input[type='checkbox'] ~ .check-icon {
    position: absolute;
    top: calc(50% - 0.5rem);
    left: calc(50% - 0.5rem);
    width: 1rem;
    height: 1rem;
    color: var(--color);
  }

  .check-icon {
    visibility: hidden;
  }

  .checked .check-icon {
    visibility: visible;
  }
`);

export class TfCheckbox extends TfBase {
  constructor() {
    super();
    this.adoptStylesheet(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <div class="container">
          <div class="check-box">
            <tf-icon icon="check" class="check-icon"></tf-icon>
            <input type="checkbox" id="checkbox" />
          </div>
          <label for="checkbox">
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
    input.addEventListener('input', () => {
      this.checked = input.checked;
      this.value = input.value;
      this.dispatchEvent(new CustomEvent('tf-input'));
    });
    input.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('tf-change'));
    });
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'error', 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    const container = this.shadowRoot?.querySelector('.container');
    const input = this.shadowRoot?.querySelector('input');

    if (!container || !input) return;

    container.classList.remove('checked', 'disabled', 'error');
    input.removeAttribute('checked');

    this.checked && container.classList.add('checked');
    this.disabled && container.classList.add('disabled');
    this.error && container.classList.add('error');

    input.checked = this.checked;
    input.disabled = this.disabled;
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
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-checkbox': TfCheckbox;
  }
}

customElements.define('tf-checkbox', TfCheckbox);
