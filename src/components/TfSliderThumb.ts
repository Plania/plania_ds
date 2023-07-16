import { css, html, TfBase } from './TfBase.js';

const style = css`
  .thumb {
    width: fit-content;
    display: inline-flex;
    padding: 8px 9px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: var(--theme-sys-light-primary, #00AAE3);
    width: 16px;
    height: 16px;
    position: relative;
  }

  .thumb.primary {
    background-color: var(--theme-sys-light-primary, #00AAE3);
  }

  .thumb.secondary {
    background-color: var(--theme-sys-light-secondary, #FF805E);
  }

  .thumb.tertiary {
    background-color: var(--theme-sys-light-tertiary, #FFB030);
  }

  .thumb.outline {
    border: 1px solid var(--theme-sys-light-outline, #71787D);
  }

  .thumb.bubble {
    width: 36px;
    height: 26.203px;
    flex-shrink: 0;
    fill: var(--theme-sys-light-surface-variant, #D4D4D4);
  }
  
  .thumb.label {
    position: relative;
  }
  
  .thumb.label .text-label {
    text-align: center;
    font-family: Nunito;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .thumb.shape {
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
    fill: #F9F9F8;
  }
  .thumb svg {
    position: absolute;
    z-index:0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .thumb tf-info-bubble {
    position: absolute;
    z-index: 0;
`;

export class TfSliderThumb extends TfBase {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'outline', 'bubble', 'haslabel', 'label'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const hasLabel = this.getAttribute('haslabel');
    const label = this.getAttribute('label');
    const variant = this.getAttribute('variant') || 'primary'; // Adjusted
    const outline = this.getAttribute('outline') === 'true' ? 'outline' : ''; 
    const bubble = this.getAttribute('bubble');

    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div class="thumb ${variant} ${outline}"> <!-- Adjusted -->
          ${hasLabel === 'true' ? html`
            <label class="text-label">${label || ''}</label>
          ` : ''}
          ${hasLabel === 'false' ? html`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"  >
              <path d="M9.99967 13.3334V2.66671H8.66634V13.3334H9.99967ZM12.6663 13.3334V2.66671H11.333V13.3334H12.6663ZM7.33301 13.3334L7.33301 2.66671H5.99967V13.3334H7.33301ZM3.33301 13.3334H4.66634L4.66634 2.66671H3.33301L3.33301 13.3334Z" fill="#F9F9F8"/>
            </svg>
          ` : ''}
          ${bubble === 'true' ? html`<tf-info-bubble></tf-info-bubble>` : ''}
        </div>
      `);
  }

  
  


  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get outline() {
    return this.hasAttribute('outline');
  }

  set outline(value) {
    value ? this.setAttribute('outline', '') : this.removeAttribute('outline');
  }

  get haslabel() {
    return this.getAttribute('haslabel') || '';
  }

  set haslabel(value) {
    this.setAttribute('haslabel', value);
  }

  get label() {
    return this.getAttribute('label') || '';
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  get bubble() {
    return this.getAttribute('bubble') || '';
  }

  set bubble(value) {
    this.setAttribute('bubble', value);
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-slider-thumb': TfSliderThumb;
  }
}

customElements.define('tf-slider-thumb', TfSliderThumb);