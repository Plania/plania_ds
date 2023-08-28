import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const step1: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 1',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 1',
  data: {
    steps: '5',
    current: '1',
  },
};

const step2: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 2',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 2',
  data: {
    steps: '5',
    current: '2',
  },
};

const step3: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 3',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 3',
  data: {
    steps: '5',
    current: '3',
  },
};

const step4: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 4',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 4',
  data: {
    steps: '5',
    current: '4',
  },
};

const step5: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 5',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 5',
  data: {
    steps: '5',
    current: '5',
  },
};

const step73: StyleVariantProps<'tf-stepper'> = {
  name: '7 steps Stepper at Step 3',
  tag: 'tf-stepper',
  description: 'Stepper with 7 steps at step 3',
  data: {
    steps: '7',
    current: '3',
  },
};

const meta: StyleComponentProps<'tf-stepper'> = {
  ref: 'tf-stepper',
  tag: 'tf-stepper',
  description: 'A stepper component indicating the current step.',
  component: 'Tourisfair Stepper',
  variants: [step1, step2, step3, step4, step5, step73],
};

export const styleTfStepper = (styleBook: StyleBook) => styleBook.addComponent(meta);
