import { css, html, TfBase } from './TfBase.js';

const style = css`
  * {
    --tf-thumb-color: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary-container);
    --tf-outline-color: var(--tf-sys-light-outline);
  }

  .default {
    --tf-thumb-color: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary-container);
    --tf-outline-color: var(--tf-sys-light-outline); 
  }

  .focus {
    --tf-thumb-color: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary);
    --tf-outline-color: var(--tf-sys-light-outline);
  }

  .disabled {
    --tf-thumb-color: var(--tf-sys-light-surface-variant);
    --tf-track-fill-color: var(--tf-sys-light-surface-variant);
    --tf-outline-color: var(--tf-sys-light-outline);
  }

  .error {
    --tf-thumb-color: var(--tf-sys-light-error-container);
    --tf-track-fill-color: var(--tf-sys-light-error-container);
    --tf-outline-color: var(--tf-sys-light-error);
  }

  tf-text-input {
    width: 100%;
  }

  .value-container input {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }

  .input-container {
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 24px;
    border: 1px solid var(--tf-read-only-light-outline-opacity-016, rgba(113, 120, 125, 0.16));
    background: var(--theme-sys-light-surface, #f9f9f8);
    width: 100%;
    margin-top: 30px;
    margin-left: -35px;
  }

  .value-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
  }

  .values {
    flex-direction: row;
    display: flex;
    gap: 0.625rem;
    margin-top: 50px;
  }

  .values span {
    display: flex;
    height: 24px;
    flex-direction: column;
    justify-content: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  .container {
    --min-value: 0%;
    --max-value: 100%;
    display: block;
    position: relative;
    width: 100%;
    height: 2.25rem;
  }

  .background {
    position: absolute;
    top: calc(50% - 0.5rem);
    left: 1.125rem;
    height: 1rem;
    width: calc(100% - 2.25rem);
    border-radius: 0.5rem;
    background: var(--tf-sys-light-surface-variant);
  }

  #thumb-min {
    position: absolute;
    left: calc(var(--min-value));
    z-index: 1;
  }

  #slider-track {
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    left: calc(var(--min-value) + 1.125rem);
    position: absolute;
    height: 1rem;
    top: calc(50% - 0.5rem);
    width: calc(var(--max-value) - var(--min-value) - 2.25rem);
  }

  #thumb-max {
    position: absolute;
    left: calc(var(--max-value) - 2.25rem);
    z-index: 1;
  }
`;

export class TfDoubleSlider extends TfBase {
  private _container: HTMLElement | null;
  private _inputMin: HTMLInputElement | null;
  private _inputMax: HTMLInputElement | null;
  private _sliderTrack: HTMLElement | null;
  private _thumbMin: HTMLElement | null;
  private _thumbMax: HTMLElement | null;
  private _focused: HTMLElement | null;
  private _mouseStarted = false;
  private _minGap = 0;
  private _sliderMaxValue = 10000;
  private _mouseX = 0;
  private _disabled = false;

