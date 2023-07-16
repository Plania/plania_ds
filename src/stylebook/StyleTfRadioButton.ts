import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const radioButtonDefault: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio Button',
  tag: 'tf-radio-button',
  description: 'Radio Button default not checked',
  data: {
    status: 'default',
    content: 'label',
  },
};

const radioButtonDefaultChecked: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio Button',
  tag: 'tf-radio-button',
  description: 'Radio Button default checked',
  data: {
    status: 'default',
    checked: 'true',
    content: 'label',
  },
};

const radioButtonDisabled: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio Button',
  tag: 'tf-radio-button',
  description: 'Radio Button disabled not checked',
  data: {
    status: 'disabled',
    content: 'label',
  },
};

const radioButtonDisabledChecked: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio Button',
  tag: 'tf-radio-button',
  description: 'Radio Button disabled checked',
  data: {
    status: 'disabled',
    checked: 'true',
    content: 'label',
  },
};

const meta: StyleComponentProps<'tf-radio-button'> = {
  ref: 'tf-radio-button',
  description: 'Tourisfair radio button component. It is used to show a radio button.',
  tag: 'tf-radio-button',
  component: 'Tourisfair Radio Button',
  variants: [
    radioButtonDefault,
    radioButtonDefaultChecked,
    radioButtonDisabled,
    radioButtonDisabledChecked,
  ],
};

export const styleTfRadioButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
