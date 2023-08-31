import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const SliderOnDefaultText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider on default text',
  tag: 'tf-simple-slider',
  description: 'Slider on default',
  data: {
    text: 'true',
    status: 'default',
  },
};

const SliderDisabledText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider disabled text',
  tag: 'tf-simple-slider',
  description: 'Slider disabled',
  data: {
    text: 'true',
    status: 'disabled',
  },
};
const SliderFocusText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider focus text',
  tag: 'tf-simple-slider',
  description: 'Slider focused',
  data: {
    text: 'true',
    status: 'focus',
  },
};

const SliderErrorText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider error text',
  tag: 'tf-simple-slider',
  description: 'Slider error',
  data: {
    text: 'true',
    status: 'error',
  },
};

const SliderOnDefault: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider on default no text',
  tag: 'tf-simple-slider',
  description: 'Slider on default',
  data: {
    text: 'false',
    status: 'default',
  },
};

const SliderDisabled: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider disabled no text',
  tag: 'tf-simple-slider',
  description: 'Slider disabled',
  data: {
    text: 'false',
    status: 'disabled',
  },
};
const SliderFocus: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider focus text',
  tag: 'tf-simple-slider',
  description: 'Slider focused',
  data: {
    text: 'false',
    status: 'focus',
  },
};

const SliderError: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider error no text',
  tag: 'tf-simple-slider',
  description: 'Slider error',
  data: {
    text: 'false',
    status: 'error',
  },
};

const meta: StyleComponentProps<'tf-simple-slider'> = {
  ref: 'tf-slider',
  tag: 'tf-simple-slider',
  description: 'Plania slider component',
  component: 'Plania Slider Component',
  variants: [
    SliderOnDefaultText,
    SliderFocusText,
    SliderDisabledText,
    SliderErrorText,
    SliderOnDefault,
    SliderFocus,
    SliderDisabled,
    SliderError,
  ],
};

export const styleTfSimpleSlider = (styleBook: StyleBook) => styleBook.addComponent(meta);
