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
    position: absolute;
    top: calc(50% - 0.25rem);
    -webkit-appearance: none;
    appearance: none;

    height: 1rem;
    width: 100%;
    margin: 0;
    padding: 0;

    background-color: #00000000;
    outline: none;
    z-index: 99;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    cursor: pointer;
    z-index: 99;
  }

  .container {
    --value: 50;
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
    width: calc(var(--value) * 1% + 0.25rem);
    height: 0.5rem;
  }

  tf-slider-thumb {
    position: absolute;
    top: 0;
    left: calc(var(--value) * 1% - 0.75rem);
  }
`);

export class TfSimpleSlider extends TfBase {
  constructor() {
    super();

    this.shadowRoot?.adoptedStyleSheets?.push(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <section>
          <input type="range" min=${this.min} max=${this.max} value=${this.value} />
          <div class="container"></div>
        </section>
      `);
    this.render();
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;

    if (input) {
      input.addEventListener('input', (e) => this._handleInput(e));
      input.dispatchEvent(new CustomEvent('input'));
    }
  }

  static get observedAttributes() {
    return ['value', 'min', 'max', 'status', 'text'];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    if (name === 'value') this._setInput();
    else this.render();
  }

  render() {
    const container = this.shadowRoot?.querySelector('.container') as HTMLElement;
    container &&
      (container.innerHTML = html` <div class="${this.status}">
        <div class="background"></div>
        <div class="track"></div>
        <tf-slider-thumb
          outlined
          ${this.text ? `label='${this.value}'` : ''}
          ${['error', 'disabled'].includes(this.status) ? this.status : `variant='secondary'`}
        ></tf-slider-thumb>
      </div>`);
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input) {
      this.value = input?.value;
      this.dispatchEvent(
        new CustomEvent('tf-input', {
          detail: { min: +this.min, max: +this.max, value: +this.value },
        })
      );
      this.render();
    }
  }

  private _setInput() {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    if (input) {
      input.setAttribute('value', this.value);
    }
  }

  private _checkInputValue = (value: string) => {
    return '' + (+value < +this.min ? this.min : +value > +this.max ? this.max : value);
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

  get value() {
    return this.getAttribute('value') || '50';
  }

  set value(value) {
    this.setAttribute('value', this._checkInputValue(value));
    this._setProperty('value', this._checkInputValue(value));
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
    'tf-simple-slider': TfSimpleSlider;
  }
}

customElements.define('tf-simple-slider', TfSimpleSlider);
