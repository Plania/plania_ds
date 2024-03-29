import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultCardHeaderImage: StyleVariantProps<'tf-card-header-image'> = {
  name: 'Card Header image',
  tag: 'tf-card-header-image',
  description: 'Card header image without eco badge and not in favorite',
  data: {
    src: '/assets/image.png',
    eco: 'none',
  },
};

const ecoNotFavorite: StyleVariantProps<'tf-card-header-image'> = {
  name: 'Card Header image',
  tag: 'tf-card-header-image',
  description: 'Card header image with eco badge and not in favorite',
  data: {
    src: '/assets/image.png',
    badge: 'eco',
  },
};

const noEcoFavorite: StyleVariantProps<'tf-card-header-image'> = {
  name: 'Card Header image',
  tag: 'tf-card-header-image',
  description: 'Card header image without eco badge and in favorite',
  data: {
    src: '/assets/image.png',
    favorite: '',
  },
};

const ecoFavorite: StyleVariantProps<'tf-card-header-image'> = {
  name: 'Card Header image',
  tag: 'tf-card-header-image',
  description: 'Card header image with eco badge and in favorite',
  data: {
    src: '/assets/image.png',
    badge: 'eco',
    favorite: '',
  },
};

const meta: StyleComponentProps<'tf-card-header-image'> = {
  ref: 'tf-card-header-image',
  tag: 'tf-card-header-image',
  description: 'Plania card header image component, showing the header image of a card.',
  component: 'Plania Card Header Image',
  variants: [defaultCardHeaderImage, ecoNotFavorite, noEcoFavorite, ecoFavorite],
};

export const styleTfCardHeaderImage = (styleBook: StyleBook) => styleBook.addComponent(meta);
