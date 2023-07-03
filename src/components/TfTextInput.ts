import { html, css, TfBase } from './TfBase.js';

const style = css`
  input {
    padding: 0.5rem 0;
    width: calc(100% - 0.75rem);
    padding-left: 0.75rem;
    font : var(--tf-body1);
  }

  label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.2s ease all;
  }

  input:focus ~ label,
  .error ~ label {
    top: -10px;
  }

  .input-icon ~ label {
    left: 3rem;
  }

  .input-icon:focus ~ label,
  .error ~ label {
    left: 2rem;
  }

  .keep-focus ~ label {
      top: -10px;
      left: 2rem;
   }

  .input-icon {
    padding-left: 3rem !important;
    width: calc(100% - 3rem - 2px);
  }

  .container {
    position: relative;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(50%);
    color: var(--tf-sys-light-on-primary);
    width: 1.25rem;
    height: 1.25rem;
  }

  input:focus {
    outline: none;
    border-color: var(--tf-sys-light-on-primary);
  }

  .default {
    border: 1px solid var(--tf-sys-light-outline);
    border-radius: 1.5rem;
    background-color: var(--tf-sys-light-primary-container);
  }

  .disabled {
    border-color: var(--tf-sys-light-surface-variant);
    background-color: var(--tf-sys-light-surface-variant);
  }

  .error {
    background-color: var(--tf-sys-light-error-container);
  }

  .error,
  .error ~ label,
  .error-message,
  .error::placeholder,
  .error ~ .icon {
    color: var(--tf-sys-light-error);
  }

  .error-message{
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export class TfInputText extends TfBase {
  constructor() {
    super();
    this.shadowRoot && 
    (this.shadowRoot.innerHTML += html`
      <style>
        ${style}
      </style>
      <div class="container">
        <input type="text" class="default" />
        <label></label>
      </div>
    `);
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector('input');
    if(!input) return;
    input.addEventListener('change', () => {
      if (input.value.length > 0) {
        input.classList.add('keep-focus');
      }else{
        input.classList.remove('keep-focus');
      }
    });
  }

  static get observedAttributes() {
    return ['icon', 'status', 'pictogramme', 'label' , 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const input = this.shadowRoot?.querySelector('input');
    const label = this.shadowRoot?.querySelector('label');
    const icon = this.shadowRoot?.querySelector('tf-icon');
    if (!input || !label) return;
    
    switch (name) {
    case 'status':
      input?.classList.toggle(_newValue, true);
      input.disabled = _newValue === 'disabled';
      if (_newValue === 'error') {
        label.insertAdjacentHTML('afterend', '<div class="error-message"><slot name="error"></slot></div>');
      }
      break;

    case 'label':
      label.textContent = _newValue;
      break;

    case 'pictogramme':
      icon?.remove();
      input?.classList.remove('input-icon');
      if (this.icon) {
        input?.insertAdjacentHTML(
          'afterend',
          `<tf-icon icon="${this.pictogramme}" class="icon"></tf-icon>`
        );
        input?.classList.add('input-icon');
      }
      break;
    case 'value':
      input.value = _newValue;
      input.classList.add('keep-focus');
      break;
    }
  }

  get icon() {
    return this.hasAttribute('icon');
  }

  set icon(value) {
    value && this.setAttribute('icon', '');
    !value && this.removeAttribute('icon');
  }

  get status() {
    return this.getAttribute('status') || 'default';
  }

  set status(value) {
    this.setAttribute('status', value);
  }

  get pictogramme() {
    return this.getAttribute('pictogramme') || 'arrow-forward-ios';
  }

  set pictogramme(value) {
    this.setAttribute('pictogramme', value);
  }

  get label() {
    return this.getAttribute('label') || '';
  }

  set label(value) {
    this.setAttribute('label', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-text-input': TfInputText;
  }
}

customElements.define('tf-text-input', TfInputText);