import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TypeAHeadDefault: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead default',
  tag: 'tf-type-a-head',
  description: 'A typeahead default.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'default',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
  },
};

const TypeAHeadIcon: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead icon',
  tag: 'tf-type-a-head',
  description: 'A typeahead icon.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'default',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
    icon: '',
  },
};

const TypeAHeadDefaultOpen: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead default',
  tag: 'tf-type-a-head',
  description: 'A typeahead default.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'default',
    open: '',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
  },
};

const TypeAHeadIconOpen: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead icon',
  tag: 'tf-type-a-head',
  description: 'A typeahead icon.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'default',
    open: '',
    icon: '',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
  },
};

const TypeAHeadDisabled: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead icon',
  tag: 'tf-type-a-head',
  description: 'A typeahead disabled.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'disabled',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
  },
};

const TypeAHeadDisabledIcon: StyleVariantProps<'tf-type-a-head'> = {
  name: 'typeahead icon',
  tag: 'tf-type-a-head',
  description: 'A typeahead disabled.',
  data: {
    label: 'Typeahead',
    value: 'Typeahead',
    status: 'disabled',
    icon: '',
    content: `
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="bottom">Typeahead Item Top</tf-typeahead-item>
    <tf-typeahead-item thumb="https://picsum.photos/48/48" side="top">Typeahead Item Bottom</tf-typeahead-item>
    `,
  },
};

const meta: StyleComponentProps<'tf-type-a-head'> = {
  ref: 'tf-type-a-head',
  tag: 'tf-type-a-head',
  description: 'A typeahead.',
  component: 'Plania Typeahead',
  variants: [
    TypeAHeadDefault,
    TypeAHeadIcon,
    TypeAHeadDefaultOpen,
    TypeAHeadIconOpen,
    TypeAHeadDisabled,
    TypeAHeadDisabledIcon,
  ],
};

export const styleTfTypeAHead = (styleBook: StyleBook) => styleBook.addComponent(meta);
