import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const SliderOnDefaultText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider on default text',
  tag: 'tf-simple-slider',
  description: 'Slider on default',
  data: {
    text : '',
    status: 'default',
  },
};

const SliderDisabledText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider disabled text',
  tag: 'tf-simple-slider',
  description: 'Slider disabled',
  data: {
    text : '',
    status: 'disabled',
  },
};

const SliderErrorText: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider error text',
  tag: 'tf-simple-slider',
  description: 'Slider error',
  data: {
    text : '',
    status: 'error',
  },
};

const SliderOnDefault: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider on default no text',
  tag: 'tf-simple-slider',
  description: 'Slider on default',
  data: {
    status: 'default',
  },
};

const SliderDisabled: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider disabled no text',
  tag: 'tf-simple-slider',
  description: 'Slider disabled',
  data: {
    status: 'disabled',
  },
};

const SliderError: StyleVariantProps<'tf-simple-slider'> = {
  name: 'Slider error no text',
  tag: 'tf-simple-slider',
  description: 'Slider error',
  data: {
    status: 'error',
  },
};


const meta: StyleComponentProps<'tf-simple-slider'> = {
  ref: 'tf-slider',
  tag: 'tf-simple-slider',
  description: 'Tourisfair slider component',
  component: 'Tourisfair Slider Component',
  variants: [ SliderOnDefaultText, SliderDisabledText , SliderErrorText , SliderOnDefault, SliderDisabled , SliderError ],
};

export const styleTfSimpleSlider = (styleBook: StyleBook) => styleBook.addComponent(meta);
