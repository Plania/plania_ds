import { css, html, TfBase } from './TfBase.js';

const style = css`
  * {
    --tf-thumb-color: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary-container);
    --tf-outline-color: var(--tf-sys-light-outline);
  }

  :host {
    width: 100%;
  }

  input[type='range'].styled-slider {
    -webkit-appearance: none;
    width: 100%;
  }

  /*webkit*/
  input[type='range'].styled-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
    background-size: cover;
    background-position: center;
  }

  input[type='range'].styled-slider::-webkit-slider-thumb::before {
    content: var(--value);
  }

  input[type='range'].styled-slider::-webkit-slider-runnable-track {
    height: 1rem;
    border: 1px solid var(--tf-outline-color);
    border-radius:1em;
    background: var(--tf-track-fill-color);
    box-shadow: none;

    background: linear-gradient(
      to right,
      var(--tf-sys-light-secondary) var(--color-stop),
      var(--tf-sys-light-surface-variant) var(--color-stop)
    );
  }

  input[type='range'].styled-slider[status='disabled']::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--tf-sys-light-surface-variant) var(--color-stop),
      var(--tf-sys-light-surface-variant) var(--color-stop)
    );
  }

  input[type='range'].styled-slider[status='error']::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--tf-sys-light-error-container) var(--color-stop),
      var(--tf-sys-light-surface-variant) var(--color-stop)
    );
    
  }

  input[type='range'].styled-slider[status='focus']::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--tf-sys-light-secondary) var(--color-stop),
      var(--tf-sys-light-surface-variant) var(--color-stop)
    );
  }
  input[type='range'].styled-slider[status='default']::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--tf-sys-light-secondary-container) var(--color-stop),
      var(--tf-sys-light-surface-variant) var(--color-stop)
    );
  }
  input[type='range'].styled-slider[status='disabled']::-webkit-slider-thumb {
    background: var(--tf-sys-light-surface-variant);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%2371787D'/></svg>");
    background-size: cover;
    background-position: center;
    pointer-events: none;
  }

  input[type='range'].styled-slider[status='error']::-webkit-slider-thumb {
    background: var(--tf-sys-light-error-container);
    border: 1px solid var(--tf-sys-light-error);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
    background-size: cover;
    background-position: center;
  }
  /* For Mozilla Firefox */
input[type='range'].styled-slider::-moz-range-thumb {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--tf-thumb-color);
  border: 1px solid var(--tf-outline-color);
  box-shadow: none;
  margin-top: -15px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
  background-size: cover;
  background-position: center;
}

input[type='range'].styled-slider::-moz-range-thumb::before {
  content: var(--value);
}


input[type='range'].styled-slider::-moz-range-track {
  height: 1rem;
  border: 1px solid var(--tf-outline-color);
  border-radius: 1em;
  background: var(--tf-track-fill-color);
  box-shadow: none;
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}

input[type='range'].styled-slider[status='disabled']::-moz-range-track {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-surface-variant) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='error']::-moz-range-track {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-error-container) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='focus']::-moz-range-track {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='default']::-moz-range-track{
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary-container) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='disabled']::-moz-range-thumb {
  background: var(--tf-sys-light-surface-variant);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%2371787D'/></svg>");
  background-size: cover;
  background-position: center;
  pointer-events: none;
}


input[type='range'].styled-slider[status='error']::-moz-range-thumb {
  background: var(--tf-sys-light-error-container);
  border: 1px solid var(--tf-sys-light-error);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
  background-size: cover;
  background-position: center;
}


/* For Microsoft Edge */
input[type='range'].styled-slider::-ms-thumb {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--tf-thumb-color);
  border: 1px solid var(--tf-outline-color);
  box-shadow: none;
  margin-top: -15px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
  background-size: cover;
  background-position: center;
}


input[type='range'].styled-slider::-ms-fill-lower {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='disabled']::-ms-fill-lower {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-surface-variant) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='error']::-ms-fill-lower {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-error-container) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='focus']::-ms-fill-lower {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='default']::-ms-fill-lower {
  background: linear-gradient(
    to right,
    var(--tf-sys-light-secondary-container) var(--color-stop),
    var(--tf-sys-light-surface-variant) var(--color-stop)
  );
}


input[type='range'].styled-slider[status='disabled']::-ms-thumb {
  background: var(--tf-sys-light-surface-variant);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%2371787D'/></svg>");
  background-size: cover;
  background-position: center;
  pointer-events: none;
}


input[type='range'].styled-slider[status='error']::-ms-thumb {
  background: var(--tf-sys-light-error-container);
  border: 1px solid var(--tf-sys-light-error);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
  background-size: cover;
  background-position: center;
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
    position: relative; /* Add this */
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
            <input
              type="range"
              min="0"
              max="100"
              value="18"
              class="styled-slider slider-progress"
              id="myRange"
              
            />

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
    const range = this.shadowRoot?.querySelector('.styled-slider') as HTMLInputElement;
    const updateGradient = () => {
      const rangeValue = parseInt(range.value);
      const rangeMin = parseInt(range.min);
      const rangeMax = parseInt(range.max);
      const percentage = ((rangeValue - rangeMin) / (rangeMax - rangeMin)) * 100;
      range.style.setProperty('--color-stop', `${percentage}%`);
    };

    updateGradient();

    range.addEventListener('input', updateGradient);
    this.eventForNumberInput();
    this.inputRange.addEventListener('input', () => {
      this.inputNumber.value = this.inputRange.value;
      this.value = this.inputRange.value;
      this.dispatchEvent(new CustomEvent('input', { detail: this.inputRange.value }));
    });
    this.inputNumber.addEventListener('input', () => {
      this.inputRange.value = this.inputNumber.value;
      this.value = this.inputNumber.value;
      this.dispatchEvent(new CustomEvent('input', { detail: this.inputRange.value }));
    });
    this.eventForArrowUp();
    this.eventForArrowDown();

    if (!this.slider) {
      const slider = this.shadowRoot?.querySelector('.slider-container') as HTMLElement;
      slider.style.display = 'none';
    }
  }

  static get observedAttributes() {
    return ['slider', 'status', 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const sectionStyle = this.getSectionStyle();
    const upIconStyle = this.getStyleById('iconUp');
    const downIconStyle = this.getStyleById('iconDown');
    const host = this.shadowRoot?.querySelector(
      'input[type="range"].slider-progress'
    ) as HTMLInputElement;
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
          host.disabled = true;
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
        element.style.color =
          this.status === 'error' ? 'var(--tf-font-color)' : 'var(--tf-sys-light-primary)';
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
    this.value = this.inputRange.value;

    this.inputNumber.addEventListener('change', () => {
      this.inputRange.value = this.inputNumber.value;
      this.value = this.inputNumber.value;
      this.checkInputValue();
      this.eventListener(this.inputRange.value);
      this.dispatchEvent(new CustomEvent('change', { detail: this.inputRange.value }));
    });

    this.inputNumber.addEventListener('focus', () => {
      this.getSectionStyle().setProperty(
        '--tf-border-color',
        this.status === 'error' ? 'var(--tf-font-color)' : 'var(--tf-sys-light-primary)'
      );
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
      this.status === 'error'
        ? (icon.style.color = 'black')
        : (icon.style.color = 'var(--tf-sys-light-primary)');
    });

    icon.addEventListener('mouseup', () => {
      icon.style.setProperty('color', 'var(--tf-font-color)');

      this.getSectionStyle().setProperty('--tf-border-color', 'var(--tf-sys-light-outline)');
    });
  };

  handleOnClicked = (value: number) => {
    this.inputNumber.value = (parseInt(this.inputNumber.value) + value).toString();
    this.inputRange.value = this.inputNumber.value;
    this.value = this.inputNumber.value;
    this.dispatchEvent(new CustomEvent('click', { detail: this.inputRange.value }));
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

  private getStyleById(id: string): CSSStyleDeclaration {
    return this.shadowRoot?.getElementById(id)?.style as CSSStyleDeclaration;
  }

  private getSectionStyle(): CSSStyleDeclaration {
    return this.shadowRoot?.querySelector('section')?.style as CSSStyleDeclaration;
  }

  private disableInputNumber(): void {
    this.inputNumber.disabled = true;
  }

  private setAttributeOnSlider(name: string, value: string): void {
    const inputRange = this.shadowRoot?.querySelector('input[type="range"]') as HTMLInputElement;
    if (inputRange) {
      inputRange.setAttribute(name, value);
    }
  }

  get inputNumber(): HTMLInputElement {
    return this.shadowRoot?.querySelector('input[type="number"]') as HTMLInputElement;
  }

  get inputRange(): HTMLInputElement {
    return this.shadowRoot?.querySelector('input[type="range"]') as HTMLInputElement;
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

  get value(): string {
    return this.getAttribute('value') || '';
  }

  set value(value: string) {
    this.setAttribute('value', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-age-selector': TfAgeSelector;
  }
}

customElements.define('tf-age-selector', TfAgeSelector);
