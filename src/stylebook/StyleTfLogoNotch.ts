import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';


const tfLogoNotch : StyleVariantProps<'tf-logo-notch'> = {
  name: 'tf logo notch',
  tag: 'tf-logo-notch',
  description: 'A logo notch component.',
  data: {
    variant : 'color',
  },
};

const meta : StyleComponentProps<'tf-logo-notch'> = {
  ref : 'tf-logo-notch',
  tag: 'tf-logo-notch',
  description: 'A logo notch component.',
  component: 'Tourisfair Logo Notch',
  variants: [tfLogoNotch],
};

export const styleTfLogoNotch = (styleBook : StyleBook) => 
  styleBook.addComponent(meta);
    