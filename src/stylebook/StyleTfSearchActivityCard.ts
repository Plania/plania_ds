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
const defaultActivityCard: StyleVariantProps<'tf-search-activity-card'> = {
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

      <tf-search-card-header-image slot="image"></tf-search-card-header-image>
      <tf-search-budget level="3" slot="budget"></tf-search-budget>
      <tf-search-chip type="activity" slot="chip">Churches</tf-search-chip>
      <tf-search-chip type="poi" slot="chip">History</tf-search-chip>
      <p slot="description">
        The Expiatory Temple of the Sagrada Familia, known simply as the Sagrada Familia, is a
        Catholic basilica in Barcelona, designed by architect Antoni Gaudí.
        <span class="read">Read more...</span>
      </p>
      <tf-search-button variant="secondary" slot="actions">Book Now</tf-search-button>
    `,
    data: {
      src: '/assets/image.png',
    },
  },
};
//
const meta: StyleComponentProps<'tf-search-activity-card'> = {
  ref: 'tf-search-activity-card',
  tag: 'tf-search-activity-card',
  description:
    'Tourisfair activity card are used to display information about an activity or a place.',
  component: 'Tourisfair Activity Card',
  variants: [defaultActivityCard],
};

export const styleTfSearchActivityCard = (styleBook: StyleBook) => styleBook.addComponent(meta);
