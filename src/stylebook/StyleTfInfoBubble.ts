import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInfoBubble: StyleVariantProps<'tf-info-bubble'> = {
  name: 'Info Bubble',
  tag: 'tf-info-bubble',
  description: 'An info bubble that can be used as slider thumb attribute',
  data: {
    content: 'Label',
  },
};

const tfInfoBubbleError: StyleVariantProps<'tf-info-bubble'> = {
  name: 'Info Bubble - error state',
  tag: 'tf-info-bubble',
  description: 'An info bubble with error state',
  data: {
    error: '',
    content: 'Label',
  },
};

const meta: StyleComponentProps<'tf-info-bubble'> = {
  ref: 'tf-info-bubble',
  tag: 'tf-info-bubble',
  description: 'Plania info bubble component. It is used as a slider thumb attribute',
  component: 'Plania Info Bubble',
  variants: [tfInfoBubble, tfInfoBubbleError],
};

export const styleTfInfoBubble = (styleBook: StyleBook) => styleBook.addComponent(meta);
