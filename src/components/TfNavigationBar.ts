import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      height: 100%;
      width: 100%;
   }
   .navigation-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0px -12px 24px 0px #00000014;
   }
`;

export class TfNavigationBar extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="navigation-bar">
               <tf-navigation-item icon="explore">Discover</tf-navigation-item>
               <tf-navigation-item icon="date-range">Plan</tf-navigation-item>
               <tf-navigation-item icon="message">Chat Pendi</tf-navigation-item>
               <tf-navigation-item icon="account-circle">Profil</tf-navigation-item>
            </div>
         `);
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const navigationItemsElem = this.shadowRoot?.querySelectorAll('tf-navigation-item');
    if (!navigationItemsElem) return;
    if (name === 'active') {
      navigationItemsElem.forEach((item) => item.setAttribute('active', 'false'));
      switch (newValue) {
      case '1':
        navigationItemsElem[0].setAttribute('active', 'true');
        break;
      case '2':
        navigationItemsElem[1].setAttribute('active', 'true');
        break;
      case '3':
        navigationItemsElem[2].setAttribute('active', 'true');
        break;
      case '4':
        navigationItemsElem[3].setAttribute('active', 'true');
        break;
      }
    }
  }

  get active() {
    return this.getAttribute('active') || '1';
  }

  set active(value) {
    this.setAttribute('active', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-navigation-bar': TfNavigationBar;
   }
}

customElements.define('tf-navigation-bar', TfNavigationBar);
