import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const TfBackgroundPrimary : StyleVariantProps<'tf-background'> = {
  name: 'Primary',
  tag: 'tf-background',
  description: 'Primary background',
  data: {
    variant: 'primary',
    content: '<p>Primary background</p>'
  }
};

const TfBackgroundSecondary : StyleVariantProps<'tf-background'> = {
  name: 'Secondary',
  tag: 'tf-background',
  description: 'Secondary background',
  data: {
    variant: 'secondary',
    content: '<p>Secondary background</p>'
  }
};

const TfBackgroundTertiary : StyleVariantProps<'tf-background'> = {
  name: 'Tertiary',
  tag: 'tf-background',
  description: 'Tertiary background',
  data: {
    variant: 'tertiary',
    content: '<p>Tertiary background</p>'
  }
};

const TfBackgroundDefault : StyleVariantProps<'tf-background'> = {
  name: 'Default',
  tag: 'tf-background',
  description: 'Default background',
  data: {
    variant: 'default',
    content: '<p>Default background</p>'
  }
};

const meta: StyleComponentProps<'tf-background'> = {
  ref: 'tf-background',
  tag: 'tf-background',
  description: 'Tourisfair background component. It is used to showcase a background',
  component: 'Tourisfair Background',
  variants: [
    TfBackgroundPrimary,
    TfBackgroundSecondary,
    TfBackgroundTertiary,
    TfBackgroundDefault
  ],
};

export const styleTfBackground = (styleBook: StyleBook) => styleBook.addComponent(meta);