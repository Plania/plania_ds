import { StyleBook } from './StyleBook.js';
import { StyleVariantProps } from './StyleVariant.js';
import { StyleComponentProps } from './StyleComponent.js';

const tfCitySwiper: StyleVariantProps<'tf-city-swiper-item'> = {
  name: 'tf city swiper item',
  tag: 'tf-city-swiper-item',
  description: 'The swiper item component for swiper city',
  data: {
    content:
         '<img src="./assets/city_logos/paris.png" alt="Paris" slot="image"><p slot="title">Paris</p>',
  },
};

const meta: StyleComponentProps<'tf-city-swiper-item'> = {
  ref: 'tf-city-swiper-item',
  tag: 'tf-city-swiper-item',
  description: 'Tourisfair city swiper item component. It is used to showcase multiplie city',
  component: 'Tourisfair City Swiper Item',
  variants: [tfCitySwiper],
};

export const styleTfCitySwiperItem = (styleBook: StyleBook) => styleBook.addComponent(meta);
