import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const navigationItem: StyleVariantProps<'tf-navigation-item'> = {
  name: 'Navigation item',
  tag: 'tf-navigation-item',
  description: 'Navigation item',
  data: {
    icon: 'account-circle',
    content : 'Account',
  },
};

const navigationItemActive: StyleVariantProps<'tf-navigation-item'> = {
  name: 'Navigation item active',
  tag: 'tf-navigation-item',
  description: 'Navigation item active',
  data: {
    icon : 'account-circle',
    content : 'Account',
    active : 'true',
  },
};

const meta: StyleComponentProps<'tf-navigation-item'> = {
  ref: 'tf-navigation-item',
  description: 'Tourisfair navigation item component. It is used to show a navigation item.',
  tag: 'tf-navigation-item',
  component: 'Tourisfair Navigation Item',
  variants: [navigationItem, navigationItemActive],
};

export const styleTfNavigationItem = (styleBook: StyleBook) => styleBook.addComponent(meta);