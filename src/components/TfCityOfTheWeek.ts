import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }

   .city-week-info-container {
      display: flex;
      flex-wrap: wrap;
      height: 4rem;
      justify-content: space-between;
      column-gap: 50%;
      color:#5C5C5C;
   }

   .city-week-info {
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

   .city-week-name {
      color: #fd7029;
   }

   .city-week-img-container {
      position: relative;
      width: 100%;
      min-height: 200px;
      background-size: cover;
      background-position: center;
      border-radius: 1rem;
   }

   .city-stats-container {
      display: flex;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      gap: 0.5rem;
   }

   .city-stats {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 2rem;
    padding : 0 0.25rem;
    font-size: 0.75rem;
    gap: 0.25rem;
   }


   .city-stats tf-icon{
    width: 1rem;
    height: 1rem;
    order: 1;
   }

    .city-stats tf-icon[icon="star-rate"]{
      color: #FFBF1A;
    }

    .city-week-timezone tf-icon {
      order: 2;
    }

    @media screen and (max-width: 376px){
        .city-week-info-container {
            gap: 20%;
        }
    }
`;

export class TfCityOfTheWeek extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="city-week-container">
               <div class="city-week-img-container">
                  <div class="city-stats-container">
                     <span class="city-stats stats-views"><tf-icon icon="eyes"></tf-icon></span>
                     <span class="city-stats stats-rating"><tf-icon icon="star-rate"></tf-icon></span>
                  </div>
               </div>
               <div class="city-week-info-container">
                  <span class="city-week-name city-week-info"
                     ><tf-icon icon="location-on" class="icon"
                  /></span>
                  <span class="city-week-country city-week-info"></span>
                  <span class="city-week-currency city-week-info"></span>
                  <span class="city-week-timezone city-week-info"><tf-icon icon='language' class='icon'/></span>
               </div>
               <div class="city-week-description">
                  <slot></slot>
               </div>
            </section>
         `);
  }

  static get observedAttributes() {
    return ['city', 'currency', 'country', 'timezone', 'img' , 'views', 'rating'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    let targetElement;
    const currencySymbol = this.getCurrencySymbol();
    switch (name) {
    case 'city':
      targetElement = this.shadowRoot?.querySelector('.city-week-name');
      break;
    case 'currency':
      targetElement = this.shadowRoot?.querySelector('.city-week-currency');
      targetElement?.insertAdjacentHTML(
        'afterbegin',
        `<tf-icon icon='${currencySymbol}' class='icon'></tf-icon>`
      );
      break;
    case 'country':
      targetElement = this.shadowRoot?.querySelector('.city-week-country');
      break;
    case 'timezone':
      targetElement = this.shadowRoot?.querySelector('.city-week-timezone');
      break;
    case 'img':
      this.shadowRoot
        ?.querySelector('.city-week-img-container')
        ?.setAttribute('style', `background-image: url(${newValue})`);
      break;
    case 'views':
      targetElement = this.shadowRoot?.querySelector('.stats-views');
      break;
    case 'rating':
      targetElement = this.shadowRoot?.querySelector('.stats-rating');
      
    }

    if (targetElement) {
      targetElement.appendChild(document.createTextNode(newValue));
      name === 'country' && targetElement.insertAdjacentElement('beforeend', this.addFlag());
    }
  }

  getCurrencySymbol() {
    let currencySymbol = '';
    switch (this.currency) {
    case 'EUR':
      currencySymbol = 'euro-symbol';
      break;
    case 'USD':
      currencySymbol = 'dollar-symbol';
      break;
    case 'GBP':
      currencySymbol = 'pound-symbol';
      break;
    case 'JPY':
      currencySymbol = 'yen-symbol';
      break;
    default:
      currencySymbol = 'euro-symbol';
      break;
    }

    return currencySymbol;
  }

  addFlag(): HTMLImageElement {
    const flag = document.createElement('img');
    flag.setAttribute('src', 'https://flagcdn.com/de.svg');
    flag.setAttribute('width', '16');
    return flag;
  }

  get currency() {
    return this.getAttribute('currency') || 'EUR';
  }

  set currency(value) {
    this.setAttribute('currency', value);
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

  get timezone() {
    return this.getAttribute('timezone') || '';
  }

  set timezone(value) {
    this.setAttribute('timezone', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-city-of-the-week': TfCityOfTheWeek;
   }
}

customElements.define('tf-city-of-the-week', TfCityOfTheWeek);
