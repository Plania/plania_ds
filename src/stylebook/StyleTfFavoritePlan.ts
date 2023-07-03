import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TfFavoritePlans: StyleVariantProps<'tf-favorite-plan'> = {
  name: 'tf favorite plan',
  tag: 'tf-favorite-plan',
  description: 'A favorite plan component',
  data: {
    city: 'city name',
    dates: '04/06/22 - 04/10/22',
    country: 'country',
    img : 'https://a.cdn-hotels.com/gdcs/production154/d1887/471414c9-f456-4041-83f5-d7b61063d287.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'
  },
};

const meta: StyleComponentProps<'tf-favorite-plan'> = {
  ref: 'tf-favorite-plan',
  tag: 'tf-favorite-plan',
  description: 'Tourisfair favorite plan component. It is used to showcase a favorite plan',
  component: 'Tourisfair Favorite Plan',
  variants: [TfFavoritePlans],
};

export const styleTfFavoritePlan = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
