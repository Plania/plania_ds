import { css, html, TfBase } from './TfBase.js';

const style = css`
  

  ::slotted(img) {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 0.2rem solid #ffff;
  }

  .swiper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export class TfCitySwiperItem extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
    (this.shadowRoot.innerHTML += html`
      <style>
        ${style}
      </style>
      <div class="swiper-item">
        <slot name="image"></slot>
        <slot name="title"></slot>
      </div>
    `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-city-swiper-item': TfCitySwiperItem;
  }
}

customElements.define('tf-city-swiper-item', TfCitySwiperItem);
