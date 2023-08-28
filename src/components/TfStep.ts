import { css, html, TfBase } from './TfBase.js';

const style = css`
  .container {
    --tf-step-variant: var(--light-surface-variant);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background: var(--tf-step-variant);
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
    return ['variant'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    const container = this.shadowRoot?.querySelector('.container') as HTMLElement;

    // Step variant
    container &&
      container.style.setProperty(
        '--tf-step-variant',
        this.variant === 'selected' ? 'var(--light-tertiary)' : 'var(--light-surface-variant)'
      );
  }

  get variant(): string {
    return this.getAttribute('variant') || 'not-selected';
  }

  set variant(value: string) {
    this.setAttribute('variant', value);
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-step': TfStep;
  }
}
customElements.define('tf-step', TfStep);
