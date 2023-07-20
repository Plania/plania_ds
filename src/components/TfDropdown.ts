import { html, css, TfBase } from './TfBase.js';

const style = css`
  .container {
    position: relative;
  }

  .container tf-text-input {
    flex: 1 0 auto;
  }
  .container svg {
    position: absolute;
    cursor: pointer;
    right: 8px;
    top: 46%;
    transition: transform 0.2s ease;
    transform-origin: center;
  }

  .dropdown-content {
    display: none;
    background-color: var(--tf-light-surface);
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .dropdown-content.open {
    display: block;
    cursor: pointer;
  }

  .tf-dropdown[disabled] .container svg {
    pointer-events: none;
    opacity: 0.5;
  }
  .tf-dropdown[disabled] .dropdown-content {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export class TfDropdown extends TfBase {
  private _disabled: boolean = false;
  private _isDropdownOpen: boolean = false;

  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.toggleDropdown.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggleDropdown.bind(this));
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'disabled') {
      this._disabled = newValue !== null;
      this.updateDisabledState();
    }
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    if (this._disabled !== value) {
      this._disabled = value;
      this.updateDisabledState();
      if (value) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  }

  get isDropdownOpen(): boolean {
    return this._isDropdownOpen;
  }

  set isDropdownOpen(value: boolean) {
    this._isDropdownOpen = value;
    const dropdownIcon = this.shadowRoot!.querySelector('.container svg') as HTMLElement;
    if (dropdownIcon) {
      dropdownIcon.style.transform = value ? 'rotate(0deg)' : 'rotate(-90deg)';
    }

    const dropdownContent = this.shadowRoot!.querySelector('.dropdown-content') as HTMLElement;
    if (dropdownContent) {
      if (value) {
        dropdownContent.classList.add('open');
      } else {
        dropdownContent.classList.remove('open');
      }
    }
  }

  updateDisabledState() {
    const dropdownIcon = this.shadowRoot!.querySelector('.container svg') as HTMLElement;
    if (dropdownIcon) {
      if (this._disabled) {
        dropdownIcon.style.pointerEvents = 'none';
        dropdownIcon.style.opacity = '0.5';
      } else {
        dropdownIcon.style.pointerEvents = 'auto';
        dropdownIcon.style.opacity = '1';
      }
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    if (!this._disabled) {
      this._isDropdownOpen = !this._isDropdownOpen;
      this.isDropdownOpen = this._isDropdownOpen;
    }
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <style>
      ${style}
    </style>
    <div class="container">
      <slot class="tf-text-input"></slot>
      <svg
        width="13"
        height="9"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.706237 2.41374L3.29624 5.00374C3.68624 5.39374 4.31624 5.39374 4.70624 5.00374L7.29624 2.41374C7.92624 1.78374 7.47624 0.703735 6.58624 0.703735H1.40624C0.516237 0.703735 0.0762368 1.78374 0.706237 2.41374Z"
          fill="black"
        />
      </svg>
    </div>
    ${this._disabled ? '' : '<div class="dropdown-content"><slot name="dropdown-options"></slot></div>'}
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-dropdown': TfDropdown;
  }
}

customElements.define('tf-dropdown', TfDropdown);
