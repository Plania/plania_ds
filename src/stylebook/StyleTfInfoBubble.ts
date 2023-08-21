import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInfoBubble: StyleVariantProps<'tf-info-bubble'> = {
  name: 'tf info bubble',
  tag: 'tf-info-bubble',
  description: 'an info bubble that can be used as slider thumb attribute',
  data: {
   
  },
};
const meta: StyleComponentProps<'tf-info-bubble'> = {
    ref: 'tf-info-bubble',
    tag: 'tf-info-bubble',
    description: 'Tourisfair info bubble component. It is used as a slider thumb attribute',
    component: 'Tourisfair Icon',
    variants: [tfInfoBubble],
  };
  
  export const styleTfInfoBubble = (styleBook: StyleBook) => styleBook.addComponent(meta);
  