import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    display: flex; /* Required to make flex-shrink work, below*/
  }

  .bubble {
    width: 2.25em;
    flex-shrink: 0;
    color: var(--tf-sys-light-surface-variant);
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    position: absolute;
    font-size: 0.75rem;
    color: var(--tf-sys-light-onprimary);
  }

  .error {
    color: var(--tf-sys-light-error);
  }
`);

export class TfInfoBubble extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.adoptedStyleSheets = this.shadowRoot.adoptedStyleSheets.concat(style));
  }

  connectedCallback() {
    this.render();
    const slotted = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (slotted) {
      slotted.addEventListener('slotchange', () => {
        const assignedNodes = slotted.assignedNodes() as HTMLElement[];
        if (assignedNodes.length > 1) {
          console.warn(
            'tf-info-bubble can have only one text-node child - only the first one is kept'
          );
          slotted.assign(assignedNodes.filter((n) => n.nodeType === Node.TEXT_NODE)[0]);
        }
      });
    }
  }

  static get observedAttributes() {
    return ['error'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }

  render() {
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <div class="bubble">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 27">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16H11.4452L17.1373 25.7091C17.5236 26.3681 18.4763 26.3681 18.8626 25.7091L24.5547 16H28C32.4183 16 36 12.4183 36 8C36 3.58172 32.4183 0 28 0H8Z"
              fill="currentColor"
            />
          </svg>
          <p class="text ${this.error ? 'error' : ''}"><slot></slot></p>
        </div>
      `);
  }

  get error() {
    return this.hasAttribute('error');
  }

  set error(value) {
    (value && this.setAttribute('error', '')) || this.removeAttribute('error');
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-info-bubble': TfInfoBubble;
  }
}

customElements.define('tf-info-bubble', TfInfoBubble);
