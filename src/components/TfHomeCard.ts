import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host{
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--tf-sys-light-surface);
      border-radius:2.5rem 2.5rem 0px 0px;
      border-bottom: 1px solid var(--tf-sys-light-surface-variant);
      box-shadow: 0px -12px 12px 0px #00000014;
   }

   .container {
      padding: 1.5rem 1rem 1rem;
      border: 1px solid var(--tf-sys-light-surface-variant);
      border-radius: 2.5rem 2.5rem 0px 0px;
      border-bottom: none;
   }

   ::slotted([slot="title"]) {
   font-size: 1.75rem !important;
   font-weight: 600 !important;
   margin-bottom: 1rem !important;
}
`;

export class TfHomeCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="container">
               <slot name="title"></slot>
               <slot name="content"></slot>
            </div>
         `);
  }

  // connectedCallback() {}
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-home-card': TfHomeCard;
   }
}

customElements.define('tf-home-card', TfHomeCard);
