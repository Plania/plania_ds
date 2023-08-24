import { css, html, TfBase } from './TfBase.js';

export class TfStep extends TfBase {
  static get observedAttributes(): string[] {
    return ['step', 'variant'];
  }

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'step' || name === 'variant') {
      this.render();
    }
  }

  render() {
    const step = parseInt(this.getAttribute('step') || '1', 10);
    const variant = this.getAttribute('variant') || 'not-selected';

    const style = css`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        background: ${variant === 'selected'
    ? 'var(--light-tertiary)'
    : 'var(--light-surface-variant)'};
    color: ${variant === 'selected'
    ? 'var(--light-surface)'  
    : variant === 'not-selected'
    ? 'var(--light-outline)'  
    : 'initial'};
      }
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
                <style>${style}</style>
                <div class="container">${step}</div>
            `;
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'tf-step': TfStep;
  }
}
customElements.define('tf-step', TfStep);
