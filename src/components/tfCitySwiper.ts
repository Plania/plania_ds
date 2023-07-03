import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }

   .swiper-container {
      position: relative;
   }

   .swiper-img {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      position: relative;
      transition: all 0.5s ease-in-out;
   }

   .swiper-img::-webkit-scrollbar {
      display: none;
   }

   ::slotted(div > img) {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 0.2rem solid #ffff;
   }

   .button {
      background-color: #ffff;
      border-radius: 50%;
      margin: auto;
      border: none;
      width: fit-content;
      height: fit-content;
      padding: 1px;
      z-index: 2;
   }

   .back-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
   }

   .next-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
   }
`;

export class TfCitySwiper extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="swiper-container">
               <button class="back-button button" id="slideLeft">
                  <tf-icon icon="arrow-back-ios"></tf-icon>
               </button>
               <div class="swiper-img">
                  <slot></slot>
               </div>
               <button class="next-button button" id="slideRight">
                  <tf-icon icon="arrow-forward-ios"></tf-icon>
               </button>
            </section>
         `);
  }

  connectedCallback() {
    const slideLeft = this.shadowRoot?.querySelector('#slideLeft');
    const slideRight = this.shadowRoot?.querySelector('#slideRight');

    slideLeft?.addEventListener('click', () => {
      this.shadowRoot?.querySelector('.swiper-img')?.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    });

    slideRight?.addEventListener('click', () => {
      this.shadowRoot?.querySelector('.swiper-img')?.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    });
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-city-swiper': TfCitySwiper;
   }
}

customElements.define('tf-city-swiper', TfCitySwiper);
