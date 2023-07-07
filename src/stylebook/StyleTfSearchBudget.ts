import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const level1Budget: StyleVariantProps<'tf-search-budget'> = {
  name: 'Budget level 1',
  tag: 'tf-search-budget',
  description: 'Very cheap and afordable budget',
  data: {
    level: '1',
  },
};

const level2Budget: StyleVariantProps<'tf-search-budget'> = {
  name: 'Budget level 2',
  tag: 'tf-search-budget',
  description: 'Cheap budget',
  data: {
    level: '2',
  },
};

const level3Budget: StyleVariantProps<'tf-search-budget'> = {
  name: 'Budget level 3',
  tag: 'tf-search-budget',
  description: 'Medium budget',
  data: {
    level: '3',
  },
};

const level4Budget: StyleVariantProps<'tf-search-budget'> = {
  name: 'Budget level 4',
  tag: 'tf-search-budget',
  description: 'Expensive budget',
  data: {
    level: '4',
  },
};

const level5Budget: StyleVariantProps<'tf-search-budget'> = {
  name: 'Budget level 5',
  tag: 'tf-search-budget',
  description: 'Very expensive budget',
  data: {
    level: '5',
  },
};

const meta: StyleComponentProps<'tf-search-budget'> = {
  ref: 'tf-search-budget',
  description: 'Tourisfair budget component. It is used to show the budget level of an activity.',
  tag: 'tf-search-budget',
  component: 'Tourisfair Budget',
  variants: [level1Budget, level2Budget, level3Budget, level4Budget, level5Budget],
};

export const styleTfSearchBudget = (styleBook: StyleBook) => styleBook.addComponent(meta);
