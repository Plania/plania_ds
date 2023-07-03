import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const ChipNotSelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip no selected with iconl',
  data: {
    active: '',
    icon: '',
    symbol: 'add',
    content: 'History',
  },
};

const ChipNotSelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip no selected without icon',
  data: {
    active: '',
    content: 'Churches',
  },
};

const ChipSelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip selected with icon',
  data: {
    active: '',
    icon: '',
    symbol: 'add',
    content: 'History',
    selected : '',
  },
};

const ChipSelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip no selected without icon',
  data: {
    active: '',
    content: 'History',
    selected : '',
  },
};

const ChipDisabledIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip disabled with icon',
  data: {
    content : 'History',
    icon : '',
    symbol : 'add',
  },
};

const ChipDisabled: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip disabled without icon',
  data: {
    content : 'History',
  },
};



const meta: StyleComponentProps<'tf-chip'> = {
  ref: 'tf-chip',
  tag: 'tf-chip',
  description:
      'A chip is used to tag an information or title, to give a labelled meaning, to categorize.',
  component: 'Tourisfair Chip',
  variants: [
    ChipNotSelectedIcon,
    ChipNotSelected,
    ChipSelectedIcon,
    ChipSelected,
    ChipDisabledIcon,
    ChipDisabled,
  ],
};

export const styleTfChip = (styleBook: StyleBook) => styleBook.addComponent(meta);
