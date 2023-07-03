import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const checkboxDefault: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox',
  tag: 'tf-checkbox',
  description: 'Checkbox',
  data: {
    status : 'default',
    content : 'Checkbox',
  },
};

const checkboxDefaultChecked: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox',
  tag: 'tf-checkbox',
  description: 'Checkbox',
  data: {
    status : 'default',
    checked : 'true',
    content : 'Checkbox',
  },
};

const checkboxDisabled: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox',
  tag: 'tf-checkbox',
  description: 'Checkbox',
  data: {
    status : 'disabled',
    content : 'Checkbox',
  },
};

const checkboxDisabledChecked: StyleVariantProps<'tf-checkbox'> = {
  name: 'Checkbox',
  tag: 'tf-checkbox',
  description: 'Checkbox',
  data: {
    status : 'disabled',
    checked : 'true',
    content : 'Checkbox',
  },
};



const meta : StyleComponentProps<'tf-checkbox'> = {
  ref: 'tf-checkbox',
  description: 'Tourisfair checkbox component. It is used to show a checkbox.',
  tag: 'tf-checkbox',
  component: 'Tourisfair Checkbox',
  variants: [
    checkboxDefault, 
    checkboxDefaultChecked,
    checkboxDisabled,
    checkboxDisabledChecked,
  ],
};

export const styleTfCheckbox = (styleBook: StyleBook) => styleBook.addComponent(meta);