import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      height: 2.5rem;
      width: 2.5rem;
   }

   button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      border: none;
      font: var(--tf-body-small);
   }

   .default {
      background-color: var(--tf-sys-light-surface);
   }

   .disabled {
      background-color: var(--tf-sys-light-surface-variant);
      color: var(--tf-sys-light-background)
   }

   .selectedDate {
      background-color: var(--tf-sys-light-primary);
   }

   .startEndDate {
      background-color: var(--tf-sys-light-primary);
      border-radius: 50%;
   }

   .startDate {
        background-color: var(--tf-sys-light-primary);
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
   }

   .endDate {
        background-color: var(--tf-sys-light-primary);
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
   }

   .differentMonth {
      background-color: var(--tf-sys-light-surface-variant);
   }

`;

export class TfDay extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <button></button>
         `);
  }

  static get observedAttributes() {
    return ['day', 'state'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const day = this.shadowRoot?.querySelector('button');
    if (!day) return;
    if (name === 'day') {
      day.innerHTML = newValue;
    }
    if (name === 'state') {
      if (newValue === 'disabled' || newValue === 'differentMonth') day.disabled = true;
      day.classList.remove(oldValue);
      day.classList.add(newValue);
    }
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-day': TfDay;
   }
}
customElements.define('tf-day', TfDay);
