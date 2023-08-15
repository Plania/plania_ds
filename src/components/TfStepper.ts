import { css, html, TfBase } from './TfBase.js';

export class TfStepper extends TfBase {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  }

  render() {
    const style = css`
      .step-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .connector {
        flex-grow: 1;
        height: 2px;
        background-color: var(--light-primary);
      }
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>${style}</style>
        <div class="step-container">
          <tf-step></tf-step>
          <div class="connector"></div>
          <tf-step></tf-step>
        </div>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-stepper': TfStepper;
  }
}

customElements.define('tf-stepper', TfStepper);
