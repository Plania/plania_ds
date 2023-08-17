import { css, html, TfBase } from './TfBase.js';

const style = css`

   .container {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
   }

   .text {
      color: var(--tf-sys-light-on-primary);
      font: var(--tf-body-medium);
      margin-bottom: 4px;
   }
`;

export class TfDropdownItem extends TfBase {
  constructor() {
    super();

    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
               <div class="container">
                  <p class="text">
                     <slot></slot>
                  </p>
               </div>
         `);
  }

}

declare global {
   interface HTMLElementTagNameMap {
      'tf-dropdown-item': TfDropdownItem;
   }
}

customElements.define('tf-dropdown-item', TfDropdownItem);
