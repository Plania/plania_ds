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

  /*progress support*/
  input[type='range'].styled-slider.slider-progress {
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 50px + var(--ratio) * (100% - 50px));
  }

  input[type='range'].styled-slider:focus {
    outline: none;
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
  }

  input[type='range'].styled-slider::-webkit-slider-thumb::before {
    content: var(--value);
  }

  input[type='range'].styled-slider::-webkit-slider-runnable-track {
    height: 1rem;
    border: 1px solid var(--tf-outline-color);
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    box-shadow: none;
  }

  input[type='range'].styled-slider::-webkit-slider-thumb:hover {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider::-webkit-slider-thumb:active {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-track-fill-color), var(--tf-track-fill-color)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-thumb-color), var(--tf-thumb-color)) 0 / var(--sx) 100%
        no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].styled-slider.slider-progress:active::-webkit-slider-runnable-track {
    background: linear-gradient(var(--tf-thumb-color), var(--tf-thumb-color)) 0 / var(--sx) 100%
        no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  /*mozilla*/
  input[type='range'].styled-slider::-moz-range-thumb {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
  }

  input[type='range'].styled-slider::-moz-range-track {
    height: max(calc(1rem - 1px - 1px), 0px);
    border: 1px solid var(--tf-sys-light-surface-variant);
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    box-shadow: none;
  }

  input[type='range'].styled-slider::-moz-range-thumb:hover {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider::-moz-range-thumb:active {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider.slider-progress::-moz-range-track {
    background: linear-gradient(var(--tf-track-fill-color), var(--tf-track-fill-color)) 0 /
        var(--sx) 100% no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].styled-slider.slider-progress:hover::-moz-range-track {
    background: linear-gradient(var(--tf-thumb-color), var(--tf-thumb-color)) 0 / var(--sx) 100%
        no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  input[type='range'].styled-slider.slider-progress:active::-moz-range-track {
    background: linear-gradient(var(--tf-thumb-color), var(--tf-thumb-color)) 0 / var(--sx) 100%
        no-repeat,
      var(--tf-sys-light-surface-variant);
  }

  /*ms*/
  input[type='range'].styled-slider::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-thumb {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -15px;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider::-ms-track {
    height: 1rem;
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    border: 1px solid var(--tf-sys-light-surface-variant);
    box-shadow: none;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider::-ms-thumb:hover {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider::-ms-thumb:active {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
    height: max(calc(1rem - 1px - 1px), 0px);
    border-radius: 0.5em 0 0 0.5em;
    margin: -1px 0 -1px -1px;
    background: var(--tf-track-fill-color);
    border: 1px solid var(--tf-sys-light-surface-variant);
    border-right-width: 0;
  }

  input[type='range'].styled-slider.slider-progress:hover::-ms-fill-lower {
    background: var(--tf-thumb-color);
  }

  input[type='range'].styled-slider.slider-progress:active::-ms-fill-lower {
    background: var(--tf-thumb-color);
  }

  .slider-container {
    position: relative;
  }

  .slider-value {
    position: absolute;
    top: 20%;
    transform: translate(26px, calc(0.75rem - 1px));
    pointer-events: none;
    width: calc(100% - 3rem);
  }

  .slider-value-text {
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .slider-text {
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px; /* 145.455% */
    letter-spacing: 0.5px;
    margin-top: -7px;
  }

  :root {
    --svg-color: #f9f9f8; /* Initial color of the SVG icon */
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
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="styled-slider slider-progress"
            id="myRange"
          />
          <div class="slider-value">
            <div class="slider-value-text">
              <span class="slider-text">18</span>
              <div class="svg-container">
                <svg
                  class="slider-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.99967 13.3334V2.66671H8.66634V13.3334H9.99967ZM12.6663
                  13.3334V2.66671H11.333V13.3334H12.6663ZM7.33301 13.3334L7.33301
                  2.66671H5.99967V13.3334H7.33301ZM3.33301 13.3334H4.66634L4.66634
                  2.66671H3.33301L3.33301 13.3334Z" fill="var(--svg-color)""/>
                </svg>
              </div>
            </div>
          </div>
        </section>
      `);
  }
  static get observedAttributes() {
    return ['status', 'text', 'hasLabel'];
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector(
      'input[type="range"].slider-progress'
    ) as HTMLInputElement;

    if (input) {
      this.displayRangeValue(input.value);
      input.addEventListener('input', () => this.displayRangeValue(input.value), false);
      this.eventListener(input);
      this.displayRangeValue(input.value); // Update the display after adding the event listener
    }

    // handle initial attribute value
    if (this.text !== null) {
      this.displayRangeValue(input.value);
    }
  }

  eventListener = (input: HTMLInputElement) => {
    input.style.setProperty('--value', input.value);
    input.style.setProperty('--min', input.min == '' ? '0' : input.min);
    input.style.setProperty('--max', input.max == '' ? '100' : input.max);
    input.addEventListener('input', () => input.style.setProperty('--value', input.value));
  };
  displayRangeValue(value: string) {
    const valueDiv = this.shadowRoot?.querySelector('.slider-value-text') as HTMLElement;
    const valueSpan = valueDiv.querySelector('span') as HTMLElement;
    const svgElement = valueDiv.querySelector('.slider-svg') as HTMLElement;

    if (this.text) {
      if (valueDiv) {
        valueDiv.style.left = `calc(${value}%)`;
        if (valueSpan) {
          valueSpan.style.display = 'block';
          valueSpan.innerHTML = value;
        }
        if (svgElement) {
          svgElement.style.display = 'none'; // Hide the SVG when text is true
        }
      }
    } else {
      if (valueDiv) {
        valueDiv.style.left = `calc(${value}%)`;
        if (valueSpan) {
          valueSpan.style.display = 'none';
        }
        if (svgElement) {
          svgElement.style.display = 'flex'; // Always display the SVG
        }
      }
    }
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    if (name === 'status') {
      const host = this.shadowRoot?.querySelector(
        'input[type="range"].slider-progress'
      ) as HTMLInputElement;
      if (host) {
        switch (_newValue) {
          case 'default':
            host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-secondary)');
            break;
          case 'focus':
            host.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-secondary)');
            break;
          case 'disabled':
            host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-surface-variant');
            host.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-surface-variant');
            host.disabled = true;

            break;
          case 'error':
            host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-error-container)');
            host.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-error-container)');
            host.style.setProperty('--tf-outline-color', 'var(--tf-sys-light-error)');
            break;
        }
        if (_newValue === 'disabled') {
          this.style.setProperty(
            '--svg-color',
            '#000'
          ); /* Change SVG icon color to black when disabled */
        } else {
          this.style.setProperty(
            '--svg-color',
            '#F9F9F8'
          ); /* Reset SVG icon color when not disabled */
        }
      }
    }

    if (name === 'text') {
      const input = this.shadowRoot?.querySelector(
        'input[type="range"].slider-progress'
      ) as HTMLInputElement;
      if (input) {
        this.displayRangeValue(input.value);
      }
    }

    if (!this.text) {
      const div = this.shadowRoot?.querySelector('.slider-value-text') as HTMLElement;
      if (div) {
        div.style.display = '.slider-svg';
      }
    }
  }

  get status() {
    return this.getAttribute('status') || 'default';
  }

  set status(value) {
    this.setAttribute('status', value);
  }

  get text() {
    return this.hasAttribute('text') && this.getAttribute('text') === 'true';
  }

  set text(value) {
    if (value) {
      this.setAttribute('text', 'true');
    } else {
      this.setAttribute('text', 'false');
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-simple-slider': TfSimpleSlider;
  }
}

customElements.define('tf-simple-slider', TfSimpleSlider);
