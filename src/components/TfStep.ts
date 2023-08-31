import { css, html, TfBase } from './TfBase.js';

const style = css`
  .container {
    --tf-step: var(--light-surface-variant);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background: var(--tf-step);
  }
`;
export class TfStep extends TfBase {
  constructor() {
    super();

    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div class="container"><slot></slot></div>
      `);
  }

  static get observedAttributes(): string[] {
    return ['selected'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    const container = this.shadowRoot?.querySelector('.container') as HTMLElement;

    // Step variant
    container &&
      container.style.setProperty(
        '--tf-step',
        this.selected ? 'var(--light-tertiary)' : 'var(--light-surface-variant)'
      );
  }

  get selected(): boolean {
    return this.hasAttribute('selected');
  }

  set selected(value: boolean) {
    if (value) {
      this.setAttribute('selected', '');
    } else {
      this.removeAttribute('selected');
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-step': TfStep;
  }
}
customElements.define('tf-step', TfStep);
