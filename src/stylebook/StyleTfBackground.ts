import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TfBackgroundPrimary: StyleVariantProps<'tf-background'> = {
  name: 'Background with actions',
  tag: 'tf-background',
  description: 'Plania Background with actions, displayed as a footer.',
  data: {
    actions: '',
    content: html`
      <div slot="content">Content</div>
      <div slot="actions">Actions</div>
    `,
  },
};

const TfBackgroundSecondary: StyleVariantProps<'tf-background'> = {
  name: 'Background w/o actions',
  tag: 'tf-background',
  description: 'Plania Background without actions.',
  data: {
    content: html` <div slot="content">Content</div> `,
  },
};

const meta: StyleComponentProps<'tf-background'> = {
  ref: 'tf-background',
  tag: 'tf-background',
  description: 'Plania background component. It is a dedicated container for some forms.',
  component: 'Plania Background',
  variants: [TfBackgroundPrimary, TfBackgroundSecondary],
};

export const styleTfBackground = (styleBook: StyleBook) => styleBook.addComponent(meta);
