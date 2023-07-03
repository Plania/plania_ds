import { css, html, TfBase } from './TfBase.js';

const style = css`
   * {
      --tf-thumb-color: var(--tf-sys-light-primary);
      --tf-track-fill-color: var(--tf-sys-light-primary-container);
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
      width: 50px;
      height: 1.5rem;
      border-radius: 105px;
      background: var(--tf-thumb-color);
      border: 1px solid var(--tf-outline-color);
      box-shadow: none;
      margin-top: calc(max((1rem - 1px - 1px) * 0.5, 0px) - max(1.5rem * 0.5, 1px));
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
      width: max(calc(50px - 1px - 1px), 0px);
      height: max(calc(1.5rem - 1px - 1px), 0px);
      border-radius: 105px;
      background: var(--tf-thumb-color);
      border: 1px solid var(--tf-outline-color);
      box-shadow: none;
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
      width: 50px;
      height: 1.5rem;
      border-radius: 105px;
      background: var(--tf-thumb-color);
      border: 1px solid var(--tf-outline-color);
      box-shadow: none;
      margin-top: 0;
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
      top: 0%;
      transform: translate(26px, calc(0.75rem - 1px));
      pointer-events: none;
      width: calc(100% - 3rem);
   }

   .slider-value-text {
      position: absolute;
      transform: translate(-50%, -50%);
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
                  <span class="slider-value-text">18</span>
               </div>
            </section>
         `);
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector(
      'input[type="range"].slider-progress'
    ) as HTMLInputElement;

    if (input) {
      this.displayRangeValue(input.value);
      input.addEventListener('input', () => this.displayRangeValue(input.value), false);
      this.eventListener(input);
    }
  }

  eventListener = (input: HTMLInputElement) => {
    input.style.setProperty('--value', input.value);
    input.style.setProperty('--min', input.min == '' ? '0' : input.min);
    input.style.setProperty('--max', input.max == '' ? '100' : input.max);
    input.addEventListener('input', () => input.style.setProperty('--value', input.value));
  };

  displayRangeValue(value: string) {
    const div = this.shadowRoot?.querySelector('.slider-value-text') as HTMLElement;
    if (div) {
      div.style.left = `calc((${value}%)`;
      div.innerHTML = value;
    }
  }

  static get observedAttributes() {
    return ['status', 'text'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    if (name === 'status') {
      const host = this.shadowRoot?.querySelector(
        'input[type="range"].slider-progress'
      ) as HTMLInputElement;
      if (host) {
        switch (_newValue) {
        case 'default':
          host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-primary)');
          break;
        case 'disabled':
          host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-surface-variant');
          host.style.setProperty(
            '--tf-track-fill-color',
            'var(--tf-sys-light-surface-variant'
          );
          host.disabled = true;
          break;
        case 'error':
          host.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-error-container)');
          host.style.setProperty(
            '--tf-track-fill-color',
            'var(--tf-sys-light-error-container)'
          );
          host.style.setProperty('--tf-outline-color', 'var(--tf-sys-light-error)');
          break;
        }
      }
    }
    if (!this.text) {
      const div = this.shadowRoot?.querySelector('.slider-value-text') as HTMLElement;
      if (div) {
        div.style.display = 'none';
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
    return this.hasAttribute('text');
  }

  set text(value) {
    value && this.setAttribute('text', '');
    !value && this.removeAttribute('text');
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-simple-slider': TfSimpleSlider;
   }
}

customElements.define('tf-simple-slider', TfSimpleSlider);
