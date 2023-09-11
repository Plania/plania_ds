import { css, html, TfBase } from './TfBase.js';
import { TfSimpleSlider } from './TfSimpleSlider.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    width: 100%;
    --color: var(--tf-sys-light-onprimary);
    --input-icon-color: var(--tf-sys-light-secondary);
    --range-icon-color: var(--tf-sys-light-onprimary);
  }

  :host(:focus) {
    --color: var(--tf-sys-light-secondary);
  }

  .error {
    --color: var(--tf-sys-light-error);
    --input-icon-color: var(--tf-sys-light-error);
    --range-icon-color: var(--tf-sys-light-error);
  }

  .disabled {
    --color: var(--tf-sys-light-outline);
    --input-icon-color: var(--tf-sys-light-outline);
    --range-icon-color: var(--tf-sys-light-outline);
  }

  .container {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    color: var(--color);
  }

  .input-container {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
  }

  .input-container tf-icon {
    color: var(--input-icon-color);
  }

  input[type='number'] {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    width: calc(3ch);

    text-align: center;
    align-self: center;

    font-family: Nunito;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color);
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .slider-container {
    display: none;
  }

  .slider-container tf-icon {
    font-size: 1.25rem;
    color: var(--range-icon-color);
  }

  .slider-container.slider {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 0.25rem;
  }

  .error-container {
    display: none;
    color: var(--color);
    font-style: italic;
  }

  .error-container.error {
    display: block;
  }
`);

export class TfAgeSelector extends TfBase {
  constructor() {
    super();
    this.shadowRoot?.adoptedStyleSheets.push(style);
  }

  connectedCallback() {
    this.render();
    this._eventForInputNumber();
    this._eventForInputRange();
    this._eventForArrowUp();
    this._eventForArrowDown();
    this._onMouseUp();
  }

  static get observedAttributes() {
    return ['slider', 'status', 'min', 'max', 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    //this.render();
  }

  render() {
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <section>
          <div class="container ${this.status}">
            <span class="label">
              <slot name="label">Age</slot>
            </span>
            <div class="input-container">
              <tf-icon id="iconDown" icon="remove-circle-outline"></tf-icon>
              <input type="number" value="${this.value}" id="ageInput" />
              <tf-icon id="iconUp" icon="add-circle-outline"></tf-icon>
            </div>

            <div class="slider-container ${this.slider ? 'slider' : ''}">
              <slot name="min-icon"><tf-icon icon="child-friendly"></tf-icon></slot>
              <tf-simple-slider
                min="${this.min}"
                max="${this.max}"
                value="${this.value}"
                status="${this.status}"
              ></tf-simple-slider>
              <slot name="max-icon"><tf-icon icon="man"></tf-icon></slot>
            </div>
          </div>
          <div class="error-container ${this.status}">
            <slot name="error"></slot>
          </div>
        </section>
      `);
  }

  private _checkInputValue(value: string) {
    return +value < +this.min ? this.min : +value > +this.max ? this.max : value;
  }

  private _handleOnClicked(value: number) {
    this.value = this._checkInputValue('' + (+this.value + value));
    this.dispatchEvent(new Event('focus'));
    this.dispatchEvent(new CustomEvent('tf-input', { detail: this.value }));
  }

  private _handleInputEvent = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.value = input.value = this._checkInputValue(input.value);
    this.dispatchEvent(new CustomEvent('tf-input', { detail: this.value }));
  };

  private _eventForInputRange = () => {
    this._inputRange.addEventListener('tf-input', this._handleInputEvent);
  };

  private _eventForInputNumber = () => {
    this._inputNumber.addEventListener('input', this._handleInputEvent);
  };

  private _eventForArrowUp = () => {
    this._eventForArrow(this._iconUp, 1);
  };

  private _eventForArrowDown = () => {
    this._eventForArrow(this._iconDown, -1);
  };

  private _eventForArrow = (icon: HTMLElement, value: number) => {
    icon.addEventListener('click', () => this._handleOnClicked(value));
  };
  private _onMouseUp = () => {
    this.addEventListener('mouseup', () => {
      this.dispatchEvent(new CustomEvent('tf-change', { detail: this.value }));
    });
  };

  private _setInputNumber = () => {
    this._inputNumber.setAttribute('value', this.value);
    this._inputNumber.value = this.value;
  };

  private _setInputRange = () => {
    this._inputRange.value = this.value;
    this._inputRange.min = this.min;
    this._inputRange.max = this.max;
  };

  private get _inputNumber(): HTMLInputElement {
    return this.shadowRoot?.querySelector('input[type="number"]') as HTMLInputElement;
  }

  private get _inputRange(): TfSimpleSlider {
    return this.shadowRoot?.querySelector('tf-simple-slider') as TfSimpleSlider;
  }

  private get _iconUp(): HTMLElement {
    return this.shadowRoot?.querySelector('#iconUp') as HTMLElement;
  }

  private get _iconDown(): HTMLElement {
    return this.shadowRoot?.querySelector('#iconDown') as HTMLElement;
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

  get min(): string {
    return this.getAttribute('min') || '0';
  }

  set min(value: string) {
    this.setAttribute('min', value);
    this._setInputRange();
  }

  get max(): string {
    return this.getAttribute('max') || '100';
  }

  set max(value: string) {
    this.setAttribute('max', value);
    this._setInputRange();
  }

  get value(): string {
    return this.getAttribute('value') || '0';
  }

  set value(value: string) {
    this.setAttribute('value', value);
    this._setInputNumber();
    this._setInputRange();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-age-selector': TfAgeSelector;
  }
}

customElements.define('tf-age-selector', TfAgeSelector);
