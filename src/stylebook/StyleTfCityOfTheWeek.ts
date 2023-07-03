import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';


const tfCityOfTheWeek: StyleVariantProps<'tf-city-of-the-week'> = {
  name: 'tf city of the week',
  tag: 'tf-city-of-the-week',
  description: 'A city of the week component',
  data: {
    content: 'short description',
    city: 'city name',
    currency: 'EUR',
    country: 'country',
    timezone: 'timezone',
    img : 'https://a.cdn-hotels.com/gdcs/production154/d1887/471414c9-f456-4041-83f5-d7b61063d287.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    rating : '4.5',
    views : '1000',
  },
};

const meta: StyleComponentProps<'tf-city-of-the-week'> = {
  ref: 'tf-city-of-the-week',
  tag: 'tf-city-of-the-week',
  description: 'Tourisfair city of the week component. It is used to showcase a city',
  component: 'Tourisfair City of the Week',
  variants: [tfCityOfTheWeek],
};

export const styleTfCityOfTheWeek = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
