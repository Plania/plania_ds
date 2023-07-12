import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const singleDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Single Date Selector',
  tag: 'tf-date-selector',
  description: 'Single Date Selector',
  data: {
    'variant': 'single'
  },
};

const intervalDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Interval Date Selector',
  tag: 'tf-date-selector',
  description: 'Interval Date Selector',
  data: {
    'variant': 'interval'
  },
};

const meta : StyleComponentProps<'tf-date-selector'> = {
  ref: 'tf-date-selector',
  description: 'Tourisfair Date Selector component. It is used to enter date.',
  tag: 'tf-date-selector',
  component: 'Tourisfair Date Selector',
  variants: [
    singleDateSelector,
    intervalDateSelector
  ],
};

export const styleTfDateSelector = (stylebook : StyleBook) => stylebook.addComponent(meta);
