import { css, html, TfBase } from './TfBase.js';

const style = css`
  .date-selector {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export class TfDateSelector extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div class="date-selector">
          <tf-text-input
            icon
            status="default"
            pictogramme="date-range"
            label="Start"
            id="start"
          ></tf-text-input>
        </div>
      `);
  }

  connectedCallback() {
    this.keyUpEventForTextInput();
  }

  keyUpEventForTextInput() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input?.addEventListener('keyup', (e) => {
        e.preventDefault();
        if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === undefined) return;
        input.value = input.value.replace(/[^0-9]/g, '');
        if (input.value.length >= 2 && input.value.length < 5) {
          input.value = input.value.slice(0, 2) + '-' + input.value.slice(2);
          
        }
       
        if (input.value.length >= 10) {
          input.value = input.value.slice(0, 10);
          
        }
      });
    });
  }

  static get observedAttributes() {
    return ['variant'];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-date-selector': TfDateSelector;
  }
}

customElements.define('tf-date-selector', TfDateSelector);
