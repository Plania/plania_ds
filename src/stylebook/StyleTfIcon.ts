import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const arrowForwardIosIcon: StyleVariantProps<'tf-icon'> = {
  name: 'Arrow forward ios icon',
  tag: 'tf-icon',
  description: 'Arrow forward ios icon',
  data: {
    icon: 'arrow-forward-ios',
  },
};

const arrowBackIosIcon: StyleVariantProps<'tf-icon'> = {
  name: 'Arrow back ios icon',
  tag: 'tf-icon',
  description: 'Arrow back ios icon',
  data: {
    icon: 'arrow-back-ios',
  },
};

const addIcon: StyleVariantProps<'tf-icon'> = {
  name: 'Add icon',
  tag: 'tf-icon',
  description: 'Add icon',
  data: {
    icon: 'add',
  },
};

const meta: StyleComponentProps<'tf-icon'> = {
  ref: 'tf-icon',
  tag: 'tf-icon',
  description: 'Plania icon component. It is used to showcase an icon',
  component: 'Plania Icon',
  variants: [arrowForwardIosIcon, arrowBackIosIcon, addIcon],
};

export const styleTfIcon = (styleBook: StyleBook) => styleBook.addComponent(meta);
