import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

// Define the different style variants for the TfStepper component

const stepperStart: StyleVariantProps<'tf-stepper'> = {
  name: 'Start Step',
  tag: 'tf-stepper',
  description: 'Indicate the starting step of a sequence.',
  data: {
    step: 'start',
  },
};

const stepperIntermediate: StyleVariantProps<'tf-stepper'> = {
  name: 'Intermediate Step',
  tag: 'tf-stepper',
  description: 'Indicate a step in the middle of a sequence.',
  data: {
    step: 'intermediate',
  },
};

const stepperEnd: StyleVariantProps<'tf-stepper'> = {
  name: 'End Step',
  tag: 'tf-stepper',
  description: 'Indicate the ending step of a sequence.',
  data: {
    step: 'end',
  },
};

// Metadata for the TfStepper component
const meta: StyleComponentProps<'tf-stepper'> = {
  ref: 'tf-stepper',
  tag: 'tf-stepper',
  description: 'A component that showcases steps in a sequence.',
  component: 'Tourisfair Stepper',
  variants: [stepperStart, stepperIntermediate, stepperEnd],
};

// Function to add the Stepper component to the StyleBook
export const styleTfStepper = (styleBook: StyleBook) => styleBook.addComponent(meta);
