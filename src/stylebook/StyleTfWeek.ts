import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfWeekDefault: StyleVariantProps<'tf-week'> = {
  name: 'default',
  tag: 'tf-week',
  description: 'Default week',
  data: {
  },
};

const meta: StyleComponentProps<'tf-week'> = {
  ref: 'tf-week',
  tag: 'tf-week',
  description: 'Week',
  component: 'Tourisfair Week',
  variants: [tfWeekDefault],
};

export const styleTfWeek = (styleBook: StyleBook) => styleBook.addComponent(meta);