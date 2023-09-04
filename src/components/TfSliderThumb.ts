import { css, html, TfBase } from './TfBase.js';

  :host {
    --thumb-size: 1.5rem;
    --outline-color: var(--tf-sys-light-outline);
    --color: var(--tf-sys-light-onprimary);
  }

  :host:focus {
    --color: var(--tf-sys-light-surface);
    box-shadow: 0 0 0 0.2rem var(--tf-sys-light-outline);
  }

  .thumb.primary {
    background-color: var(--theme-sys-light-primary, #00AAE3);
  }

  .thumb.secondary {
    background-color: var(--theme-sys-light-secondary, #FF805E);
  }

  .container {
    position: relative;
    display: inline-flex;
    justify-content: center;
  }

  tf-info-bubble {
    display: none;
    position: absolute;
    z-index: 0;
  }

  tf-info-bubble.show {
    display: block;
  }
  
  .thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 4px 4px;
    border-radius: 50%;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  .thumb.outlined {
    border: 1px solid var(--outline-color);
  }
  
  .thumb label {
    text-align: center;
    font-size: 0.75em;
  }
  
  .thumb tf-icon {
    color: var(--tf-sys-light-onprimary);
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
          <div class="thumb ${this.outlined ? 'outlined' : ''} ${this.variant}">
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
