import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host , section {
      width: 100%;
      height: 100%;
      display: block;
   }

   

`;

export class TfBackground extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section>
               <slot></slot>
            </section>
         `);
  }

  static get observedAttributes() {
    return ['variant'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string, ) {
    if (name === 'variant') {
      this.shadowRoot?.querySelector('section')?.removeAttribute('class');
      if (newValue !== 'primary' && newValue !== 'secondary' && newValue !== 'tertiary' && newValue !== 'default'){
        this.shadowRoot?.querySelector('section')?.classList.add('primary');
        return;
      }
      this.shadowRoot?.querySelector('section')?.classList.add(newValue);
      this.shadowRoot?.querySelector('section')?.classList.remove(oldValue);
      
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(val) {
    this.setAttribute('variant', val);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-background': TfBackground;
   }
}

customElements.define('tf-background', TfBackground);
