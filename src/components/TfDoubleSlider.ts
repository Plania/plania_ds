import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    width: 100%;
    --background-color: var(--tf-sys-light-surface-variant);
    --track-color: var(--tf-sys-light-secondary-container);
    --outline-color: var(--tf-sys-light-outline);
  }

  :host(:focus) {
    --track-color: var(--tf-sys-light-secondary);
  }

  .error {
    --track-color: var(--tf-sys-light-error-container);
    --outline-color: var(--tf-sys-light-error);
  }

  .disabled {
    --track-color: var(--tf-sys-light-surface-variant);
  }

  section {
    position: relative;
    width: 100%;
    height: 1.5rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    height: 1.5rem;
    background-color: transparent;
    pointer-events: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 1.5rem;
  }

  input[type='range']::-moz-range-track {
    -moz-appearance: none;
    height: 1.5rem;
  }

  input[type='range']::-ms-track {
    -ms-appearance: none;
    height: 1.5rem;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 100px;
    width: 1.5rem;
    cursor: pointer;
    pointer-events: auto;
  }

  input[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    height: 100px;
    width: 1.5rem;
    cursor: pointer;
    pointer-events: auto;
  }

  input[type='range']::-ms-thumb {
    -ms-appearance: none;
    height: 100px;
    width: 1.5rem;
    cursor: pointer;
    pointer-events: auto;
  }

  .container {
    --valueA: 20;
    --valueB: 70;
    --start: 20;
    --end: 70;
    --min: 0;
    --max: 100;
  }

  .background {
    background-color: var(--background-color);
    border-radius: 0.25rem;
    position: absolute;
    top: 0.5rem;
    width: 100%;
    height: 0.5rem;
  }

  .track {
    background-color: var(--track-color);
    border: 1px solid var(--outline-color);
    border-radius: 0.25rem;
    box-sizing: border-box;
    position: absolute;
    top: 0.5rem;
    left: calc(var(--start) * 1% + 0.25rem);
    width: calc(var(--end) * 1% - var(--start) * 1% - 0.5rem);
    height: 0.5rem;
  }

  tf-slider-thumb {
    position: absolute;
    top: 0;
  }

  #thumbMin {
    left: calc(var(--valueA) * 1% - 0.75rem);
  }

  #thumbMax {
    left: calc(var(--valueB) * 1% - 0.75rem);
  }
`);

export class TfDoubleSlider extends TfBase {
  constructor() {
    super();

    this.shadowRoot?.adoptedStyleSheets?.push(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <section>
          <div class="container {this.status}">
            <div class="background"></div>
            <div class="track"></div>
            <tf-slider-thumb id="thumbMin" outlined variant="secondary"></tf-slider-thumb>
            <tf-slider-thumb id="thumbMax" outlined variant="secondary"></tf-slider-thumb>
          </div>
          <input type="range" id="inputA" min=${this.min} max=${this.max} value=${this.valueA} />
          <input type="range" id="inputB" min=${this.min} max=${this.max} value=${this.valueB} />
        </section>
      `);
  }

  connectedCallback() {
    const inputs = this.shadowRoot?.querySelectorAll('input');

    if (this.status == 'disabled') return;

    for (const input of inputs || []) {
      input.addEventListener('input', (e) => this._handleInput(e));
      input.dispatchEvent(new CustomEvent('input'));
    }
  }

  static get observedAttributes() {
    return ['valuea', 'valueb', 'min', 'max', 'status', 'text'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    const container = this.shadowRoot?.querySelector('.container') as HTMLElement;
    const thumbMin = this.shadowRoot?.querySelector('#thumbMin') as HTMLElement;
    const thumbMax = this.shadowRoot?.querySelector('#thumbMax') as HTMLElement;

    if (name === 'valuea' || name === 'valueb') this._setInput();

    if (this.text) {
      thumbMin && thumbMin.setAttribute('label', this.valueA);
      thumbMax && thumbMax.setAttribute('label', this.valueB);
    } else {
      thumbMin && thumbMin.removeAttribute('label');
      thumbMax && thumbMax.removeAttribute('label');
    }

    if (['error', 'disabled'].includes(this.status)) {
      thumbMin && thumbMin.removeAttribute('variant');
      thumbMax && thumbMax.removeAttribute('variant');
      container && container.classList.add(this.status);
      thumbMin && thumbMin.setAttribute(this.status, '');
      thumbMax && thumbMax.setAttribute(this.status, '');
    } else {
      thumbMin && thumbMin.removeAttribute(this.status);
      thumbMax && thumbMax.removeAttribute(this.status);
      container && container.classList.remove('error', 'disabled');
      thumbMin && thumbMin.setAttribute('variant', 'secondary');
      thumbMax && thumbMax.setAttribute('variant', 'secondary');
    }
  }

  private _handleInput(e: Event) {
    if (this.status == 'disabled') return;

    const input = e.target as HTMLInputElement;
    if (input) {
      input.id === 'inputA' && (this.valueA = input?.value);
      input.id === 'inputB' && (this.valueB = input?.value);
      this.dispatchEvent(
        new CustomEvent('tf-input', {
          detail: {
            min: +this.min,
            max: +this.max,
            valueMin: Math.min(+this.valueA, +this.valueB),
            valueMax: Math.max(+this.valueA, +this.valueB),
          },
        })
      );
    }
  }

  private _setInput() {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    input && input.id === 'inputA' && input.setAttribute('value', this.valueA);
    input && input.id === 'inputB' && input.setAttribute('value', this.valueB);
  }

  private _checkInputValue = (value: string) => {
    return '' + Math.min(Math.max(+value, +this.min), +this.max);
  };

  private _setProperty(property: string, value: string) {
    const container = this.shadowRoot?.querySelector('.container') as HTMLElement;
    container && container.style.setProperty('--' + property, value);
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
    (value && this.setAttribute('text', '')) || this.removeAttribute('text');
  }

  get valueA() {
    return this.getAttribute('valueA') || '20';
  }

  set valueA(value) {
    this.setAttribute('valueA', this._checkInputValue(value));
    this._setProperty('valueA', this._checkInputValue(value));
    this._setProperty('start', '' + Math.min(+this.valueA, +this.valueB));
    this._setProperty('end', '' + Math.max(+this.valueA, +this.valueB));
  }

  get valueB() {
    return this.getAttribute('valueB') || '70';
  }

  set valueB(value) {
    this.setAttribute('valueB', this._checkInputValue(value));
    this._setProperty('valueB', this._checkInputValue(value));
    this._setProperty('start', '' + Math.min(+this.valueA, +this.valueB));
    this._setProperty('end', '' + Math.max(+this.valueA, +this.valueB));
  }

  get min() {
    return this.getAttribute('min') || '0';
  }

  set min(value) {
    this.setAttribute('min', value);
    this._setProperty('min', value == '' ? '0' : value);
  }

  get max() {
    return this.getAttribute('max') || '100';
  }

  set max(value) {
    this.setAttribute('max', value);
    this._setProperty('max', value == '' ? '100' : value);
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-double-slider': TfDoubleSlider;
  }
}

customElements.define('tf-double-slider', TfDoubleSlider);
