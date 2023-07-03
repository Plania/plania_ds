import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const SliderOnDefault: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age on default with slider',
  tag: 'tf-age-selector',
  description: 'Slider on default',
  data: {
    status: 'default',
  },
};

const SliderOnDefaultOnlyNumberInput: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age on default no slider',
  tag: 'tf-age-selector',
  description: 'Slider on default',
  data: {
    status: 'default',
    slider:'',
  },
};

const SliderDisabled: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age disabled',
  tag: 'tf-age-selector',
  description: 'Slider disabled',
  data: {
    status: 'disabled',
  },
};

const SliderDisabledWithSlider: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age on default with slider',
  tag: 'tf-age-selector',
  description: 'Slider on default',
  data: {
    status: 'disabled',
    slider:'',
  },
};

const SliderError: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age error',
  tag: 'tf-age-selector',
  description: 'Slider error',
  data: {
    status: 'error',
  },
};

const SliderErrorWithSlider: StyleVariantProps<'tf-age-selector'> = {
  name: 'Slider age error with slider',
  tag: 'tf-age-selector',
  description: 'Slider error',
  data: {
    status: 'error',
    slider:'',
  },
};


const meta: StyleComponentProps<'tf-age-selector'> = {
  ref: 'tf-slider',
  tag: 'tf-age-selector',
  description: 'Tourisfair slider component',
  component: 'Tourisfair Slider Component',
  variants: [ SliderOnDefault , SliderOnDefaultOnlyNumberInput , SliderDisabled , SliderDisabledWithSlider , SliderError , SliderErrorWithSlider],
};
  
export const styleTfAgeSelector = (styleBook: StyleBook) => styleBook.addComponent(meta);