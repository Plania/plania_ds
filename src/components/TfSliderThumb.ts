import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    --thumb-size: 1.5rem;
    --outline-color: var(--tf-sys-light-outline);
    --color: var(--tf-sys-light-onprimary);
  }

  :host:focus {
    --color: var(--tf-sys-light-surface);
    box-shadow: 0 0 0 0.2rem var(--tf-sys-light-outline);
  }

  .disabled {
    /* TODO: Should investigate the interaction with .primary, .secondary .tertiary defined in TfBase */
    background-color: var(--tf-sys-light-surface-variant);
  }

  .error {
    background-color: var(--tf-sys-light-error-container);
    --outline-color: var(--tf-sys-light-error);
    --color: var(--tf-sys-light-error);
  }

  .container {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 4px;
    border-radius: 1.5rem;
    width: fit-content;
    min-width: 1em;
    min-height: 1em;
  }

  .thumb.outlined {
    border: 1px solid var(--outline-color);
    padding: 3px;
  }

  .thumb label {
    color: var(--color);
    text-align: center;
    font-size: 0.75em;
  }

  .thumb tf-icon {
    color: var(--color);
  }
`);

export class TfSliderThumb extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.adoptedStyleSheets = this.shadowRoot.adoptedStyleSheets.concat(style));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <div class="container">
          ${this.hasBubble ? html`<tf-info-bubble>${this.bubble}</tf-info-bubble>` : ''}
          <div
            class="thumb ${this.outlined ? 'outlined' : ''} ${this.variant}  ${this.disabled
              ? 'disabled'
              : ''} ${this.error ? 'error' : ''}"
          >
            ${this.hasLabel
              ? html`<label>${this.label}</label>`
              : html`<tf-icon icon="view-headline" />`}
          </div>
        </div>
      `);
  }

  static get observedAttributes() {
    return ['outlined', 'bubble', 'variant', 'label'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    (value && this.setAttribute('disabled', '')) || this.removeAttribute('disabled');
  }

  get error() {
    return this.hasAttribute('error');
  }

  set error(value) {
    (value && this.setAttribute('error', '')) || this.removeAttribute('error');
  }

  get outlined() {
    return this.hasAttribute('outlined');
  }

  set outlined(value) {
    (value && this.setAttribute('outlined', '')) || this.removeAttribute('outlined');
  }

  get hasBubble() {
    return this.hasAttribute('bubble');
  }

  get bubble() {
    return this.getAttribute('bubble') || '';
  }

  set bubble(value) {
    this.setAttribute('bubble', value);
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get hasLabel() {
    return this.hasAttribute('label');
  }

  get label() {
    return this.getAttribute('label') || '18';
  }

  set label(value) {
    this.setAttribute('label', value);
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-slider-thumb': TfSliderThumb;
  }
}

customElements.define('tf-slider-thumb', TfSliderThumb);
