import { css, html, TfBase } from './TfBase.js';

const style = css`
  .action-bar {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export class TfActionBar extends TfBase {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html`
      <style>
        ${style}
      </style>
      <div class="action-bar">
        <slot></slot>
      </div>
    `;

    const slotElement = this.shadowRoot.querySelector('slot');

    if (slotElement) {
      slotElement.addEventListener('slotchange', () => {
        for (const node of slotElement.assignedNodes()) {
          if (!(node instanceof HTMLElement && node.tagName.toLowerCase() === 'tf-button')) {
            node.parentNode?.removeChild(node);
          }
        }
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-action-bar': TfActionBar;
  }
}

customElements.define('tf-action-bar', TfActionBar);
