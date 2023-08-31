import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfWeekDefault: StyleVariantProps<'tf-week'> = {
  name: 'default',
  tag: 'tf-week',
  description: 'Default week',
  data: {},
};

const tfWeekDisabled: StyleVariantProps<'tf-week'> = {
  name: 'disabled',
  tag: 'tf-week',
  description: 'Disabled day before today',
  data: {
    disabledpreviousdays: 'true',
    year: '2023',
    month: 'July',
    week: '2',
  },
};

const meta: StyleComponentProps<'tf-week'> = {
  ref: 'tf-week',
  tag: 'tf-week',
  description: 'Week',
  component: 'Plania Week',
  variants: [tfWeekDefault, tfWeekDisabled],
};

export const styleTfWeek = (styleBook: StyleBook) => styleBook.addComponent(meta);
