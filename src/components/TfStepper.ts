import { css, html, TfBase } from './TfBase.js';

const style = css`
  .container {
    position: relative;
    height: 2rem;
  }

  .steps {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .connectors {
    position: absolute;
    top: 0;
    left: 0.25rem;
    height: 100%;
    width: calc(100% - 0.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }

  .connector {
    height: 0.25rem;
    width: 100%;
    background-color: var(--light-surface-variant);
  }

  .connector.selected {
    background-color: var(--light-tertiary);
  }
`;

export class TfStepper extends TfBase {
  constructor() {
    super();

    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div class="container"></div>
      `);

    this.render();
  }

  static get observedAttributes(): string[] {
    return ['steps', 'current'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    this.render();
  }

  render() {
    // Initial steps with not-selected variant
    const steps: string = Array(this.steps)
      .fill(0)
      .map(
        (_, index) => html`
          <tf-step ${index < this.current ? 'selected' : ''}>${'' + (index + 1)}</tf-step>
        `
      )
      .join('');

    const connectors: string = Array(this.steps - 1)
      .fill(0)
      .map(
        (_, index) =>
          html` <div class="connector ${index < this.current - 1 ? 'selected' : ''}"></div> `
      )
      .join('');

    const container = this.shadowRoot?.querySelector('.container');
    container &&
      (container.innerHTML = html`
        <div class="connectors">${connectors}</div>
        <div class="steps">${steps}</div>
      `);
  }

  get steps(): number {
    return parseInt(this.getAttribute('steps') || '5', 10);
  }

  set steps(value: number) {
    value = value < 1 ? 1 : value;
    this.setAttribute('steps', value.toString());
  }

  get current(): number {
    return parseInt(this.getAttribute('current') || '1', 10);
  }

  set current(value: number) {
    value = value < 1 ? 1 : value;
    value = value > this.steps ? this.steps : value;
    this.setAttribute('current', value.toString());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-stepper': TfStepper;
  }
}

customElements.define('tf-stepper', TfStepper);
