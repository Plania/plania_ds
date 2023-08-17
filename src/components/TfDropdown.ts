import {html, css, TfBase } from './TfBase.js';

const style = css`
  .container {
    position: relative;
  }

  .container tf-text-input {
    flex: 1 0 auto;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box; 
    width: auto;
    border-bottom: none; 
  }
  .container tf-icon {
    position: absolute;
    cursor: pointer;
    right: 8px;
    top: 25%;
    transition: transform 0.2s ease;
    transform-origin: center;
  }

  .dropdown-content {
    display: none;
    position: relative; 
    width: 100%;
    margin-top: -1.5rem;
    background-color: var(--tf-light-surface);
    border-radius: 0 0 24px 24px;
    min-height: 3.3rem;  
    max-height: calc(3.3rem * 3);
    overflow-y: auto; 
    padding: 0 0 16px 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-top: none;
    z-index: 2;
  }

  .dropdown-content.open {
    display: block;
    cursor: pointer;
    padding-top: 1.65rem;
  }
  .dropdown-content ::slotted(div) {
    position: relative;
    padding: 10px 18px 0 18px;
  }
  .tf-dropdown[disabled] .container tf-icon {
    pointer-events: none;
    opacity: 0.5;
  }
  .tf-dropdown[disabled] .dropdown-content {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export class TfDropdown extends TfBase {
  private _disabled = false;
  private _isDropdownOpen = false;
  private _hasIcon = true;
  private _pictogramme = '';
  private _label = '';

  boundToggleDropdown: any;
  boundFilterOptions: any;
  boundOnOptionClick: any;

  constructor() {
    super();
    this._hasIcon = this.hasAttribute('icon');
    this.boundToggleDropdown = this.toggleDropdown.bind(this);
    this.boundFilterOptions = this.filterOptions.bind(this);
    this.boundOnOptionClick = this.onOptionClick.bind(this);
    this.shadowRoot && 
    (this.shadowRoot.innerHTML += html`
    <style>
      ${style}
    </style>
    <div class="container">
    <tf-text-input icon="${this._hasIcon ? 'true' : 'false'}" status="default" pictogramme="${this._pictogramme}" label="${this._label}"></tf-text-input>
      <tf-icon id="toggleIcon" icon="keyboard-arrow-right"></tf-icon>
    </div>
    ${this._disabled ? '' : '<div class="dropdown-content"><slot name="dropdown-options"></slot></div>'}
    `);

  }

  static get observedAttributes() {
    return ['disabled','label', 'icon', 'pictogramme', 'open'];
  }

  connectedCallback() {
    this.addEventListener('click', this.boundToggleDropdown);
    
    const textInput = this.shadowRoot?.querySelector('tf-text-input');
    if (textInput) {
      textInput.addEventListener('input', this.boundFilterOptions);
    }
  
    const slot = this.shadowRoot?.querySelector('slot[name="dropdown-options"]');
    slot?.addEventListener('click', this.boundOnOptionClick);

    this.observeSlot();
  }

  onOptionClick(event: Event) {
    const clickedOption = event.target as HTMLElement;
    
    // Ensure that the clicked target is a tf-dropdown-item
    if (clickedOption.nodeName.toLowerCase() === 'tf-dropdown-item') {
      const textValue = clickedOption.textContent || '';
      this.setInputValue(textValue);
      this.isDropdownOpen = false;  // Close the dropdown
    }
  }

  setInputValue(value: string) {
    const textInput = this.shadowRoot?.querySelector('tf-text-input');
    if (textInput) {
      textInput.setAttribute('value', value); // set the value of text input to selected option
    }
  }
  observeSlot() {
    const slot = this.shadowRoot?.querySelector('slot[name="dropdown-options"]');
    const observer = new MutationObserver(() => {
      this.adjustDropdownHeight();
    });
    
    observer.observe(slot as Node, { childList: true });
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.boundToggleDropdown);
    
    const textInput = this.shadowRoot?.querySelector('tf-text-input');
    if (textInput) {
      textInput.removeEventListener('input', this.boundFilterOptions);
    }
  
    const slot = this.shadowRoot?.querySelector('slot[name="dropdown-options"]');
    slot?.removeEventListener('click', this.boundOnOptionClick);
  }

  filterOptions() {
    const textInputComponent = this.shadowRoot?.querySelector('tf-text-input');
    if (!textInputComponent) return;
    
    const actualInput = textInputComponent.shadowRoot?.querySelector('input');
    const actualInputValue = actualInput?.value ?? '';
  
    const options = Array.from(this.querySelectorAll('tf-dropdown-item'));
    options.forEach((option) => {
      if (option.textContent?.trim().toLowerCase().includes(actualInputValue.trim().toLowerCase())) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    });
    
    if (!this.isDropdownOpen) {
      this.isDropdownOpen = true;
    }
  }

  adjustDropdownHeight() {
    const slot = this.shadowRoot?.querySelector('slot[name="dropdown-options"]');
    const dropdownContent = this.shadowRoot?.querySelector('.dropdown-content') as HTMLElement;
    
    if (slot instanceof HTMLSlotElement) {
      const options = slot.assignedNodes().filter((node: Node) => node.nodeName.toLowerCase() === 'tf-dropdown-item');
      const itemHeight = 2;  
      const minHeight = Math.min(options.length, 3) * itemHeight;  // Fit at least 3 items

      dropdownContent.style.minHeight = `${minHeight}rem`;
    }
  }
  

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    const textInput = this.shadowRoot?.querySelector('tf-text-input') as HTMLElement;
    if (this.disabled) {
      this._disabled = newValue !== null;
      this.updateDisabledState();
      textInput.setAttribute('status', 'disabled');
    }else if (name === 'open') {
      this._isDropdownOpen = newValue === 'true';
      this.isDropdownOpen = this._isDropdownOpen;
    }
    switch (name) {
    case 'label':
      textInput.setAttribute('label', newValue || '');
      break;
    case 'icon':
      this._hasIcon = newValue === 'true';
      this._hasIcon ? textInput.setAttribute('icon', 'true') : textInput.removeAttribute('icon');
      break;
    case 'pictogramme':
      this._pictogramme = newValue || '';
      textInput.setAttribute('pictogramme', newValue || '');
      break;
    }
  }

  get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  set disabled(value: boolean) {
    value && this.setAttribute('disabled', '');
    !value && this.removeAttribute('disabled');
  }

  get isDropdownOpen(): boolean {
    return this._isDropdownOpen;
  }

  set isDropdownOpen(value: boolean) {
    this._isDropdownOpen = value;
    const dropdownIcon = this.shadowRoot?.getElementById('toggleIcon') as HTMLElement;
    if (dropdownIcon) {
      dropdownIcon.style.transform = value ? 'rotate(0deg)' : 'rotate(-90deg)';
    }

    const dropdownContent = this.shadowRoot?.querySelector('.dropdown-content') as HTMLElement;
    if (dropdownContent) {
      if (value) {
        dropdownContent.classList.add('open');
      } else {
        dropdownContent.classList.remove('open');
      }
    }
  }

  updateDisabledState() {
    const dropdownIcon = this.shadowRoot?.querySelector('.container svg') as HTMLElement;
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
    const clickedElem = event.target as HTMLElement;

    if (clickedElem.nodeName.toLowerCase() !== 'tf-dropdown-item') {
      if (!this._disabled) {
        this._isDropdownOpen = !this._isDropdownOpen;
        this.isDropdownOpen = this._isDropdownOpen;

        const toggleIcon = this.shadowRoot?.getElementById('toggleIcon') as HTMLElement;
        if (toggleIcon && this._isDropdownOpen) {
          toggleIcon.setAttribute('icon', 'keyboard-arrow-down');
        } else if (toggleIcon) {
          toggleIcon.setAttribute('icon', 'keyboard-arrow-right');
        }
        
        if (!this._isDropdownOpen) {
          const slot = this.shadowRoot?.querySelector('slot[name="dropdown-options"]') as HTMLSlotElement;
          const options = slot.assignedNodes().filter((node: Node) => node.nodeName.toLowerCase() === 'tf-dropdown-item');

          // Reset option visibility when dropdown is closed
          options.forEach(option => {
            (option as HTMLElement).style.display = 'block';
          });
        }
      }
    }
  }
}  

declare global {
  interface HTMLElementTagNameMap {
    'tf-dropdown': TfDropdown;
  }
}

customElements.define('tf-dropdown', TfDropdown);