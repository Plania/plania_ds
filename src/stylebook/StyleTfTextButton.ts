import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const textButton: StyleVariantProps<'tf-text-button'> = {
  name: 'text button',
  tag: 'tf-text-button',
  description: 'A text button.',
  data: {
    content: 'Text Button',
  },
};

const textButtonPrefixIcon: StyleVariantProps<'tf-text-button'> = {
  name: 'text button prefix icon',
  tag: 'tf-text-button',
  description: 'A text button with prefix icon.',
  data: {
    content: 'Text Button',
    'prefix-icon': "<tf-icon icon='arrow-forward-ios'></tf-icon>",
  },
};

const textButtonSuffixIcon: StyleVariantProps<'tf-text-button'> = {
  name: 'text button suffix icon',
  tag: 'tf-text-button',
  description: 'A text button with suffix icon.',
  data: {
    content: 'Text Button',
    'suffix-icon': 'icon',
  },
};

const meta: StyleComponentProps<'tf-text-button'> = {
  ref: 'tf-text-button',
  tag: 'tf-text-button',
  description: 'A text button.',
  component: 'Plania Text Button',
  variants: [textButton, textButtonPrefixIcon, textButtonSuffixIcon],
};

export const styleTfTextButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
