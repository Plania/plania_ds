import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host,
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: var(--tf-sys-light-background, #fff);
  }

  .actions {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    background-color: var(--tf-sys-light-surface, #00aae3);
  }

  .hide {
    display: none;
  }
`);

export class TfBackground extends TfBase {
  constructor() {
    super();
    this.adoptStylesheet(style);
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <section>
          <div class="content"><slot name="content"></slot></div>
          <div class="actions ${this.actions ? '' : 'hide'}"><slot name="actions"></slot></div>
        </section>
      `);
  }

  static get observedAttributes() {
    return ['actions'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const actions = this.shadowRoot?.querySelector('.actions') as HTMLElement;
    const content = this.shadowRoot?.querySelector('.content') as HTMLElement;

    if (!actions || !content) return;

    if (name === 'actions' && this.actions) {
      actions.classList.remove('hide');
    } else {
      actions.classList.add('hide');
    }
  }

  get actions() {
    return this.hasAttribute('actions');
  }

  set actions(value) {
    value ? this.setAttribute('actions', '') : this.removeAttribute('actions');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-background': TfBackground;
  }
}

customElements.define('tf-background', TfBackground);
