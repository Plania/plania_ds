import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const MonthHeader : StyleVariantProps<'tf-month-header'> = {
  name: 'Month Header',
  tag: 'tf-month-header',
  description: 'A month header component.',
  data: {
    month : 'January',
    year : '2020',
  },
};

const meta : StyleComponentProps<'tf-month-header'> = {
  ref: 'tf-month-header',
  description: 'Tourisfair Month Header component. It is used to show month and year.',
  tag: 'tf-month-header',
  component: 'Tourisfair Month Header',
  variants: [
    MonthHeader,
  ],
};

export const StyleTfMonthHeader = (stylebook : StyleBook) => stylebook.addComponent(meta);
