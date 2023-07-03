import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }

   .favorite-plan-info-container {
      display: flex;
      flex-wrap: wrap;
      height: 4rem;
      justify-content: space-between;
      column-gap: 50%;
      color:#5C5C5C;
   }

   .favorite-plan-info {
      display: flex;
      align-items: center;
      height: 50%;
      width: fit-content;
      gap: 0.5rem;
   }

   .icon {
      width: 1rem;
      height: 1rem;
      color:black;
   }

   .favorite-plan-name {
      color: #fd7029;
   }

   .favorite-plan-img-container {
      position: relative;
      width: 100%;
      min-height: 200px;
      background-size: cover;
      background-position: center;
      border-radius: 1rem;
   }

   @media screen and (max-width: 350px){
        .favorite-plan-info-container {
            gap: 20%;
        }
    }

`;

export class TfFavoritePlans extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section>
               <div class='favorite-plan-img-container'>
               </div>
               <div class="favorite-plan-info-container">
                  <span class="favorite-plan-name favorite-plan-info"
                     ><tf-icon icon="location-on" class="icon"
                  /></span>
                  <span class="favorite-plan-country favorite-plan-info"></span>
                  <span class="favorite-plan-dates favorite-plan-info"></span>
               </div>
            </section>
         `);
  }

  static get observedAttributes() {
    return ['city', 'dates', 'country', 'img'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    let targetElement;
    switch (name) {
    case 'city':
      targetElement = this.shadowRoot?.querySelector('.favorite-plan-name');
      break;
    case 'dates':
      targetElement = this.shadowRoot?.querySelector('.favorite-plan-dates');
      break;
    case 'country':
      targetElement = this.shadowRoot?.querySelector('.favorite-plan-country');
      break;
    case 'img':
      this.shadowRoot
        ?.querySelector('.favorite-plan-img-container')
        ?.setAttribute('style', `background-image: url(${newValue})`);
      break;

      
    }

    if (targetElement) {
      targetElement.appendChild(document.createTextNode(newValue));
      name === 'country' && targetElement.insertAdjacentElement('beforeend', this.addFlag());
    }
  }



  addFlag(): HTMLImageElement {
    const flag = document.createElement('img');
    flag.setAttribute('src', 'https://flagcdn.com/de.svg');
    flag.setAttribute('width', '16');
    return flag;
  }

  get dates() {
    return this.getAttribute('dates') || 'EUR';
  }

  set dates(value) {
    this.setAttribute('dates', value);
  }

  get city() {
    return this.getAttribute('city') || '';
  }

  set city(value) {
    this.setAttribute('city', value);
  }

  get country() {
    return this.getAttribute('country') || '';
  }

  set country(value) {
    this.setAttribute('country', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-favorite-plan': TfFavoritePlans;
   }
}

customElements.define('tf-favorite-plan', TfFavoritePlans);
