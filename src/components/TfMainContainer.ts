import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    display: block;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--tf-padding-regular);
    height: calc(100% - 2 * var(--tf-padding-regular));
  }

  .main ::slotted(*) {
    border-radius: var(--tf-border-radius-regular);
    overflow: hidden;
  }

  .down {
    border-radius: 0 0 var(--tf-border-radius-large) var(--tf-border-radius-large);
  }

  .up {
    border-radius: var(--tf-border-radius-large) var(--tf-border-radius-large) 0 0;
  }

  .default {
    background-color: var(--tf-sys-light-background);
  }
`);

export class TfMainContainer extends TfBase {
  constructor() {
    super();
    this.adoptStylesheet(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
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
