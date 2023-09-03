import { css, html, TfBase } from './TfBase.js';

const style = css`
  :host {
    width: 100%;
  }

  .slider-container {
    --tf-thumb-color: var(--tf-sys-light-onprimary);
    --tf-thumb-background: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary-container);
    --tf-outline-color: var(--tf-sys-light-outline);
    position: relative;
    color: var(--tf-thumb-color);
  }

  .focus {
    --tf-thumb-color: var(--tf-sys-light-onprimary);
    --tf-track-fill-color: var(--tf-sys-light-secondary);
  }

  .error {
    --tf-thumb-background: var(--tf-sys-light-error-container);
    --tf-track-fill-color: var(--tf-sys-light-error-container);
    --tf-outline-color: var(--tf-sys-light-error);
  }

  .disabled {
    --tf-thumb-color: var(--tf-sys-light-outline);
    --tf-thumb-background: var(--tf-sys-light-surface-variant);
    --tf-track-fill-color: var(--tf-sys-light-surface-variant);
  }

  .slider-value {
    position: absolute;
    transform: translate(26px, calc(-0.25rem - 1px));
    pointer-events: none;
    width: calc(100% - 3rem);
  }

  .slider-value-text {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -70%);
    align-items: center;
    font-size: 1em;
  }

  .slider-text {
    text-align: center;
    font-family: Nunito;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-top: 3px;
  }

  tf-icon {
    display: none;
    font-size: 1.5em;
  }

  tf-icon.show {
    display: inline-block;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
  }

  /*progress support*/
  input[type='range'].slider-progress {
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 50px + var(--ratio) * (100% - 50px));
  }

  input[type='range']:focus {
    outline: none;
  }

  /*webkit*/
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-background);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
  }

  input[type='range']::-webkit-slider-thumb::before {
    content: var(--value);
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 1rem;
    border: 1px solid var(--tf-outline-color);
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    box-shadow: none;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    background: var(--tf-thumb-background);
  }

  input[type='range']::-webkit-slider-thumb:active {
    background: var(--tf-thumb-background);
  }

  input[type='range'].slider-progress::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-track-fill-color), var(--tf-track-fill-color)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].slider-progress:hover::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-thumb-background), var(--tf-thumb-background)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].slider-progress:active::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-thumb-background), var(--tf-thumb-background)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  /*mozilla*/
  input[type='range']::-moz-range-thumb {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-background);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
  }

  input[type='range']::-moz-range-track {
    height: max(calc(1rem - 1px - 1px), 0px);
    border: 1px solid var(--tf-sys-light-surface-variant);
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    box-shadow: none;
  }

  input[type='range']::-moz-range-thumb:hover {
    background: var(--tf-thumb-background);
  }

  input[type='range']::-moz-range-thumb:active {
    background: var(--tf-thumb-background);
  }

  input[type='range'].slider-progress::-moz-range-track {
    background: linear-gradient(var(--tf-track-fill-color), var(--tf-track-fill-color)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].slider-progress:hover::-moz-range-track {
    background: linear-gradient(var(--tf-thumb-background), var(--tf-thumb-background)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].slider-progress:active::-moz-range-track {
    background: linear-gradient(var(--tf-thumb-background), var(--tf-thumb-background)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  /*ms*/
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  input[type='range']::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }

  input[type='range']::-ms-thumb {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-background);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
    box-sizing: border-box;
  }

  input[type='range']::-ms-track {
    height: 1rem;
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    border: 1px solid var(--tf-sys-light-surface-variant);
    box-shadow: none;
    box-sizing: border-box;
  }

  input[type='range']::-ms-thumb:hover {
    background: var(--tf-thumb-background);
  }

  input[type='range']::-ms-thumb:active {
    background: var(--tf-thumb-background);
  }

  input[type='range'].slider-progress::-ms-fill-lower {
    height: max(calc(1rem - 1px - 1px), 0px);
    border-radius: 0.5em 0 0 0.5em;
    margin: -1px 0 -1px -1px;
    background: var(--tf-track-fill-color);
    border: 1px solid var(--tf-sys-light-surface-variant);
    border-right-width: 0;
  }

  input[type='range'].slider-progress:hover::-ms-fill-lower {
    background: var(--tf-thumb-background);
  }

  input[type='range'].slider-progress:active::-ms-fill-lower {
    background: var(--tf-thumb-background);
  }
`;

