import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const notFavorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Not Favorite',
  tag: 'tf-favorite',
  description: 'Favorite icon not enabled',
  data: {},
};

const favorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Favorite',
  tag: 'tf-favorite',
  description: 'Favorite icon enabled',
  data: {
    enabled: '',
  },
};

const meta: StyleComponentProps<'tf-favorite'> = {
  ref: 'tf-favorite',
  tag: 'tf-favorite',
  description: "Plania Favorite is a component that shows if activity is among user's favorite.",
  component: 'Plania Favorite',
  variants: [notFavorite, favorite],
};

export const styleTfFavorite = (styleBook: StyleBook) => styleBook.addComponent(meta);
