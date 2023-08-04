import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const notSelectedStep: StyleVariantProps<'tf-step'> = {
  name: 'Small Inactive Step 1',
  tag: 'tf-step',
  description: 'Not selected step',
  data: {
    step: 1,
    variant: 'not-selected',
  },
};

const selectedStep: StyleVariantProps<'tf-step'> = {
  name: 'Small Active Step 1',
  tag: 'tf-step',
  description: 'A small, active step circle',
  data: {
    step: 1,
    variant: 'selected',
  },
};

const meta: StyleComponentProps<'tf-step'> = {
  ref: 'tf-step',
  tag: 'tf-step',
  description: 'A generic step with 2 variants: not selected and selected.',
  component: 'Tourisfair Step',
  variants: [notSelectedStep, selectedStep],
};

export const styleTfStep = (styleBook: StyleBook) => styleBook.addComponent(meta);