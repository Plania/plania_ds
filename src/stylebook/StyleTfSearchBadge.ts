import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const ecoBadge: StyleVariantProps<'tf-search-badge'> = {
  name: 'Green badge',
  tag: 'tf-search-badge',
  description: 'Badge meaning ecologicial activity',
  data: {},
};

const meta: StyleComponentProps<'tf-search-badge'> = {
  ref: 'tf-search-badge',
  tag: 'tf-search-badge',
  description: 'Plania badge component. It is used to showcase an ecological activity',
  component: 'Plania Badge',
  variants: [ecoBadge],
};

export const styleTfSearchBadge = (styleBook: StyleBook) => styleBook.addComponent(meta);
