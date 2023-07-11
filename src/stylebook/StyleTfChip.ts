import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const ChipPrimaryNotSelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a primary color not selected with icon',
  data: {
    variant: 'primary',
    active: '',
    icon: '',
    symbol: 'add',
    content: 'label',
  },
};
const ChipSecondaryNotSelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a secondary color not selected with icon',
  data: {
    ...ChipPrimaryNotSelectedIcon.data,
    variant : 'secondary',
  },
};
const ChipTertiaryNotSelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a tertiary color not selected with icon',
  data: {
    ...ChipPrimaryNotSelectedIcon.data,
    variant : 'tertiary',
  },
};

const ChipPrimaryNotSelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a primary color not selected without icon',
  data: {
    variant: 'primary',
    active: '',
    content: 'label',
  },
};
const ChipSecondaryNotSelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a secondary color not selected without icon',
  data: {
    ...ChipPrimaryNotSelected.data,
    variant : 'secondary',
  },
};

const ChipTertiaryNotSelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a tertiary color not selected without icon',
  data: {
    ...ChipPrimaryNotSelected.data,
    variant : 'tertiary',
  },
};

const ChipPrimarySelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a primary color selected with icon',
  data: {
    variant: 'primary',
    active: '',
    icon: '',
    symbol: 'add',
    content: 'label',
    selected : '',
  },
};
const ChipSecondarySelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a secondary color selected with icon',
  data: {
   ...ChipPrimarySelectedIcon.data,
   variant : 'secondary',
  },
};
const ChipTertiarySelectedIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a tertiary color selected with icon',
  data: {
   ...ChipPrimarySelectedIcon.data,
   variant : 'tertiary',
  },
};


const ChipPrimarySelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a primary color selected without icon',
  data: {
    variant: 'primary',
    active: '',
    content: 'label',
    selected : '',
  },
};

const ChipSecondarySelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a secondary color selected without icon',
  data: {
    ...ChipPrimarySelected.data,
    variant: 'secondary',
  },
};
const ChipTertiarySelected: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip with a tertiary color selected without icon',
  data: {
    ...ChipPrimarySelected.data,
    variant : 'tertiary',
  },
};


const ChipDisabledIcon: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip disabled with icon',
  data: {
    content : 'label',
    icon : '',
    symbol : 'add',
  },
};

const ChipDisabled: StyleVariantProps<'tf-chip'> = {
  name: 'Chip',
  tag: 'tf-chip',
  description: 'Chip disabled without icon',
  data: {
    content : 'label',
  },
};



const meta: StyleComponentProps<'tf-chip'> = {
  ref: 'tf-chip',
  tag: 'tf-chip',
  description:
      'A chip is used to tag an information or title, to give a labelled meaning, to categorize.',
  component: 'Tourisfair Chip',
  variants: [
    ChipPrimaryNotSelectedIcon,
    ChipSecondaryNotSelectedIcon,
    ChipTertiaryNotSelectedIcon,
    ChipPrimaryNotSelected,
    ChipSecondaryNotSelected,
    ChipTertiaryNotSelected,
    ChipPrimarySelectedIcon,
    ChipSecondarySelectedIcon,
    ChipTertiarySelectedIcon,
    ChipPrimarySelected,
    ChipSecondarySelected,
    ChipTertiarySelected,
    ChipDisabledIcon,
    ChipDisabled,
  ],
};

export const styleTfChip = (styleBook: StyleBook) => styleBook.addComponent(meta);
