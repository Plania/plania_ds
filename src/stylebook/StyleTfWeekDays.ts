import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const weekDays: StyleVariantProps<'tf-week-days'> = {
  name: 'Week Days',
  tag: 'tf-week-days',
  description: 'Week Days',
  data: {},
};

const meta: StyleComponentProps<'tf-week-days'> = {
  ref: 'tf-week-days',
  tag: 'tf-week-days',
  description: 'Week Days',
  component: 'Plania Week Days',
  variants: [weekDays],
};

export const styleTfWeekDays = (styleBook: StyleBook) => styleBook.addComponent(meta);
