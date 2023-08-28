import { css, TfBase } from './TfBase.js';

export class TfStepper extends TfBase {
  static get observedAttributes(): string[] {
    return ['variant'];
  }

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'variant') {
      this.render();
    }
  }

  render() {
    const variant = parseInt(this.getAttribute('variant') || '1', 10);

    // Initial steps with not-selected variant
    const steps: string[] = Array(5).fill(0).map((_, index) => {
      if (index < variant) {
        return `<tf-step step="${index + 1}" variant="selected"></tf-step>`;
      } else {
        return `<tf-step step="${index + 1}" variant="not-selected"></tf-step>`;
      }
    });

    // Creating connectors between steps based on the variant.
    const connectors: string[] = [];
    for (let i = 0; i < 4; i++) {
      const color = i + 1 < variant ? 'var(--light-tertiary)' : 'var(--light-surface-variant)';
      connectors.push(`<div style='height: 4px; width: 32px; background-color: ${color};'></div>`);
    }

    // Combine steps and connectors for final output
    const combinedContent: string[] = [];
    for (let i = 0; i < 5; i++) {
      combinedContent.push(steps[i]);
      if (i !== 4) {
        combinedContent.push(connectors[i]);
      }
    }

    const style = css`
      .stepper-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
                <style>${style}</style>
                <div class="stepper-container">${combinedContent.join('')}</div>
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
