import { css, html, TfBase } from './TfBase.js';
import { tfIconNameMap } from './TfIcon.js';

const style = css`
  :host {
    position: relative;
    width: 100%;
    display: block;
    min-height: 10rem;
    
  }
  .card {
    display: flex;
    margin: 0;
    width: inherit;
    min-height: inherit;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 1.0s linear;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  h3 {
    color: var(--tf-sys-light-on-primary, var(--theme-sys-light-on-primary, #250127));
    font-family: Nunito;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.875rem;
  }

  tf-card-header-image {
    height: auto;
    min-width: 6rem;
  }

  tf-favorite {
    position: absolute;
    right: 0.5rem;
    bottom: 0.25rem;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;
    padding: 0.5rem;
    padding-right: 4rem;
    border-radius: 0.375rem;
    background: var(--tf-sys-light-surface, #fbfdfd);
  }

  .interest-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
    flex-wrap: wrap;
    font: var(--tf-label-small);
    color: var(--tf-sys-light-outline);
  }

  .activity-price-container {
    margin-top: auto;
  }

  .activity-price-container > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .activity-price-container > div > p {
    font: var(--tf-label-small);
    color: var(--tf-sys-light-outline);
  }

  #price {
    font: var(--tf-headline-5);
    color: var(--tf-sys-light-on-primary, #250127);
  }

  #alert {
    margin-left: 0.5rem;
    font: var(--tf-subhead2);
    color: var(--tf-sys-light-error, #ba1b1b);
  }

  .activity-location-container {
    display: flex;
    align-items: center;
    color: var(--tf-sys-light-outline);
  }

  .activity-location-container > tf-icon {
    width: 1rem;
    height: 1rem;
  }

  .activity-location-container > p {
    font: var(--tf-body-small);
  }

  .activity-star-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .activity-star-container > svg {
    width: 1rem;
    height: 1rem;
    margin-left: -0.3rem;
    color: var(--tf-sys-light-tertiary);
  }

  .activity-star-container > p {
    font: var(--tf-body-small);
  }

  .left-bar {
    min-width: 1.375rem;
    border-radius: 0.375rem 0rem 0rem 0.375rem;
    background: linear-gradient(135deg, #188aec 0%, #00aae3 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-bar > div {
    display: flex;
    width: 0.6875rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 0.125rem;
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  .left-bar > div > svg > circle {
    fill: #fff;
  }

  tf-icon[icon='close'] {
    position: absolute;
    right: 0.5rem;
    top: 0.25rem;
  }

  .face {
    backface-visibility: hidden;
  }

  .face.back {
    display: block;
    transform: rotateY(180deg);
    box-sizing: border-box;
    padding: 10px;
    color: white;
    text-align: center;
    background-color: #aaa;
  }

  .face.back.flipped {
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: all 1.0s linear;
    
  } 
`;

export class TfActivityCard extends TfBase {
  elements: {
    tfCardHeaderImage: HTMLElement;
    starContainer: Element;
    address: Element;
    h3: HTMLHeadingElement;
    interestContainer: Element;
    price: Element;
    alert: Element;
    card: Element;
    close: HTMLElement;
    back: HTMLElement;
  };

