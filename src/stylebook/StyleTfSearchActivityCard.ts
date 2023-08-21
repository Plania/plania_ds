import { html, css } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const StyletfCardDetailsStyle = css`
  .read {
    color: var(--tf-search-sys-read-more);
    text-decoration: underline;
    font-weight: 700;
  }
`;
const defaultSearchActivityCard: StyleVariantProps<'tf-search-activity-card'> = {
  name: 'Default Activity Card',
  tag: 'tf-search-activity-card',
  description: '',
  data: {
    title: 'SAGRADA FAMILIA',
    subtitle: 'C/ de Mallorca, 401, 08013',
    content: html`
      <style>
        ${StyletfCardDetailsStyle}
      </style>
      <span slot="title">Sagrada Familia</span>
      <span slot="subtitle">C/ de Mallorca, 401, 08013</span>
      <tf-search-card-header-image
        src="/assets/image.jpg"
        slot="image"
      ></tf-search-card-header-image>
      <tf-budget level="3" slot="budget"></tf-budget>
      <tf-chip type="activity" active slot="chip">Churches</tf-chip>
      <tf-chip type="poi" active slot="chip">History</tf-chip>
      <p slot="description">
        The Expiatory Temple of the Sagrada Familia, known simply as the Sagrada Familia, is a
        Catholic basilica in Barcelona, designed by architect Antoni Gaudí.
        <span class="read">Read more...</span>
      </p>
      <tf-button variant="secondary" text active slot="actions">Book Now</tf-button>
    `,
  },
};
//
const meta: StyleComponentProps<'tf-search-activity-card'> = {
  ref: 'tf-search-activity-card',
  tag: 'tf-search-activity-card',
  description:
    'Tourisfair activity card are used to display information about an activity or a place in the search page.',
  component: 'Tourisfair Search Activity Card',
  variants: [defaultSearchActivityCard],
};

export const styleTfSearchActivityCard = (styleBook: StyleBook) => styleBook.addComponent(meta);
