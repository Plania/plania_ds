import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const notFavorite: StyleVariantProps<'tf-search-favorite'> = {
  name: 'Not Favorite',
  tag: 'tf-search-favorite',
  description: 'Favorite icon not enabled',
  data: {
    enabled: false,
  },
};

const favorite: StyleVariantProps<'tf-search-favorite'> = {
  name: 'Favorite',
  tag: 'tf-search-favorite',
  description: 'Favorite icon enabled',
  data: {
    enabled: true,
  },
};

const meta: StyleComponentProps<'tf-search-favorite'> = {
  ref: 'tf-search-favorite',
  tag: 'tf-search-favorite',
  description:
      'Tourisfair Favorite is a component that shows if activity is among user\'s favorite.',
  component: 'Tourisfair Favorite',
  variants: [notFavorite, favorite],
};

export const styleTfSearchFavorite = (styleBook: StyleBook) => styleBook.addComponent(meta);
