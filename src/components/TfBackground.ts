import { css, html, TfBase } from './TfBase.js';

const style = css`
  :host,
  section {
    width: 100%;
    height: 100%;
    display: block;
  }

  ::slotted([slot='content']) {
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--tf-sys-light-background, #fff);
  }

  ::slotted([slot='actions']) {
    width: 100%;
    height: 6rem;
    display: block;
    background-color: var(--tf-sys-light-surface, #00aae3);
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
          <slot name="content"></slot>
          <slot name="actions"></slot>
        </section>
      `);
  }

  static get observedAttributes() {
    return ['actions'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const slotAction = this.shadowRoot?.querySelector('slot[name="actions"]') as HTMLSlotElement;
    const slotContent = this.shadowRoot?.querySelector('slot[name="content"]') as HTMLSlotElement;
    if (this.actions) {
      slotAction.style.display = 'block';
      slotContent.style.height = 'calc(100% - 6rem)';
    } else {
      slotAction.style.display = 'none';
      slotContent.style.height = '100%';
    }
  }

  get actions() {
    return this.hasAttribute('actions');
  }

  set actions(value) {
    value && this.setAttribute('actions', '');
    !value && this.removeAttribute('actions');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-background': TfBackground;
  }
}

customElements.define('tf-background', TfBackground);
