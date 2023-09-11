import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const dropDownListButton: StyleVariantProps<'tf-dropdown-list-button'> = {
  name: 'drop down list button',
  tag: 'tf-dropdown-list-button',
  description: 'A button that opens a drop down list.',
  data: {
    open: 'true',
    content: 'button',
  },
};

const dropDownListButtonClosed: StyleVariantProps<'tf-dropdown-list-button'> = {
  name: 'drop down list button closed',
  tag: 'tf-dropdown-list-button',
  description: 'A button that closes a drop down list.',
  data: {
    open: 'false',
    content: 'button',
  },
};

const meta: StyleComponentProps<'tf-dropdown-list-button'> = {
  ref: 'tf-dropdown-list-button',
  tag: 'tf-dropdown-list-button',
  description: 'A button that opens or close a drop down list.',
  component: 'Plania Drop Down List Button',
  variants: [dropDownListButton, dropDownListButtonClosed],
};

export const styleTfDropDownListButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
