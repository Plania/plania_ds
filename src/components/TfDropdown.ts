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
`;

export class TfDropdown extends TfBase {

  state = {
    disabled: false,
  };
  static get observedAttributes() {
      return ['disabled','selected'];
    }
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'selected') {
      if (newValue === 'true') {

        this.classList.add('selected');
      } else {
        this.classList.remove('selected');
      }
    }
    if (name === 'disabled') {
      this.state.disabled = newValue !== 'false';
    }
  }
  connectedCallback() {
    this.render();
    this.addEventListener('click', this.toggleDropdown.bind(this));
    document.addEventListener('click', this.closeDropdown.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggleDropdown.bind(this));
    document.removeEventListener('click', this.closeDropdown.bind(this));
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();

    if (this.state.disabled) {
      return;
    }

    const dropdownContent = this.shadowRoot!.querySelector('.dropdown-content');
    const dropdownIcon = this.shadowRoot!.querySelector('.container svg')  as HTMLElement;

    if (dropdownContent && dropdownIcon) {
      dropdownContent.classList.toggle('open');
      dropdownIcon.style.transform = dropdownContent.classList.contains('open')
        ? 'rotate(0deg)'
        : 'rotate(-90deg)';
    }

    dropdownContent!.addEventListener('click', (event) => {
      const target = event.target as Element;
      if (target && target.matches('tf-dropdown-item')) {
        this.updateInputValue(target.textContent || '');

      const previouslySelectedItem = dropdownContent!.querySelector('tf-dropdown-item[selected]');
      if (previouslySelectedItem) {
        previouslySelectedItem.removeAttribute('selected');
      }

      // Add selected attribute to the clicked item
      target.setAttribute('selected', 'true');
        // Close the dropdown after selection
        if (dropdownContent && dropdownIcon) {
          dropdownContent.classList.remove('open');
          dropdownIcon.style.transform = 'rotate(-90deg)';
        }
      }
    });
  }
  updateInputValue(value: string) {
    const inputElement = this.shadowRoot!.querySelector('tf-text-input');
    if (inputElement && inputElement.shadowRoot) {
      const innerInputElement = inputElement.shadowRoot.querySelector('input');
      if (innerInputElement) {
        innerInputElement.value = value;
      }
    }
  }
  closeDropdown() {
    const dropdowns = document.querySelectorAll('tf-dropdown');
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.shadowRoot!.querySelector('.dropdown-content');
      const dropdownIcon = dropdown.shadowRoot!.querySelector('.container svg')  as HTMLElement;

      if (dropdownContent && dropdownIcon) {
        dropdownContent.classList.remove('open');
        dropdownIcon.style.transform = 'rotate(-90deg)';
      }
    });
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <style>
    ${style}
  </style>
  <div class="container">
    <slot class=".container tf-text-input"></slot>
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
  <div class="dropdown-content">
    <slot name="dropdown-options"></slot>
  </div>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-dropdown': TfDropdown;
  }
}

customElements.define('tf-dropdown', TfDropdown);
