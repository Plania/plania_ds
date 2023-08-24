import { css, html, TfBase } from './TfBase.js';

const style = css`
   .slider-age-container {
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
   input[type='number'] {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;

    color: var(--tf-sys-light-on-primary, var(--theme-sys-light-on-primary, #250127));
    text-align: center;

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .slider-container {
    display: flex;
    width: 100%;
  }

  .input-container {
    display: flex;
  }

  label {
    color: var(--tf-font-color);
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

    border-right: none !important;

    border-radius: 1.5rem 0 0 1.5rem;
  }

  input[type='number'] {
    font-size: 1rem;
  }

  input[type='number']:focus {
    outline: none;
    border-color: var(--tf-border-color);
  }

  .bar:after {
    content: '';
    display: block;
    border-top: 1px solid var(--tf-border-color);
  }

  .slider-age-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: relative; 
  }
  .icon-container {
    display: flex;
    align-items: center;
  }
`;

const COLORS = {
  disabledFont: 'var(--tf-sys-light-outline)',
  errorFont: 'var(--tf-sys-light-error)',
  focusedFont: 'var(--tf-sys-light-secondary)',
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
               <svg
                 class="minus"
                 id="iconDown"
                 xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="var(--icon-fill-color, #FF805E)"
               >
                 <path
                   d="M5 9V11H15V9H5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                 />
               </svg>
               <div class="input-wrapper">
                 <input type="number" value="18" id="ageInput" />
               </div>
               <svg
                 class="plus"
                 id="iconUp"
                 xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="var(--icon-fill-color, #FF805E)"
               >
                 <path
                   d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                 />
               </svg>
             </div>
   
   
               <div class="slider-container">
                  <tf-icon icon="child-friendly"></tf-icon>
                  <tf-simple-slider status="default"></tf-simple-slider>
                  <tf-icon icon="man"></tf-icon>
               </div>
            </section>
         `);
         const ageInput = this.shadowRoot?.querySelector('#ageInput') as HTMLInputElement;
         ageInput.style.width = ageInput.value.length + 1 + 'ch';
     
         ageInput.addEventListener('input', () => {
           ageInput.style.width = ageInput.value.length + 1 + 'ch';
         });
     
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

    if (name === 'status') {
      switch (_newValue) {
      case 'disabled':
        this.disableInputNumber();
        this.setAttributeOnSlider('status', 'disabled');
        sectionStyle.setProperty('--tf-font-color', COLORS.disabledFont);
        upIconStyle.setProperty('--icon-fill-color', COLORS.disabledFont);
        downIconStyle.setProperty('--icon-fill-color', COLORS.disabledFont);
        upIconStyle.setProperty('pointer-events', 'none');
        downIconStyle.setProperty('pointer-events', 'none');
        break;
      case 'error':
        this.setAttributeOnSlider('status', 'error');
        sectionStyle.setProperty('--tf-font-color', COLORS.errorFont);
        upIconStyle.setProperty('--icon-fill-color', COLORS.errorFont);
        downIconStyle.setProperty('--icon-fill-color', COLORS.errorFont);
        break;
      case 'focus':
        this.setAttributeOnSlider('status', 'focus');
        sectionStyle.setProperty('--tf-font-color', COLORS.focusedFont);
        upIconStyle.setProperty('--icon-fill-color', COLORS.focusedFont);
        downIconStyle.setProperty('--icon-fill-color', COLORS.focusedFont);
        break;
      case 'default':
        this.setAttributeOnSlider('status', 'default');
        upIconStyle.setProperty('--icon-fill-color', '#FF805E');
        downIconStyle.setProperty('--icon-fill-color', '#FF805E');

        break;
      }
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

