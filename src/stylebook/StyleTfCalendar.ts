import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const calendar: StyleVariantProps<'tf-calendar'> = {
  name: 'Calendar picker',
  tag: 'tf-calendar',
  description: 'Calendar picker',
  data: {},
};

const calendarStyle: StyleComponentProps<'tf-calendar'> = {
  ref: 'Calendar picker',
  tag: 'tf-calendar',
  description: 'Calendar picker',
  component: 'Plania Calendar',
  variants: [calendar],
};

export const styleTfCalendar = (styleBook: StyleBook) => styleBook.addComponent(calendarStyle);
