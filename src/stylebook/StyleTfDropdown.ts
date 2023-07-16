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
      <tf-text-input icon="true" status="default" pictogramme="account-circle" label="Label">
      </tf-text-input>
      <div slot="dropdown-options">
        <tf-dropdown-item>Option 1</tf-dropdown-item>
        <tf-dropdown-item>Option 2</tf-dropdown-item>
        <tf-dropdown-item>Option 3</tf-dropdown-item>
      </div>
    `,
  },
};

const TfDropdownDefault: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component with no icon.',
  data: {
    content: html`
    <tf-text-input icon="false" status="default" label="Label">
    </tf-text-input>
    <div slot="dropdown-options">
      <tf-dropdown-item>Option 1</tf-dropdown-item>
      <tf-dropdown-item>Option 2</tf-dropdown-item>
      <tf-dropdown-item>Option 3</tf-dropdown-item>
    </div>
    `,
  },
};

const TfDropdownDisabledIcon: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component disabled with icon.',
  data: {
    content: html`
    <div class="container">
      <tf-text-input
        icon="true"
        status="disabled"
        pictogramme="account-circle"
        label="Label"
        disabled
      ></tf-text-input>
    </div>
    <div slot="dropdown-options">
      <tf-dropdown-item>Option 1</tf-dropdown-item>
      <tf-dropdown-item>Option 2</tf-dropdown-item>
      <tf-dropdown-item>Option 3</tf-dropdown-item>
    </div>
    `,
  },
};

const TfDropdownDisabled: StyleVariantProps<'tf-dropdown'> = {
  name: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'A dropdown component disabled with no icon.',
  data: {
    content: html`
    <div class="container">
      <tf-text-input
        icon="false"
        status="disabled"
        pictogramme="account-circle"
        label="Label"
        disabled
      ></tf-text-input>
    </div>
    `,
  },
};

const meta: StyleComponentProps<'tf-dropdown'> = {
  ref: 'tf dropdown',
  tag: 'tf-dropdown',
  description: 'Tourisfair dropdown component. It is used to showcase a dropdown text',
  component: 'Tourisfair Dropdown',
  variants: [TfDropdownIconDefault, TfDropdownDefault, TfDropdownDisabledIcon, TfDropdownDisabled],
};

export const styleTfDropdown = (styleBook: StyleBook) => styleBook.addComponent(meta);
