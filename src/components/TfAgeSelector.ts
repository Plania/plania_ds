import { css, html, TfBase } from './TfBase.js';

const style = css`
   .slider-age-container {
      --tf-border-color: var(--tf-sys-light-outline);
      --tf-color-background: var(--tf-sys-light-primary-container);
      --tf-font-color: var(--tf-sys-light-on-primary);
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .slider-container{
    display: flex;
    width: 100%;
   }

   .input-container {
      display: flex;
      margin-left: 0.5rem;
   }

   label {
    color: var(--tf-font-color);
   }

   tf-simple-slider {
      margin: 0 0.5rem;
   }

   input[type='number']::-webkit-inner-spin-button,
   input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   input[type='number'],
   .icon-container {
      background-color: var(--tf-color-background);
      height: calc(2rem - 0.5rem);
      color: var(--tf-font-color);
   }

   input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
      width: calc(4rem - 0.5rem);
      border-right: none !important;
      border: 1px solid var(--tf-border-color);
      border-radius: 1.5rem 0 0 1.5rem;
   }

   .icon-container {
      width: 1rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid var(--tf-border-color);
      border-radius: 0 1.5rem 1.5rem 0;
      color: var(--tf-font-color);
   }

   input[type='number'] {
      padding: 0.25rem 0 0.25rem 0.5rem;
      font-size: 1rem;
   }

   input[type='number']:focus {
      outline: none;
      border-color: var(--tf-border-color);
   }

   .icon {
      width: 10px;
      height: 6px;
      padding: 0.25rem 0 0.25rem 2px;
   }

   .bar:after {
      content: '';
      display: block;
      border-top: 1px solid var(--tf-border-color);
   }
`;

const COLORS = {
  disabledBackground: 'var(--tf-sys-light-surface-variant)',
  disabledFont: 'var(--tf-sys-light-outline)',
  errorBackground: 'var(--tf-sys-light-error-container)',
  errorFont: 'var(--tf-sys-light-error)',
};