export class TfSimpleSlider extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <section class="slider-container">
          <input type="range" min="0" max="100" value="50" class="slider-progress" id="myRange" />
          <div class="slider-value">
            <div class="slider-value-text">
              <span class="slider-text">18</span>
              <tf-icon icon="view-headline"></tf-icon>
            </div>
          </div>
        </section>
      `);
  }

  static get observedAttributes() {
    return ['value', 'min', 'max', 'status', 'text'];
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector(
      'input[type="range"].slider-progress'
    ) as HTMLInputElement;

    if (input) {
      this.eventListener(input);
      // input.addEventListener('input', () => this.displayRangeValue(input.value));
      input.addEventListener('input', () => this.eventListener(input));
    }
  }

  eventListener = (input: HTMLInputElement) => {
    this.value = input.value;
    this.displayRangeValue();
    input.style.setProperty('--value', input.value);
    input.style.setProperty('--min', input.min == '' ? '0' : input.min);
    input.style.setProperty('--max', input.max == '' ? '100' : input.max);
    this.dispatchEvent(new CustomEvent('tf-input', { detail: this.value }));
  };

  displayRangeValue() {
    const valueDiv = this.shadowRoot?.querySelector('.slider-value-text') as HTMLElement;
    const valueSpan = valueDiv.querySelector('span') as HTMLElement;
    const iconElement = valueDiv.querySelector('tf-icon') as TfIcon;

    if (this.text) {
      if (valueDiv) {
        valueDiv.style.left = `calc(${this.value}%)`;
        if (valueSpan) {
          valueSpan.style.display = 'inline-block';
          valueSpan.innerHTML = this.value;
        }
        if (iconElement) {
          iconElement.classList.remove('show');
        }
      }
    } else {
      if (valueDiv) {
        valueDiv.style.left = `calc(${this.value}%)`;
        if (valueSpan) {
          valueSpan.style.display = 'none';
        }
        if (iconElement) {
          iconElement.classList.add('show');
        }
      }
    }
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const container = this.shadowRoot?.querySelector('.slider-container') as HTMLElement;
    const input = this.shadowRoot?.querySelector(
      'input[type="range"].slider-progress'
    ) as HTMLInputElement;

    if (name === 'value') {
      if (input) {
        input.value = _newValue;
        this.displayRangeValue();
      }
    } else if (name === 'min') {
      if (input) {
        input.min = _newValue;
      }
    } else if (name === 'max') {
      if (input) {
        input.max = _newValue;
      }
    } else if (name === 'status') {
      container.classList.remove(_oldValue);
      container.classList.add(_newValue);
    }
  }

  get status() {
    return this.getAttribute('status') || 'default';
  }

  set status(value) {
    this.setAttribute('status', value);
  }

  get text() {
    return this.hasAttribute('text');
  }

  set text(value) {
    if (value) {
      this.setAttribute('text', '');
    } else {
      this.removeAttribute('text');
    }
  }

  get value() {
    return this.getAttribute('value') || '50';
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get min() {
    return this.getAttribute('min') || '0';
  }

  set min(value) {
    this.setAttribute('min', value);
  }

  get max() {
    return this.getAttribute('max') || '100';
  }

  set max(value) {
    this.setAttribute('max', value);
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-simple-slider': TfSimpleSlider;
  }
}

customElements.define('tf-simple-slider', TfSimpleSlider);
