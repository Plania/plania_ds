import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const activityChip: StyleVariantProps<'tf-search-chip'> = {
  name: 'Activity Chip',
  tag: 'tf-search-chip',
  description: 'Chip of type activity',
  data: {
    type: 'activity',
    content: 'History',
  },
};

const poiChip: StyleVariantProps<'tf-search-chip'> = {
  name: 'POI Chip',
  tag: 'tf-search-chip',
  description: 'Chip of type POI (Point Of Interest)',
  data: {
    type: 'poi',
    content: 'Churches',
  },
};

const meta: StyleComponentProps<'tf-search-chip'> = {
  ref: 'tf-search-chip',
  tag: 'tf-search-chip',
  description:
      'A chip is used to tag an information or title, to give a labelled meaning, to categorize.',
  component: 'Tourisfair Chip',
  variants: [activityChip, poiChip],
};

export const styleTfSearchChip = (styleBook: StyleBook) => styleBook.addComponent(meta);
