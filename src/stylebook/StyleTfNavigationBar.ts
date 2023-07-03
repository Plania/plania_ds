import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const navigationBar1: StyleVariantProps<'tf-navigation-bar'> = {
  name: 'Navigation bar',
  tag: 'tf-navigation-bar',
  description: 'Navigation bar first item active',
  data: {
    active : '1',
  },
};

const navigationBar2: StyleVariantProps<'tf-navigation-bar'> = {
  name: 'Navigation bar',
  tag: 'tf-navigation-bar',
  description: 'Navigation bar second item active',
  data: {
    active : '2',
  },
};

const navigationBar3: StyleVariantProps<'tf-navigation-bar'> = {
  name: 'Navigation bar',
  tag: 'tf-navigation-bar',
  description: 'Navigation bar third item active',
  data: {
    active : '3',
  },
};

const navigationBar4: StyleVariantProps<'tf-navigation-bar'> = {
  name: 'Navigation bar',
  tag: 'tf-navigation-bar',
  description: 'Navigation bar fourth item active',
  data: {
    active : '4',
  },
};

const meta: StyleComponentProps<'tf-navigation-bar'> = {
  ref: 'tf-navigation-bar',
  description: 'Tourisfair navigation bar component.',
  tag: 'tf-navigation-bar',
  component: 'Tourisfair Navigation Bar',
  variants: [navigationBar1 , navigationBar2 , navigationBar3 , navigationBar4],
};

export const styleTfNavigationBar = (styleBook: StyleBook) => styleBook.addComponent(meta);