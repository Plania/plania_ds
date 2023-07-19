import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const notSelectedStep : StyleVariantProps<'tf-step'> = {
  name: 'Small Inactive Step 1',
  tag: 'tf-step',
  description: 'Not selected step',
  data: {
    variant: 'primary',
    size: 'small',
    icon : 'add',
    step: 1
  },
};

// const SelectedStep : StyleVariantProps<'tf-step'> = {
//   name: 'Small Inactive Step 2',
//   tag: 'tf-step',
//   description: 'A small, inactive step circle, representing the second step.',
//   data: {
//     step: '2',
//     currentStep: '2',
//     displayCircle: '2',
//   },
// };


const meta: StyleComponentProps<'tf-step'> = {
  ref: 'tf-step',
  tag: 'tf-step',
  description: 'A generic step with 3 variants: primary, secondary and tertiary.',
  component: 'Tourisfair Step',
  variants: [
    notSelectedStep,
    
  ],
};

export const styleTfStep = (styleBook: StyleBook) => styleBook.addComponent(meta);