  point = html`
    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 1 1" fill="none">
      <circle cx="0.5" cy="0.5" r="0.5" fill="#828282" />
    </svg>
  `;
  resizeObserver: ResizeObserver;
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <section class='card face'>
          <section class='left-bar'>
            <div>
              ${this.point}
              ${this.point}
              ${this.point}
              ${this.point}
              ${this.point}
              ${this.point}
          </section>
          <tf-card-header-image src="/assets/image.jpg" badge="eco"></tf-card-header-image>
          <section class="main-container">
            <h3>Activity</h3>
            <div class="interest-container"></div>
            <div class="activity-star-container"></div>
            <div class="activity-location-container">
              <tf-icon icon="location-on"></tf-icon>
              <p id="address"></p>
            </div>
            <div class="activity-price-container">
              <p id="alert"></p>
              <div>
                <p id="price"></p>
                <p>/person</p>
              </div>
            </div>
            <tf-icon icon="close"></tf-icon>
            <tf-favorite color="red"></tf-favorite>
          </section>
        </section>
        <div class="back face">
          <p>This is nice for exposing more information about an image.</p>
          <p>Any content can go here.</p>
        </div>
      `);
    this.elements = {
      tfCardHeaderImage: this.shadowRoot?.querySelector('tf-card-header-image') as HTMLElement,
      starContainer: this.shadowRoot?.querySelector('.activity-star-container') as Element,
      address: this.shadowRoot?.querySelector('#address') as Element,
      h3: this.shadowRoot?.querySelector('h3') as HTMLHeadingElement,
      interestContainer: this.shadowRoot?.querySelector('.interest-container') as Element,
      price: this.shadowRoot?.querySelector('#price') as HTMLElement,
      alert: this.shadowRoot?.querySelector('#alert') as HTMLElement,
      card: this.shadowRoot?.querySelector('.card') as HTMLElement,
      close: this.shadowRoot?.querySelector('tf-icon[icon="close"]') as HTMLElement,
      back: this.shadowRoot?.querySelector('.back') as HTMLElement,
    };

    this.resizeObserver = new ResizeObserver((entries) => {
      const host = this.shadowRoot?.host as HTMLElement;
      host.style.setProperty('height', `${entries[0].contentRect.height}px`);
    });
  }

  connectedCallback() {
    this.resizeObserver.observe(this.elements.card);
    this.elements.close.addEventListener('click', () => {
      this.elements.card.classList.toggle('flipped');
      this.elements.back.classList.toggle('flipped');
    }
    );
  }

  static get observedAttributes() {
    return ['img', 'badge', 'rating', 'address', 'title', 'liked', 'interest', 'price', 'alert'];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    switch (_name) {
    case 'img':
      this.elements.tfCardHeaderImage.setAttribute('src', _newValue);
      break;
    case 'rating':
      this.updateRating(_newValue);
      break;
    case 'address':
      this.elements.address.textContent = _newValue;
      break;
    case 'title':
      this.elements.h3.textContent = _newValue;
      break;
    case 'interest':
      this.updateInterest(_newValue);
      break;
    case 'price':
      this.elements.price.textContent = _newValue;
      break;
    case 'alert':
      this.elements.alert.textContent = _newValue;
      break;
    }

    if (this.badge) {
      this.elements.tfCardHeaderImage.setAttribute('badge', _newValue);
    } else {
      this.elements.tfCardHeaderImage.removeAttribute('badge');
    }

    if (this.liked) {
      this.elements.tfCardHeaderImage.setAttribute('favorite', _newValue);
    } else {
      this.elements.tfCardHeaderImage.removeAttribute('favorite');
    }
  }

  updateRating = (_newValue: string) => {
    this.elements.starContainer.innerHTML = '';
    const value = parseFloat(_newValue);
    let j = 0;
    for (let i = 0; i < value - 1; i++) {
      this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['star-rate']);
    }
    if (value % 1 !== 0) {
      this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['half-star']);
      j++;
    } else {
      this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['star-rate']);
    }
    for (let i = 0; i < 5 - value - j; i++) {
      this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['star-outlined']);
    }
    this.elements.starContainer.insertAdjacentHTML('beforeend', `<p>${_newValue}</p>`);
  };

  updateInterest = (_newValue: string) => {
    this.elements.interestContainer.innerHTML = '';
    _newValue.split(',').forEach((interest, index) => {
      interest = interest.charAt(0).toUpperCase() + interest.slice(1);
      this.elements.interestContainer.insertAdjacentHTML(
        'beforeend',
        `${interest} ${index !== _newValue.split(',').length - 1 ? this.point : ''}`
      );
    });
  };

  get img() {
    return this.getAttribute('img') || '';
  }

  set img(value) {
    this.setAttribute('img', value ?? '');
  }

  get rating() {
    return this.getAttribute('rating') || '';
  }

  set rating(value) {
    this.setAttribute('rating', value ?? '');
  }

  get address() {
    return this.getAttribute('address') || '';
  }

  set address(value) {
    this.setAttribute('address', value ?? '');
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  set title(value) {
    this.setAttribute('title', value ?? '');
  }

  get liked() {
    return this.hasAttribute('liked');
  }

  set liked(value) {
    value && this.setAttribute('liked', '');
    !value && this.removeAttribute('liked');
  }

  get badge() {
    return this.hasAttribute('badge');
  }

  set badge(value) {
    value && this.setAttribute('badge', '');
    !value && this.removeAttribute('badge');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-activity-card': TfActivityCard;
  }
}

customElements.define('tf-activity-card', TfActivityCard);
