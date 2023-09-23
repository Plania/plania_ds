import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultLogo: StyleVariantProps<'tf-logo'> = {
  name: 'default logo',
  tag: 'tf-logo',
  description: 'Default logo',
  data: {
    type: 'alone',
  },
};

const textColorLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text color logo',
  tag: 'tf-logo',
  description: 'Logo with text color',
  data: {
    type: 'text',
    color: 'color',
  },
};

const textInvertedLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text inverted logo',
  tag: 'tf-logo',
  description: 'Logo with text color inverted',
  data: {
    type: 'text',
    color: 'inverted',
  },
};

const textMonoLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text monochrome logo',
  tag: 'tf-logo',
  description: 'Logo with text color monochrome',
  data: {
    type: 'text',
    color: 'mono',
  },
};

const mantraColorLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra color logo',
  tag: 'tf-logo',
  description: 'Logo with description color',
  data: {
    type: 'mantra',
    color: 'color',
  },
};

const mantraInvertedLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra inverted logo',
  tag: 'tf-logo',
  description: 'Logo with description color inverted',
  data: {
    type: 'mantra',
    color: 'inverted',
  },
};

const mantraMonoLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra monochrome logo',
  tag: 'tf-logo',
  description: 'Logo with description color monochrome',
  data: {
    type: 'mantra',
    color: 'mono',
  },
};

const meta: StyleComponentProps<'tf-logo'> = {
  ref: 'tf-logo',
  tag: 'tf-logo',
  description: 'Plania Logo component',
  component: 'Logo Plania',
  variants: [
    defaultLogo,
    textColorLogo,
    textInvertedLogo,
    textMonoLogo,
    mantraColorLogo,
    mantraInvertedLogo,
    mantraMonoLogo,
  ],
};

export const styleTfLogo = (styleBook: StyleBook) => styleBook.addComponent(meta);
