import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultCardHeaderImage: StyleVariantProps<'tf-search-card-header-image'> = {
  name: 'Default Card Header Image',
  tag: 'tf-search-card-header-image',
  description: '',
  data: {
    src: '/assets/image.png',
  },
};

const meta: StyleComponentProps<'tf-search-card-header-image'> = {
  ref: 'tf-search-card-header-image',
  tag: 'tf-search-card-header-image',
  description: 'Plania card header image component, showing the header image of a card.',
  component: 'Plania Card Header Image',
  variants: [defaultCardHeaderImage],
};

export const styleTfSearchCardHeaderImage = (styleBook: StyleBook) => styleBook.addComponent(meta);
