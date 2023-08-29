import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TypeAHeadItemTop: StyleVariantProps<'tf-typeahead-item'> = {
  name: 'typeahead item top',
  tag: 'tf-typeahead-item',
  description: 'A typeahead item top.',
  data: {
    content: 'Typeahead Item Top',
    thumb: 'https://picsum.photos/48/48',
    side: 'top',
  },
};

const TypeAHeadItemBottom: StyleVariantProps<'tf-typeahead-item'> = {
  name: 'typeahead item bottom',
  tag: 'tf-typeahead-item',
  description: 'A typeahead item bottom.',
  data: {
    content: 'Typeahead Item Bottom',
    thumb: 'https://picsum.photos/48/48',
    side: 'bottom',
  },
};

const meta: StyleComponentProps<'tf-typeahead-item'> = {
  ref: 'tf-typeahead-item',
  tag: 'tf-typeahead-item',
  description: 'A typeahead item.',
  component: 'Plania Typeahead Item',
  variants: [TypeAHeadItemTop, TypeAHeadItemBottom],
};

export const styleTfTypeAHeadItem = (styleBook: StyleBook) => styleBook.addComponent(meta);
