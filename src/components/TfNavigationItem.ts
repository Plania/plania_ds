import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display:flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      max-width: 6rem;
      width: 100%;
   }


   .active {
      background-color: var(--tf-sys-light-tertiary);
      box-shadow: 0px 0px 8px 0px #00000040;
      border-top: 4px solid var(--tf-sys-light-tertiary);
      margin-top: -4px;
      padding-bottom : 8px;
   }

   .icon {
      background-color: #ffff;
      padding: 0.5rem;
      border-radius: 50%;
      margin-top: 0.5rem;
   }

   .navigation-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
   }

   .text {
      font-size: 0.9rem;
   }
`;

export class TfNavigationItem extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="navigation-item">
               <slot class="text"></slot>
            </div>
         `);
  }

  static get observedAttributes() {
    return ['icon', 'active'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const navigationItemElem = this.shadowRoot?.querySelector('div');
    this.shadowRoot?.querySelector('.active')?.classList.remove('active');
    if (name === 'icon') {
      const icon = document.createElement('tf-icon');
      icon.classList.add('icon');
      icon.setAttribute('icon', newValue || '');
      navigationItemElem?.insertAdjacentElement('beforeend', icon);
    }

    if (name === 'active' && newValue === 'true') {
      navigationItemElem?.classList.toggle('active', true);
    }
  }

  get icon() {
    return this.getAttribute('icon') || ' ';
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-navigation-item': TfNavigationItem;
   }
}

customElements.define('tf-navigation-item', TfNavigationItem);
