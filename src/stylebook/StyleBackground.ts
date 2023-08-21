import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TfBackgroundPrimary: StyleVariantProps<'tf-background'> = {
  name: 'Primary',
  tag: 'tf-background',
  description: 'background with actions , action is like a footer',
  data: {
    action: '',
    content: html` <div slot="content">Content</div>
      <div slot="actions">Actions</div>`,
  },
};

const TfBackgroundSecondary: StyleVariantProps<'tf-background'> = {
  name: 'Secondary',
  tag: 'tf-background',
  description: 'background without actions',
  data: {
    content: html` <div slot="content">Content</div>`,
  },
};


const meta: StyleComponentProps<'tf-background'> = {
  ref: 'tf-background',
  tag: 'tf-background',
  description: 'Tourisfair background component. It is used to showcase a background',
  component: 'Tourisfair Background',
  variants: [TfBackgroundPrimary, TfBackgroundSecondary],
};

export const styleTfBackground = (styleBook: StyleBook) => styleBook.addComponent(meta);
