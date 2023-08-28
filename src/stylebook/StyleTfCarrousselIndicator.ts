import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const carrouselFirst: StyleVariantProps<'tf-carrousel-indicator'> = {
  name: 'first step',
  tag: 'tf-carrousel-indicator',
  description: ' Indicate the first step of a carrousel.',
  data: {
    step: 'first',
  },
};

const carrouselIntermediate: StyleVariantProps<'tf-carrousel-indicator'> = {
  name: 'intermediate step',
  tag: 'tf-carrousel-indicator',
  description: ' Indicate the intermediate step of a carrousel.',
  data: {
    step: 'intermediate',
  },
};

const carrouselFinal: StyleVariantProps<'tf-carrousel-indicator'> = {
  name: 'final step',
  tag: 'tf-carrousel-indicator',
  description: ' Indicate the final step of a carrousel.',
  data: {
    step: 'final',
  },
};

const meta: StyleComponentProps<'tf-carrousel-indicator'> = {
  ref: 'tf-carrousel-indicator',
  tag: 'tf-carrousel-indicator',
  description: 'Indicate the current step of a carrousel.',
  component: 'Plania Carrousel Indicator',
  variants: [carrouselFirst, carrouselIntermediate, carrouselFinal],
};

export const styleTfCarrouselIndicator = (styleBook: StyleBook) => styleBook.addComponent(meta);
