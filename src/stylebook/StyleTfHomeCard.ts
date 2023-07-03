import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const homeCard: StyleVariantProps<'tf-home-card'> = {
  name: 'Home Card',
  tag: 'tf-home-card',
  description: 'A card for home page.',
  data: {
    content: `
        <h1 slot="title">Home Card</h1>
        <div slot="content">
            <p>Home Card Content</p>
        </div>
        `,
  },
};

const meta: StyleComponentProps<'tf-home-card'> = {
  ref: 'tf-home-card',
  tag: 'tf-home-card',
  description: 'A card for home page.',
  component: 'Tourisfair Home Card',
  variants: [homeCard],
};

export const styleTfHomeCard = (styleBook: StyleBook) => styleBook.addComponent(meta);
