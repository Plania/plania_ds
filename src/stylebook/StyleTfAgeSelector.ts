import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const SliderOnDefault: StyleVariantProps<'tf-age-selector'> = {
  name: 'Default selector with slider',
  tag: 'tf-age-selector',
  description: 'Default slider with a slider range selector',
  data: {
    slider: '',
    value: '18',
  },
};

const SliderOnDefaultOnlyNumberInput: StyleVariantProps<'tf-age-selector'> = {
  name: 'Default selector without slider',
  tag: 'tf-age-selector',
  description: 'Default slider without a slider range selector',
  data: {
    value: '18',
  },
};
const SliderOnFocus: StyleVariantProps<'tf-age-selector'> = {
  name: 'Selector with slider test focus',
  tag: 'tf-age-selector',
  description: 'To test focus state, just click on the input or tabulate to it',
  data: {
    value: '18',
    slider: '',
  },
};

const SliderOnFocusOnlyNumberInput: StyleVariantProps<'tf-age-selector'> = {
  name: 'Selector w/o slider test focus',
  tag: 'tf-age-selector',
  description: 'To test focus state, just click on the input or tabulate to it',
  data: {
    value: '18',
  },
};

const SliderDisabled: StyleVariantProps<'tf-age-selector'> = {
  name: 'Disabled selector with slider',
  tag: 'tf-age-selector',
  description: 'Disabled selecto with a slider range selector',
  data: {
    status: 'disabled',
    slider: '',
    value: '18',
  },
};

const SliderDisabledWithSlider: StyleVariantProps<'tf-age-selector'> = {
  name: 'Disabled selector without slider',
  tag: 'tf-age-selector',
  description: 'Disabled selector without a slider range selector',
  data: {
    status: 'disabled',
    value: '18',
  },
};

const SliderError: StyleVariantProps<'tf-age-selector'> = {
  name: 'Error selector with slider',
  tag: 'tf-age-selector',
  description: 'Selector with slider showing an error message',
  data: {
    status: 'error',
    slider: '',
    value: '18',
    content: '<span slot="error">This selection is required</span>',
  },
};

const SliderErrorWithSlider: StyleVariantProps<'tf-age-selector'> = {
  name: 'Error selector without slider',
  tag: 'tf-age-selector',
  description: 'Selector without slider showing an error message',
  data: {
    status: 'error',
    value: '18',
    content: '<span slot="error">This selection is required</span>',
  },
};

const meta: StyleComponentProps<'tf-age-selector'> = {
  ref: 'tf-slider',
  tag: 'tf-age-selector',
  description: `
This selector is an advanced slider component that allows the user to select a value from a given range.

**Attributes**:

1. The \`label\` is optional and can be used to describe the purpose of the selector. By default, the label is '*Age*'.
2. The \`min\` and \`max\` attributes are optional and can be used to set the minimum and maximum values of the 
selector. By default, the minimum value is 0 and the maximum value is 100.
3. The \`value\` attribute is optional and can be used to set the initial value of the selector. By default, the initial value is 0.
4. The \`status\` attribute is optional and can be used to set the status of the selector. By default, the status is 'default'. Authorized values are:
a. \`default\`,
b. \`disabled\`
c. and \`error\`.
  `,
  component: 'Plania Slider Selector Component',
  variants: [
    SliderOnDefault,
    SliderOnDefaultOnlyNumberInput,
    SliderOnFocus,
    SliderOnFocusOnlyNumberInput,
    SliderDisabled,
    SliderDisabledWithSlider,
    SliderError,
    SliderErrorWithSlider,
  ],
};

export const styleTfAgeSelector = (styleBook: StyleBook) => styleBook.addComponent(meta);
