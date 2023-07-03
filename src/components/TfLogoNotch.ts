import { css, html, TfBase } from './TfBase.js';

const style = css`
    .container {
        background-color: var(--tf-sys-light-surface);
        border-radius: 0 0 5rem 5rem;
        height: 5rem;
        width: 10rem;
        position: relative;
    }

    .logo {
        position:absolute;
        height:2rem;
        width:4rem;
        margin:auto;
        bottom: 0;
        left:50%;
        transform: translateX(-50%);
    }
`;

export class TfLogoNotch extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="container">
               <tf-logo variant="text" color="color" class='logo'></tf-logo>
            </div>
         `);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-logo-notch': TfLogoNotch;
   }
}

customElements.define('tf-logo-notch', TfLogoNotch);