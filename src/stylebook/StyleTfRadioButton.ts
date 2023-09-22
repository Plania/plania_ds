import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const radioButtonDefault: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button unchecked',
  tag: 'tf-radio-button',
  description: 'Radio button unchecked',
  data: {
    name: 'radio',
    content: 'Radio button',
  },
};

const radioButtonDefaultChecked: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button checked',
  tag: 'tf-radio-button',
  description: 'Radio button checked.',
  data: {
    name: 'radio',
    checked: '',
    content: 'Radio button',
  },
};

const radioButtonDisabled: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button Disabled Unchecked',
  tag: 'tf-radio-button',
  description: 'Radio button disabled unchecked',
  data: {
    name: 'radio',
    disabled: '',
    content: 'Radio button',
  },
};

const radioButtonDisabledChecked: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button Disabled Checked',
  tag: 'tf-radio-button',
  description: 'Radio button disabled checked',
  data: {
    name: 'radio',
    disabled: '',
    checked: '',
    content: 'Radio button',
  },
};

const radioButtonError: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button Error Unchecked',
  tag: 'tf-radio-button',
  description: 'Radio button error unchecked',
  data: {
    name: 'radio',
    error: '',
    content: 'Radio button',
  },
};

const radioButtonErrorChecked: StyleVariantProps<'tf-radio-button'> = {
  name: 'Radio button Error Checked',
  tag: 'tf-radio-button',
  description: 'Radio button error checked',
  data: {
    name: 'radio',
    error: '',
    checked: '',
    content: 'Radio button',
  },
};

const meta: StyleComponentProps<'tf-radio-button'> = {
  ref: 'tf-radio-button',
  description: `Plania radio button component.
  
  To check the \`focus\`, click on the radio button or press tab.

  For an example, check \`tf-radio-button-group\` component.
  `,
  tag: 'tf-radio-button',
  component: 'Plania Radio button',
  variants: [
    radioButtonDefault,
    radioButtonDefaultChecked,
    radioButtonDisabled,
    radioButtonDisabledChecked,
    radioButtonError,
    radioButtonErrorChecked,
  ],
};

export const styleTfRadioButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
