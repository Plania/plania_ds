import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TypeaheadDefault: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead default',
  tag: 'tf-typeahead',
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

const TypeaheadIcon: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead icon',
  tag: 'tf-typeahead',
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

const TypeaheadDefaultOpen: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead default',
  tag: 'tf-typeahead',
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

const TypeaheadIconOpen: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead icon',
  tag: 'tf-typeahead',
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

const TypeaheadDisabled: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead icon',
  tag: 'tf-typeahead',
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

const TypeaheadDisabledIcon: StyleVariantProps<'tf-typeahead'> = {
  name: 'Typeahead icon',
  tag: 'tf-typeahead',
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

const meta: StyleComponentProps<'tf-typeahead'> = {
  ref: 'tf-typeahead',
  tag: 'tf-typeahead',
  description: 'A typeahead.',
  component: 'Plania Typeahead',
  variants: [
    TypeaheadDefault,
    TypeaheadIcon,
    TypeaheadDefaultOpen,
    TypeaheadIconOpen,
    TypeaheadDisabled,
    TypeaheadDisabledIcon,
  ],
};

export const styleTfTypeahead = (styleBook: StyleBook) => styleBook.addComponent(meta);
