import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TypeaheadItemTop: StyleVariantProps<'tf-typeahead-item'> = {
  name: 'typeahead item top',
  tag: 'tf-typeahead-item',
  description: 'A typeahead item top.',
  data: {
    content: 'Typeahead Item Top',
    thumb: 'https://picsum.photos/48/48',
    side: 'top',
  },
};

const TypeaheadItemBottom: StyleVariantProps<'tf-typeahead-item'> = {
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
  variants: [TypeaheadItemTop, TypeaheadItemBottom],
};

export const styleTfTypeaheadItem = (styleBook: StyleBook) => styleBook.addComponent(meta);
