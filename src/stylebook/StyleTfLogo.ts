import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultLogo: StyleVariantProps<'tf-logo'> = {
  name: 'default logo',
  tag: 'tf-logo',
  description: 'Default logo',
  data: {
    variant: 'alone',
    color: 'default',
  },
};

const textColorLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text color logo',
  tag: 'tf-logo',
  description: 'Logo with text color',
  data: {
    variant: 'text',
    color: 'color',
  },
};

const textInvertedLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text inverted logo',
  tag: 'tf-logo',
  description: 'Logo with text color inverted',
  data: {
    variant: 'text',
    color: 'inverted',
  },
};

const textMonoLogo: StyleVariantProps<'tf-logo'> = {
  name: 'text monochrome logo',
  tag: 'tf-logo',
  description: 'Logo with text color monochrome',
  data: {
    variant: 'text',
    color: 'monochrome',
  },
};

const mantraColorLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra color logo',
  tag: 'tf-logo',
  description: 'Logo with description color',
  data: {
    variant: 'mantra',
    color: 'color',
  },
};

const mantraInvertedLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra inverted logo',
  tag: 'tf-logo',
  description: 'Logo with description color inverted',
  data: {
    variant: 'mantra',
    color: 'inverted',
  },
};

const mantraMonoLogo: StyleVariantProps<'tf-logo'> = {
  name: 'mantra monochrome logo',
  tag: 'tf-logo',
  description: 'Logo with description color monochrome',
  data: {
    variant: 'mantra',
    color: 'monochrome',
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
