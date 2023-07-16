import { css, html, TfBase } from './TfBase.js';
import { tfIconNameMap } from './TfIcon.js';

const style = css`
  .radio-button {
    display: flex;
    width: 88px;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
  }

  input[type='radio'] {
    appearance: none;
    color: currentColor;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 1px solid var(--tf-sys-light-outline);
    border-radius: 50%;
  }

  input[type='radio']:checked ~ .check-icon {
    display: none;
    position: absolute;
  }

  .default input[type='radio'] {
    background-color: var(--tf-sys-light-primary-container);
  }

  .default input[type='radio']:focus {
    border-color: var(--tf-sys-light-primary);
  }

  .default input[type='radio']:focus ~ .check-icon {
    color: var(--tf-sys-light-primary);
  }

  .default input[type='radio']:focus ~ label {
    color: var(--tf-sys-light-primary);
  }
  .disabled input[type='radio'] {
    background-color: var(--tf-sys-light-surface-variant);
  }

  .disabled input[type='radio'] ~ label {
    color: var(--tf-sys-light-outline);
  }

  .disabled input[type='radio'] ~ .check-icon {
    color: var(--tf-sys-light-outline);
  }
`;

export class TfRadioButton extends TfBase {
  private _svg = html`${tfIconNameMap['radio']}`;

  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <section class="radio-button">
          <input type="radio" />
          <label for="radio">
            <slot></slot>
          </label>
          <tf-icon icon="radio" class="radio-icon"></tf-icon>
        </section>
      `);
  }

  static get observedAttributes() {
    return ['status', 'checked', 'focus'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string) {
    const radioElem = this.shadowRoot?.querySelector('section');
    const inputElem = this.shadowRoot?.querySelector('input');
    inputElem?.removeAttribute('checked');

    switch (name) {
      case 'status':
        if (_oldValue !== null) {
          radioElem?.classList.remove(_oldValue);
        }
        radioElem?.classList.add(newValue);

        if (newValue === 'disabled') {
          inputElem?.setAttribute('disabled', '');
        }

        if (newValue === 'focus') {
          radioElem?.classList.add('default');
          inputElem?.focus();
        }

        break;
      case 'checked':
        inputElem?.setAttribute('checked', '');
        break;
    }
  }

  get checked() {
    return this.getAttribute('checked');
  }

  set checked(value) {
    value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
  }

  get svg() {
    return this._svg;
  }

  set svg(value) {
    this._svg = value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-radio-button': TfRadioButton;
  }
}

customElements.define('tf-radio-button', TfRadioButton);
