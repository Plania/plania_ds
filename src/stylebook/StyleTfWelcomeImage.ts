import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfWelcomePlan: StyleVariantProps<'tf-welcome-image'> = {
  name: 'Welcome plan',
  tag: 'tf-welcome-image',
  description: 'Welcome image for step plan',
  data: {
    step: 'plan',
  },
};

const tfWelcomeInspire: StyleVariantProps<'tf-welcome-image'> = {
  name: 'Welcome plan',
  tag: 'tf-welcome-image',
  description: 'Welcome image for step plan',
  data: {
    step: 'inspire',
  },
};

const tfWelcomeEnjoy: StyleVariantProps<'tf-welcome-image'> = {
  name: 'Welcome plan',
  tag: 'tf-welcome-image',
  description: 'Welcome image for step plan',
  data: {
    step: 'enjoy',
  },
};

const meta: StyleComponentProps<'tf-welcome-image'> = {
  ref: 'tf-welcome-image',
  tag: 'tf-welcome-image',
  description: 'Plania welcome image component. It is used to showcase an image for step plan',
  component: 'Plania Welcome Image',
  variants: [tfWelcomePlan, tfWelcomeInspire, tfWelcomeEnjoy],
};

export const styleTfWelcomeImage = (styleBook: StyleBook) => styleBook.addComponent(meta);
