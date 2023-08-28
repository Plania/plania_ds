import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const variant1: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 1',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 1',
  data: {
    variant: '1'
  }
};

const variant2: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 2',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 2',
  data: {
    variant: '2'
  }
};

const variant3: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 3',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 3',
  data: {
    variant: '3'
  }
};

const variant4: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 4',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 4',
  data: {
    variant: '4'
  }
};

const variant5: StyleVariantProps<'tf-stepper'> = {
  name: 'Stepper at Step 5',
  tag: 'tf-stepper',
  description: 'Indicates that we are on step 5',
  data: {
    variant: '5'
  }
};

const meta: StyleComponentProps<'tf-stepper'> = {
  ref: 'tf-stepper',
  tag: 'tf-stepper',
  description: 'A stepper component indicating the current step.',
  component: 'Tourisfair Stepper',
  variants: [variant1, variant2, variant3, variant4, variant5]
};

export const styleTfStepper = (styleBook: StyleBook) => styleBook.addComponent(meta);