export class TfAgeSelector extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="slider-age-container">
               <label> Age </label>
               <div class="input-container">
                  <input type="number" />
                  <div class="icon-container">
                     <tf-icon icon="arrow-drop-up" class="icon" id="iconUp"></tf-icon>
                     <span class="bar"></span>
                     <tf-icon icon="arrow-drop-down" class="icon" id="iconDown"></tf-icon>
                  </div>
               </div>
               <div class="slider-container">
                  <tf-icon icon="child-friendly"></tf-icon>
                  <tf-simple-slider status="default"></tf-simple-slider>
                  <tf-icon icon="man"></tf-icon>
               </div>
            </section>
         `);
  }

  connectedCallback() {
    this.eventForNumberInput();
    this.inputRange.addEventListener(
      'input',
      () => (this.inputNumber.value = this.inputRange.value)
    );
    this.eventForArrowUp();
    this.eventForArrowDown();
    if (!this.slider) {
      const slider = this.shadowRoot?.querySelector('.slider-container') as HTMLElement;
      slider.style.display = 'none';
    }
  }

  static get observedAttributes() {
    return ['slider', 'status'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const upIconStyle = this.getStyleById('iconUp');
    const downIconStyle = this.getStyleById('iconDown');
    const sectionStyle = this.getSectionStyle();
    const sliderExists = this.hasSlider();

    if (sliderExists) {
      this.showSlider();
    }

    switch (name) {
    case 'status':
      if (_newValue === 'disabled') {
        this.disableInputNumber();
        this.setAttributeOnSlider('status', 'disabled');
        sectionStyle.setProperty('--tf-color-background', COLORS.disabledBackground);
        sectionStyle.setProperty('--tf-font-color', COLORS.disabledFont);
        upIconStyle.setProperty('pointer-events', 'none');
        downIconStyle.setProperty('pointer-events', 'none');
      } else if (_newValue === 'error') {
        this.setAttributeOnSlider('status', 'error');
        sectionStyle.setProperty('--tf-color-background', COLORS.errorBackground);
        sectionStyle.setProperty('--tf-font-color', COLORS.errorFont);
      }
      break;
    default:
      break;
    }
  }


  changeColorIcon = (remove: boolean) => {
    const icon = this.shadowRoot?.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
    icon.forEach((element) => {
      if (remove) {
        element.style.color = '';
      } else {
        element.style.color = this.status === 'error' ? 'var(--tf-font-color)' : 'var(--tf-sys-light-primary)';
      }
    });
  };

  checkInputValue = () => {
    if (parseInt(this.inputNumber.value) < parseInt(this.inputRange.min)) {
      this.inputNumber.value = this.inputRange.min;
    } else if (parseInt(this.inputNumber.value) > parseInt(this.inputRange.max)) {
      this.inputNumber.value = this.inputRange.max;
    }
  };

  eventForNumberInput = () => {

    this.inputNumber.value = this.inputRange.value;

    this.inputNumber.addEventListener('change', () => {
      this.inputRange.value = this.inputNumber.value;
      this.checkInputValue();
      this.eventListener(this.inputRange.value);
    });

    this.inputNumber.addEventListener('focus', () => {
      this.getSectionStyle().setProperty('--tf-border-color', this.status === 'error' ? 'var(--tf-font-color)' : 'var(--tf-sys-light-primary)');
      this.changeColorIcon(false);
    });

    this.inputNumber.addEventListener('blur', () => {
      this.getSectionStyle().setProperty('--tf-border-color', 'var(--tf-sys-light-outline)');
      this.changeColorIcon(true);
    });
  };

  eventForArrowUp = () => {
    const icon = this.shadowRoot?.querySelector('#iconUp') as HTMLElement;
    this.eventForArrow(icon, 1);
  };

  eventForArrowDown = () => {
    const icon = this.shadowRoot?.querySelector('#iconDown') as HTMLElement;
    this.eventForArrow(icon, -1);
  };
  
  eventForArrow = (icon: HTMLElement, value: number) => {
    icon.addEventListener('click', () => this.handleOnClicked(value));
    icon.addEventListener('mousedown', () => {
      this.status === 'error' ? icon.style.color = 'black' : icon.style.color = 'var(--tf-sys-light-primary)';
    });
    
    icon.addEventListener('mouseup', () => {
      icon.style.setProperty('color', 'var(--tf-font-color)');
      
      this.getSectionStyle().setProperty('--tf-border-color', 'var(--tf-sys-light-outline)');
    });
  };
  
  handleOnClicked = (value : number) => {
    this.inputNumber.value = (parseInt(this.inputNumber.value) + value).toString();
    this.inputRange.value = this.inputNumber.value;
    this.checkInputValue();
    this.eventListener(this.inputRange.value);
  };

  eventListener = (value: undefined | string) => {
    if (value) {
      this.inputRange.value = value;
    }
    this.inputRange.style.setProperty('--value', this.inputRange.value);
    this.inputRange.style.setProperty(
      '--min',
      this.inputRange.min == '' ? '0' : this.inputRange.min
    );
    this.inputRange.style.setProperty(
      '--max',
      this.inputRange.max == '' ? '100' : this.inputRange.max
    );
    this.inputRange.addEventListener('input', () =>
      this.inputRange.style.setProperty('--value', this.inputRange.value)
    );
  };

  private getStyleById(id: string): CSSStyleDeclaration{
    return this.shadowRoot?.getElementById(id)?.style as CSSStyleDeclaration;
  }
  
  private getSectionStyle(): CSSStyleDeclaration{
    return this.shadowRoot?.querySelector('section')?.style as CSSStyleDeclaration;
  }
  
  private hasSlider(): boolean {
    return !!this.shadowRoot?.querySelector('.slider-container');
  }
  
  private showSlider(): void {
    const slider = this.shadowRoot?.querySelector('.slider-container') as HTMLElement;
    slider.style.display = 'flex';
  }
  
  private disableInputNumber(): void {
    this.inputNumber.disabled = true;
  }
  
  private setAttributeOnSlider(name: string, value: string): void {
    this.shadowRoot?.querySelector('tf-simple-slider')?.setAttribute(name, value);
  }

  get inputNumber(): HTMLInputElement {
    return this.shadowRoot?.querySelector('input[type="number"]') as HTMLInputElement;
  }

  get inputRange(): HTMLInputElement {
    const tfSlider = this.shadowRoot?.querySelector(
      'tf-simple-slider'
    ) as unknown as HTMLInputElement;
    return tfSlider?.shadowRoot?.querySelector('input') as HTMLInputElement;
  }

  get slider(): boolean {
    return this.hasAttribute('slider');
  }

  set slider(value: boolean) {
    value && this.setAttribute('slider', '');
    !value && this.removeAttribute('slider');
  }

  get status(): string {
    return this.getAttribute('status') || 'default';
  }

  set status(value: string) {
    this.setAttribute('status', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-age-selector': TfAgeSelector;
   }
}

customElements.define('tf-age-selector', TfAgeSelector);
