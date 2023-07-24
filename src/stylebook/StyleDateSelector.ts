import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';


const defaultSingleDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Default Single Date Selector',
  tag: 'tf-date-selector',
  description: 'Default Single Date Selector',
  data: {
  },
};

const singleDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Single Date Selector',
  tag: 'tf-date-selector',
  description: 'Single Date Selector',
  data: {
    'variant': 'single',
    'start-label': 'Start Date'
  },
};

const singleDateSelectorError: StyleVariantProps<'tf-date-selector'> = {
  name: 'Date Selector Error',
  tag: 'tf-date-selector',
  description: 'Date Selector Error',
  data: {
    'variant': 'single',
    'status': 'error'
  },
};

const singleDateSelectorDisabled: StyleVariantProps<'tf-date-selector'> = {
  name: 'Date Selector Disabled',
  tag: 'tf-date-selector',
  description: 'Date Selector Disabled',
  data: {
    'variant': 'single',
    'status': 'disabled'
  },
};

const defaultIntervalDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Interval Date Selector',
  tag: 'tf-date-selector',
  description: 'Interval Date Selector with no attributes',
  data: {
    'variant': 'interval'
  },
};

const intervalDateSelector: StyleVariantProps<'tf-date-selector'> = {
  name: 'Interval Date Selector',
  tag: 'tf-date-selector',
  description: 'Interval Date Selector',
  data: {
    'variant': 'interval',
    'start-label': 'Start Date',
    'end-label': 'End Date'
  },
};

const intervalDateSelectorError: StyleVariantProps<'tf-date-selector'> = {
  name: 'Interval Date Selector Error',
  tag: 'tf-date-selector',
  description: 'Interval Date Selector Error',
  data: {
    'variant': 'interval',
    'status': 'error'
  },
};

const intervalDateSelectorDisabled: StyleVariantProps<'tf-date-selector'> = {
  name: 'Interval Date Selector Disabled',
  tag: 'tf-date-selector',
  description: 'Interval Date Selector Disabled',
  data: {
    'variant': 'interval',
    'status': 'disabled'
  },
};


const meta : StyleComponentProps<'tf-date-selector'> = {
  ref: 'tf-date-selector',
  description: 'Tourisfair Date Selector component. It is used to enter date.',
  tag: 'tf-date-selector',
  component: 'Tourisfair Date Selector',
  variants: [
    defaultSingleDateSelector,
    singleDateSelector,
    singleDateSelectorError,
    singleDateSelectorDisabled,
    defaultIntervalDateSelector,
    intervalDateSelector,
    intervalDateSelectorError,
    intervalDateSelectorDisabled,
  ],
};

export const styleTfDateSelector = (stylebook : StyleBook) => stylebook.addComponent(meta);
