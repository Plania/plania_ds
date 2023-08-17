import { html, css, TfBase } from './TfBase.js';

const style = css`
  :host {
    display: flex;
    margin: 0;
    width: 100%;
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    font: var(--tf-body1);
  }

  div {
    width: 3rem;
    height: 3rem;
  }

  .top {
    border-top: 1px solid var(--tf-read-only-light-outline-opacity-016, rgba(113, 120, 125, 0.16));
    margin-bottom: -1px;
  }

  .content {
    display: flex;
    align-items: center;
    width: calc(100% - 3.5rem);
    padding-left: 0.5rem;
  }
`;

export class TfTypeAHeadItem extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <section class="container">
          <div></div>
          <div class="content">
            <slot> </slot>
          </div>
        </section>
      `);
  }

  static get observedAttributes() {
    return ['thumb', 'side'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const div = this.shadowRoot?.querySelector('div');
    const container = this.shadowRoot?.querySelector('.content');
    if (!div) return;

    switch (name) {
    case 'thumb':
      div.style.backgroundImage = `url(${newValue})`;
      break;
    case 'side':
      container?.classList.remove(oldValue);
      container?.classList.toggle(newValue, true);
      break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-typeahead-item': TfTypeAHeadItem;
  }
}

customElements.define('tf-type-a-head-item', TfTypeAHeadItem);
