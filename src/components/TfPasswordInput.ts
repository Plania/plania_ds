import { html, css, TfBase } from './TfBase.js';

const style = css`
   input {
      padding: 12px 0 12px 1rem;
      width: 100%;
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
      left: 2.5rem;
   }

   .input-icon:focus ~ label,
   .error ~ label {
      left: 1rem;
   }

   .keep-focus ~ label {
      top: -10px;
      left: 1rem;
   }

   .input-icon {
      padding-left: 2.5rem !important;
      width: calc(100% - 2.5rem);
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

   .right {
      left: auto;
      right: 1rem !important;
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

   .error-message {
      margin-left: 1rem;
      margin-bottom: 0.5rem;
   }
`;

export class TfInputPassword extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="container">
               <input type="password" class="default input-icon" />
               <label></label>
               <tf-icon icon="visibility" class="icon right" id="eyes"></tf-icon>
            </div>
         `);
  }

  connectedCallback() {
    const eyesIcon = this.shadowRoot?.getElementById('eyes');
    const input = this.shadowRoot?.querySelector('input');
    if (!eyesIcon) return;
    if (!input) return;
    eyesIcon.addEventListener('click', () => {
      this.show = this.show === 'true' ? 'false' : 'true';
    });

    input.addEventListener('change', () => {
      if (input.value.length > 0) {
        input.classList.add('keep-focus');
      } else {
        input.classList.remove('keep-focus');
      }
    });
  }

  static get observedAttributes() {
    return ['icon', 'status', 'show', 'pictogramme', 'label'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const input = this.shadowRoot?.querySelector('input');
    const label = this.shadowRoot?.querySelector('label');
    const eyesIcon = this.shadowRoot?.getElementById('eyes');

    if (!input || !label) return;

    switch (name) {
    case 'status':
      input?.classList.toggle(_newValue, true);
      input.disabled = _newValue === 'disabled';

      if (_newValue === 'error') {
        label.insertAdjacentHTML(
          'afterend',
          '<div class="error-message"><slot name="error"></slot></div>'
        );
      }
      break;

    case 'label':
      label?.classList.toggle('label', true);
      label.textContent = _newValue;
      break;

    case 'show':
      input.type = _newValue === 'true' ? 'text' : 'password';
      eyesIcon?.setAttribute('icon', _newValue === 'true' ? 'visibility-off' : 'visibility');
      break;

    case 'icon':
      _newValue === 'true' &&
               input?.insertAdjacentHTML(
                 'afterend',
                 '<tf-icon icon="lock" class="icon"></tf-icon>'
               );
      input?.classList.add('input-icon');
    }
  }

  get icon() {
    return this.getAttribute('icon') || 'false';
  }

  set icon(value) {
    this.setAttribute('icon', value);
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

  get show() {
    return this.getAttribute('show') || 'false';
  }

  set show(value) {
    this.setAttribute('show', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-input-password': TfInputPassword;
   }
}

customElements.define('tf-input-password', TfInputPassword);
