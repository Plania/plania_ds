import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';
import { html } from '../components/TfBase.js';

const TfDropdownIconDefault: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component with icon.',
  data: {
    content: html`
      <div slot="dropdown-options">
        <tf-dropdown-item>Option 1</tf-dropdown-item>
        <tf-dropdown-item>Option 2</tf-dropdown-item>
        <tf-dropdown-item>Option 3</tf-dropdown-item>
        <tf-dropdown-item>Option 4</tf-dropdown-item>
      </div>
    `,
    icon: 'true',
    pictogramme: 'account-circle',
    label: 'Label',
  },
};

const TfDropdownDefault: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component with no icon.',
  data: {
    content: html`
      <div slot="dropdown-options">
        <tf-dropdown-item>Option 1</tf-dropdown-item>
        <tf-dropdown-item>Option 2</tf-dropdown-item>
        <tf-dropdown-item>Option 3</tf-dropdown-item>
      </div>
    `,
    icon: 'false',
    pictogramme: '',
    label: 'Label',
  },
};

const TfDropdownDisabledIcon: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component disabled with icon.',
  data: {
    disabled: '',
    icon: 'true',
    pictogramme: 'account-circle',
    label: 'Label',
  },
};

const TfDropdownDisabled: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component disabled with no icon.',
  data: {
    disabled: '',
    icon: 'false',
    pictogramme: '',
    label: 'Label',
  },
};

const meta: StyleComponentProps<'tf-dropdown'> = {
  ref: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'Plania dropdown component. It is used to showcase a dropdown text',
  component: 'Plania Dropdown',
  variants: [TfDropdownIconDefault, TfDropdownDefault, TfDropdownDisabledIcon, TfDropdownDisabled],
};

export const styleTfDropdown = (styleBook: StyleBook) => styleBook.addComponent(meta);
