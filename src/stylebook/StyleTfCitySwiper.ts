import { StyleBook } from './StyleBook.js';
import { StyleVariantProps } from './StyleVariant.js';
import { StyleComponentProps } from './StyleComponent.js';

const tfCitySwiper: StyleVariantProps<'tf-city-swiper'> = {
  name: 'tf city swiper',
  tag: 'tf-city-swiper',
  description: 'A swiper component for cities',
  data: {
    content: `
    <tf-city-swiper-item>
      <img src="./assets/city_logos/paris.png" alt="Paris" slot="image">
      <p slot="title">Paris</p>
    </tf-city-swiper-item>
    <tf-city-swiper-item>
      <img src="./assets/city_logos/paris.png" alt="Paris" slot="image">
      <p slot="title">Paris</p>
    </tf-city-swiper-item>
    <tf-city-swiper-item>
      <img src="./assets/city_logos/paris.png" alt="Paris" slot="image">
      <p slot="title">Paris</p>
    </tf-city-swiper-item>
    `,
  },
};

const meta: StyleComponentProps<'tf-city-swiper'> = {
  ref: 'tf-city-swiper',
  tag: 'tf-city-swiper',
  description:
    'Tourisfair city swiper component. It is used to showcase multiplie city',
  component: 'Tourisfair City Swiper',
  variants: [tfCitySwiper],
};

export const styleTfCitySwiper = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
