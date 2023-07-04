import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const calendar : StyleVariantProps<'tf-calendar'> = {
  name: 'Calendar picker',
  tag: 'tf-calendar',
  description: 'Calendar picker',
  data: {
    month: 'May',
    year: '2023',
  },
};

const calendarModal : StyleVariantProps<'tf-calendar'> = {
  name: 'Calendar picker',
  tag: 'tf-calendar',
  description: 'Calendar picker with modal',
  data: {
    month: 'May',
    year: '2023',
    modal: 'true',
  },
};

const calendarStyle : StyleComponentProps<'tf-calendar'> = {
  ref: 'Calendar picker',
  tag: 'tf-calendar',
  description: 'Calendar picker',
  component: 'Tourisfair Calendar',
  variants: [calendar, calendarModal],
};



export const styleTfCalendar = (styleBook: StyleBook) => styleBook.addComponent(calendarStyle);
        