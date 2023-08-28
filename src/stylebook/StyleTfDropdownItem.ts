import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const dropdownItem: StyleVariantProps<'tf-dropdown-item'> = {
  name: 'dropdown item',
  tag: 'tf-dropdown-item',
  description: 'A dropdown item.',
  data: {
    content: 'Label',
  },
};

const meta: StyleComponentProps<'tf-dropdown-item'> = {
  ref: 'tf-dropdown-item',
  tag: 'tf-dropdown-item',
  description: 'A dropdown item.',
  component: 'Plania Dropdown Item',
  variants: [dropdownItem],
};

export const styleTfDropdownItem = (styleBook: StyleBook) => styleBook.addComponent(meta);
