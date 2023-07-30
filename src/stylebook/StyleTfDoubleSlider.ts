import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';
  
const DoubleSliderDefaultNoInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on default',
    data: {
      userinput : 'false',
      status: 'default',
    },
  };
  
  const DoubleSliderFocusNoInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on focus',
    data: {
      userinput : 'false',
      status: 'focus',
    },
  };const DoubleSliderDisabledNoInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on disabled ',
    data: {
      userinput : 'false',
      status: 'disabled',
    },
  };
  const DoubleSliderErrorNoInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on error',
    data: {
      userinput : 'false',
      status: 'error',
    },
  };
  const DoubleSliderDefaultWithInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on default',
    data: {
      userinput : 'true',
      status: 'default',
    },
  };
  
  const DoubleSliderFocusWithInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on focus',
    data: {
      userinput : 'true',
      status: 'focus',
    },
  };const DoubleSliderDisabledWithInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on disabled ',
    data: {
      userinput : 'true',
      status: 'disabled',
    },
  };
  const DoubleSliderErrorWithInput: StyleVariantProps<'tf-double-slider'> = {
    name: 'Double Slider with no input',
    tag: 'tf-double-slider',
    description: 'Double Slider on error',
    data: {
      userinput : 'true',
      status: 'error',
    },
  };
  const meta: StyleComponentProps<'tf-double-slider'> = {
    ref: 'tf-double-slider',
    tag: 'tf-double-slider',
    description: 'Tourisfair double slider component. ',
    component: 'Tourisfair Double Slider',
    variants: [
        DoubleSliderDefaultNoInput,
        DoubleSliderFocusNoInput,
        DoubleSliderDisabledNoInput,
        DoubleSliderErrorNoInput,
        DoubleSliderDefaultWithInput,
        DoubleSliderFocusWithInput,
        DoubleSliderDisabledWithInput,
        DoubleSliderErrorWithInput
      ],
  };
  
  export const styleTfDoubleSlider = (styleBook: StyleBook) => styleBook.addComponent(meta);