  constructor() {
    super();

    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="wrapper">
          <div class="container">
            <div class="background"></div>
            <tf-slider-thumb id="thumb-min" variant="secondary" outline></tf-slider-thumb>
            <div id="slider-track"></div>
            <tf-slider-thumb id="thumb-max" variant="secondary" outline></tf-slider-thumb>
          </div>
          <div class="values">
            <tf-text-input
              icon="true"
              status="label"
              pictogramme="euro-symbol"
              label="Min"
              id="input-min"
            ></tf-text-input>
            <tf-text-input
              icon="true"
              status="label"
              pictogramme="euro-symbol"
              label="Max"
              id="input-max"
            ></tf-text-input>
          </div>
        </div>
      `);

    this._container = this.shadowRoot!.querySelector('.container') as HTMLElement;
    this._inputMin = this.shadowRoot!.querySelector('#input-min') as HTMLInputElement || null;
    this._inputMax = this.shadowRoot!.querySelector('#input-max') as HTMLInputElement;
  
    this._sliderTrack = this.shadowRoot!.querySelector('#slider-track') as HTMLElement;
  
    this._thumbMin = this.shadowRoot!.querySelector('#thumb-min') as HTMLElement;
    this._thumbMax = this.shadowRoot!.querySelector('#thumb-max') as HTMLElement;
    this._focused = null;
  }

  connectedCallback() {
    this.onmousedown = this._mouseDown.bind(this);
    this.onmousemove = this._mouseMove.bind(this);
    this.onmouseup = this._mouseUp.bind(this);
    if (this._thumbMin && this._thumbMax) {
      this._thumbMin.onmousedown = this._selectThumb.bind(this);
      this._thumbMax.onmousedown = this._selectThumb.bind(this);
    }

    this.displayValuesAndLabels(this.userInput);
  }

  static get observedAttributes() {
    return ['status', 'user-input', 'min', 'max', 'valueMin', 'valueMax'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === 'status') {
      if (this._thumbMin && this._thumbMax && this._sliderTrack) {
        // Remove all status classes
        this._thumbMin.classList.remove('default', 'focus', 'disabled', 'error');
        this._thumbMax.classList.remove('default', 'focus', 'disabled', 'error');
        this._sliderTrack.classList.remove('default', 'focus', 'disabled', 'error');
        // Enable slider
        this._disabled = false;
        switch (newValue) {
        case 'default':
          this._thumbMin.classList.add('default');
          this._thumbMax.classList.add('default');
          this._sliderTrack.classList.add('default');
          break;
        case 'focus':
          this._thumbMin.classList.add('focus');
          this._thumbMax.classList.add('focus');
          this._sliderTrack.classList.add('focus');
          break;
        case 'disabled':
          this._thumbMin.classList.add('disabled');
          this._thumbMax.classList.add('disabled');
          this._sliderTrack.classList.add('disabled');
          this._disabled = true;
          break;
        case 'error':
          this._thumbMin.classList.add('error');
          this._thumbMax.classList.add('error');
          this._sliderTrack.classList.add('error');
          break;
        }
      }
    }
  }

  /**
   * Select thumb
   * @param e Captured mouse event on thumb
   */
  private _selectThumb (e: MouseEvent): void {
    // `this` is the host element.
    this._focused && this._focused.removeAttribute('focus');
    this._focused = e.target as HTMLElement;
    this._focused.setAttribute('focus', '');
  }

  private _getMousePosition(mouseOffset: number, thumbWidth: number, clientWidth: number) {
    return Math.min(Math.max(mouseOffset - thumbWidth / 2, 0), clientWidth - thumbWidth);
  }

  /**
   * Mouse down on the host
   * @param e Captured mouse event on host
   */
  private _mouseDown (e: MouseEvent): void {
    // `this` is the host element.
    this._mouseStarted = true;
    this._mouseX = this._getMousePosition(e.offsetX, this._thumbMin!.clientWidth, this.clientWidth);
    this._compute();
  }

  /**
   * Mouse move on the host
   * @param e Captured mouse event on the host
   */
  private _mouseUp (): void {
    // `this` is the host element.
    this._focused && this._focused.removeAttribute('focus');
    this._mouseStarted = false;
  }

  /**
   * Mouse move on the host
   * @param e Captured mouse event on the host
   */
  private _mouseMove (e: MouseEvent): void {
    // `this` is the host element.
    if(!this._mouseStarted || !this._focused) return;

    this._mouseX = this._getMousePosition(e.offsetX, this._thumbMin!.clientWidth, this.clientWidth);
    this._compute();
  }

  private _compute() {
    if (!this._focused) return;

    const thumbWidth = this._focused.clientWidth;
    const totalSpan = this.clientWidth - thumbWidth;
    const totalValueSpan = +this.max - +this.min;
    const mouseOffset = this._mouseX - thumbWidth / 2;

    let percent = mouseOffset / totalSpan;
    percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;

    const value = +this.min + totalValueSpan * percent;

    this._focused.id === 'thumb-min' && (this.valueMin = '' + (value > +this.valueMax ? +this.valueMax : value));
    this._focused.id === 'thumb-max' && (this.valueMax = '' + (value < +this.valueMin ? +this.valueMin : value));

    this._updateSlider();
  }

  private _updateSlider() {
    if (this._container) {
      const percentMin = (+this.valueMin / this._sliderMaxValue) * 100;
      const percentMax = (+this.valueMax / this._sliderMaxValue) * 100;
      this._container.style.setProperty('--min-value', `${percentMin}%`);
      this._container.style.setProperty('--max-value', `${percentMax}%`);
    }
  }

  private _updateSliderValuesFromInputs() {
    if (this._thumbMin && this._thumbMax) {
      const valueMin = parseInt(this._inputMin!.value || '0');
      const valueMax = parseInt(this._inputMax!.value || '100');

      const clampedValueOne = Math.min(Math.max(valueMin, 0), this._sliderMaxValue);
      const clampedValueTwo = Math.min(Math.max(valueMax, 0), this._sliderMaxValue);

      if (clampedValueTwo - clampedValueOne <= this._minGap) {
        this._inputMin!.value = (clampedValueTwo - this._minGap).toString();
        this._inputMax!.value = (clampedValueOne + this._minGap).toString();
      }
      
      this.fillColor();
    }
  }

  private displayValuesAndLabels(show: boolean) {
    const valuesContainer = this.shadowRoot!.querySelector('.values') as HTMLElement;
    valuesContainer && (valuesContainer!.style.display = show ? 'flex' : 'none');
  }

  private fillColor() {
    if (this._thumbMin && this._thumbMax && this._inputMin && this._inputMax && this._sliderTrack) {
      const percent1 = (parseInt(this._inputMin.value) / this._sliderMaxValue) * 100;
      const percent2 = (parseInt(this._inputMax.value) / this._sliderMaxValue) * 100;
      const status = this.status;
      const thumbsInteracted =
        this._thumbMin.matches(':hover') ||
        this._thumbMin.matches(':active') ||
        this._thumbMax.matches(':hover') ||
        this._thumbMax.matches(':active');

      switch (status) {
      case 'default':
        if (thumbsInteracted) {
          this._sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary) ${percent1}%, var(--tf-sys-light-secondary) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
        } else {
          this._sliderTrack.style.background = `linear-gradient(to right,var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary-container) ${percent1}%, var(--tf-sys-light-secondary-container) ${percent2}%,var(--tf-sys-light-surface-variant)  ${percent2}%)`;
        }
        break;
      case 'focus':
        this._sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary) ${percent1}%, var(--tf-sys-light-secondary) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
        break;
      case 'disabled':
        this._sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant) ${percent1}%, var(--tf-sys-light-surface-variant) ${percent1}%, var(--tf-sys-light-surface-variant) ${percent2}%, var(--tf-sys-light-surface-variant) ${percent2}%)`;

        break;
      case 'error':
        this._sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-error-container) ${percent1}%, var(--tf-sys-light-error-container) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
        break;
      default:
        break;
      }
    }
  }

  get status() {
    return this.getAttribute('status') || 'default';
  }

  set status(value) {
    this.setAttribute('status', value);
  }
  get userInput() {
    return this.hasAttribute('user-input');
  }

  set userInput(value) {
    value && this.setAttribute('user-input', '');
  }

  get min() {
    return this.getAttribute('min') || '0';
  }

  set min(value) {
    this.setAttribute('min', value);
  }

  get max() {
    return this.getAttribute('max') || '10000';
  }

  set max(value) {
    this.setAttribute('max', value);
  }

  get valueMin() {
    return this.getAttribute('valueMin') || this.min;
  }

  set valueMin(value) {
    this.setAttribute('valueMin', '' + Math.max(+this.min, +value));
  }

  get valueMax() {
    return this.getAttribute('valueMax') || this.max;
  }

  set valueMax(value) {
    this.setAttribute('valueMax', '' + Math.min(+this.max, +value));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-double-slider': TfDoubleSlider;
  }
}

customElements.define('tf-double-slider', TfDoubleSlider);
