import { html, css, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  .container {
    --background: var(--tf-sys-light-surface);
    --border: var(--tf-sys-light-outline-opacity-016);
    --color: var(--tf-sys-light-onprimary);
    display: flex;
    flex-direction: column;
    color: var(--color);
  }

  .disabled {
    --background: var(--tf-sys-light-surface-variant);
    --color: var(--tf-sys-light-outline);
    pointer-events: none;
  }

  .label-frame {
    display: flex;
    align-items: center;
    transition: 0.3s ease all;
    color: var(--color);
  }

  .input-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--background);
    border: 1px solid var(--border);
    color: var(--color);
    border-radius: 1.5rem;
    padding: 0.5rem;
  }

  input {
    border: none;
    outline: none;
    background: none;
    color: var(--color);
    padding: 0;
    margin: 0;
    width: 100%;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }

  .container:focus-within {
    --border: var(--tf-sys-light-primary);
    --color: var(--tf-sys-light-primary);
  }

  .error {
    --background: var(--tf-sys-light-error-container);
    --border: var(--tf-sys-light-error);
    --color: var(--tf-sys-light-error);
  }

  .error-frame {
    visibility: none;
    display: flex;
    align-items: center;
  }

  .error > .error-frame {
    visibility: visible;
  }
`);

export class TfInputDate extends TfBase {
  constructor() {
    super();
    this.adoptStylesheet(style);

    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <div class="container">
          <div class="label-frame">
            <div class="spacer"></div>
            <label for="date-${this.id}"><slot name="label"></slot></label>
          </div>
          <div class="input-box">
            <slot name="icon"></slot>
            <input
              type="date"
              id="date-${this.id}"
              ${this.value !== '' ? `value="this.value"` : ''}
            />
          </div>
          <div class="error-frame">
            <div class="spacer"></div>
            <slot name="error"></slot>
          </div>
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
      this.value = input.value;
      this.dispatchEvent(new CustomEvent('tf-input'));
    });
    input.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('tf-change'));
    });
    input.addEventListener('error', (e) => {
      this.error = true;
      this.querySelector('span')?.remove();
      this.innerHTML += html`<span slot="error">${e.message}</span>`;
      this.dispatchEvent(new CustomEvent('tf-error', { detail: e }));
    });
  }

  static get observedAttributes() {
    return ['disabled', 'error', 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const container = this.shadowRoot?.querySelector('.container');
    const input = this.shadowRoot?.querySelector('input');

    if (!container) return;
    if (!input) return;

    switch (name) {
      case 'error':
        this.error && container.classList.add('error');
        !this.error && container.classList.remove('error');
        break;
      case 'disabled':
        input.disabled = this.disabled;
        this.disabled && container.classList.add('disabled');
        !this.disabled && container.classList.remove('disabled');
        break;
      case 'value':
        input.value = this.value;
        break;
    }
  }

  get error() {
    return this.hasAttribute('error');
  }

  set error(value) {
    (value && this.setAttribute('error', '')) || this.removeAttribute('error');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    (value && this.setAttribute('disabled', '')) || this.removeAttribute('disabled');
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  set value(value) {
    this.setAttribute('value', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-input-date': TfInputDate;
  }
}

customElements.define('tf-input-date', TfInputDate);
