import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const dayDefault: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day default',
  data: {
    day: '1',
    state: 'default',
  },
};

const dayDisabled: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day default disabled',
  data: {
    day: '1',
    state: 'disabled',
  },
};

const daySelected: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day Selected',
  data: {
    day: '1',
    state: 'selectedDate',
  },
};

const dayStartEnd: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day Start End',
  data: {
    day: '1',
    state: 'startEndDate',
  },
};

const dayStart: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day Start',
  data: {
    day: '1',
    state: 'startDate',
  },
};

const dayEnd: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day End',
  data: {
    day: '1',
    state: 'endDate',
  },
};

const anotherMonth: StyleVariantProps<'tf-day'> = {
  name: 'Day',
  tag: 'tf-day',
  description: 'Day Another Month',
  data: {
    day: '1',
    state: 'differentMonth',
  },
};


const meta: StyleComponentProps<'tf-day'> = {
  ref: 'tf-day',
  tag: 'tf-day',
  description: 'Day',
  component: 'tf-day',
  variants: [
    anotherMonth,
    dayDefault,
    dayDisabled,
    daySelected,
    dayStartEnd,
    dayStart,
    dayEnd
  ],
};

export const styleTfDay = (styleBook: StyleBook) => styleBook.addComponent(meta);
