import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }

   main{
      width: 100%;
      height: 100%;
   }
   .down {
      border-radius: 0 0 40px 40px;
   }

   .up {
      border-radius: 40px 40px 0 0;
   }

   .default {
      background-color: var(--tf-sys-light-background)
   }
`;

export class TfMainContainer extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <main class="main down primary">
               <slot></slot>
            </main>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['direction', 'color'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const dropdownElem = this.shadowRoot?.querySelector('main') as HTMLElement;

    if (['direction', 'color'].includes(name)) {
      dropdownElem.classList.remove(oldValue);
      dropdownElem.classList.add(newValue);
    }
  }

  get direction() {
    return this.getAttribute('direction') || 'dropdown';
  }

  set direction(value) {
    this.setAttribute('direction', value);
  }

  get color() {
    return this.getAttribute('color') || 'primary';
  }

  set color(value) {
    this.setAttribute('color', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-main-container': TfMainContainer;
   }
}

customElements.define('tf-main-container', TfMainContainer);
