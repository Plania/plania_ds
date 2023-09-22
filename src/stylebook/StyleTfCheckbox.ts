import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const checkboxDefault: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox unchecked',
  tag: 'tf-checkbox',
  description: 'Checkbox unchecked.',
  data: {
    content: 'Checkbox',
  },
};

const checkboxDefaultChecked: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox checked',
  tag: 'tf-checkbox',
  description: 'Checkbox checked.',
  data: {
    checked: '',
    content: 'Checkbox',
  },
};

const checkboxDisabled: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox Disabled Unchecked',
  tag: 'tf-checkbox',
  description: 'Checkbox disabled unchecked',
  data: {
    disabled: '',
    content: 'Checkbox',
  },
};

const checkboxDisabledChecked: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox Disabled Checked',
  tag: 'tf-checkbox',
  description: 'Checkbox disabled checked',
  data: {
    disabled: '',
    checked: '',
    content: 'Checkbox',
  },
};

const checkboxError: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox Error Unchecked',
  tag: 'tf-checkbox',
  description: 'Checkbox error unchecked',
  data: {
    error: '',
    content: 'Checkbox',
  },
};

const checkboxErrorChecked: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox Error Checked',
  tag: 'tf-checkbox',
  description: 'Checkbox error checked',
  data: {
    error: '',
    checked: '',
    content: 'Checkbox',
  },
};

const meta: StyleComponentProps<'tf-checkbox'> = {
  ref: 'tf-checkbox',
  description: `Plania checkbox component.
  
  To check the \`focus\`, click on the checkbox or press tab`,
  tag: 'tf-checkbox',
  component: 'Plania Checkbox',
  variants: [
    checkboxDefault,
    checkboxDefaultChecked,
    checkboxDisabled,
    checkboxDisabledChecked,
    checkboxError,
    checkboxErrorChecked,
  ],
};

export const styleTfCheckbox = (styleBook: StyleBook) => styleBook.addComponent(meta);
