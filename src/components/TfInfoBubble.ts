import { css, html, TfBase } from './TfBase.js';

const style = css`
  .bubble {
    width: 36px;
    height: 26.203px;
    flex-shrink: 0;
    fill: var(--theme-sys-light-surface-variant, #D4D4D4);
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    top: -24px;
    
  }

  .text {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Nunito;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: var(--tf-sys-light-on-background, var(--theme-sys-light-on-background, #250127));
  }
`;

export class TfInfoBubble extends TfBase {
  constructor() {
    super();
   
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="bubble">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 27">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16H11.4452L17.1373 25.7091C17.5236 26.3681 18.4763 26.3681 18.8626 25.7091L24.5547 16H28C32.4183 16 36 12.4183 36 8C36 3.58172 32.4183 0 28 0H8Z" fill="#D4D4D4"/>
          </svg>
          <p class="text">Age</p>
        </div>
      `);
  }
 
  
}
declare global {
  interface HTMLElementTagNameMap {
     'tf-info-bubble': TfInfoBubble;
  }
}

customElements.define('tf-info-bubble', TfInfoBubble);

