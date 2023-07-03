import { css, html, TfBase } from './TfBase.js';
import { tfIconNameMap } from './TfIcon.js';

const style = css`
   .checkbox {
      display: flex;
      align-items: center;
      position: relative;
      gap: 0.5rem;
   }

   input[type='checkbox'] {
      appearance: none;
      font: inherit;
      color: currentColor;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid var(--tf-sys-light-outline);
      border-radius: 0.5rem;
      display: grid;
      place-content: center;
      pointer-events:auto;
      margin: 0;
   }

   input[type='checkbox'] ~.check-icon {
      display: none;
      position: absolute;
   }

   input[type='checkbox']:checked ~.check-icon {
      display: block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.25rem;
      pointer-events: none;
   }

   .default input[type='checkbox'] {
      background-color: var(--tf-sys-light-primary-container);
   }

   .default input[type='checkbox']:focus {
      border-color: var(--tf-sys-light-primary);
      
   }

   .default input[type='checkbox']:focus ~ .check-icon {
      color: var(--tf-sys-light-primary);
   }

   .default input[type='checkbox']:focus ~ label {
      color: var(--tf-sys-light-primary);
   }

   .disabled input[type='checkbox'] {
      background-color: var(--tf-sys-light-surface-variant);
   }

   .disabled input[type='checkbox'] ~ label {
      color: var(--tf-sys-light-outline);
   }

   .disabled input[type='checkbox'] ~ .check-icon {
      color: var(--tf-sys-light-outline);
   }
`;

export class TfCheckbox extends TfBase {
  private _svg = html`${tfIconNameMap['check']}`;

  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="checkbox">
               <input type="checkbox" id="checkbox" checked />
               <label for="checkbox">
                  <slot></slot>
               </label>
               <tf-icon icon="check" class="check-icon"></tf-icon>
            </section>
         `);
  }

  static get observedAttributes() {
    return ['status', 'checked', 'focus'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    const checkboxElem = this.shadowRoot?.querySelector('section');
    const inputElem = this.shadowRoot?.querySelector('input');
    inputElem?.removeAttribute('checked');

    switch (name) {
    case 'status':
      checkboxElem?.classList.remove(_oldValue);
      checkboxElem?.classList.add(newValue);

      if (newValue === 'disabled') {
        inputElem?.setAttribute('disabled', '');
      }

      if (newValue === 'focus') {
        checkboxElem?.classList.add('default');
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
    this.svg = value;
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-checkbox': TfCheckbox;
   }
}

customElements.define('tf-checkbox', TfCheckbox);
