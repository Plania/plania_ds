import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultBtn: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Default Button',
  tag: 'tf-search-button',
  description: 'The default button is small, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    state: 'default',
    size: 'small',
    content: 'Default',
  },
};

const primaryNone: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Primary None',
  tag: 'tf-search-button',
  description: '',
  data: {
    variant: 'primary',
    state: 'default',
    content: 'Primary',
  },
};

const primaryActive: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Primary Active',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'active',
  },
};

const primaryFocus: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Primary Focus',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'focus',
  },
};

const primaryDisabled: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Primary Disabled',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'disabled',
  },
};

const secondaryNone: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Secondary None',
  tag: 'tf-search-button',
  description: '',
  data: {
    variant: 'secondary',
    state: 'default',
    content: 'Secondary',
  },
};

const secondaryActive: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Secondary Active',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'active',
  },
};

const secondaryFocus: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Secondary Focus',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'focus',
  },
};

const secondaryDisabled: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Secondary Disabled',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'disabled',
  },
};

const tertiaryNone: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Tertiary None',
  tag: 'tf-search-button',
  description: '',
  data: {
    variant: 'tertiary',
    state: 'default',
    content: 'Tertiary',
  },
};

const tertiaryActive: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Tertiary Active',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'active',
  },
};

const tertiaryFocus: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Tertiary Focus',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'focus',
  },
};

const tertiaryDisabled: StyleVariantProps<'tf-search-button'> = {
  name: 'Small Tertiary Disabled',
  tag: 'tf-search-button',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'disabled',
  },
};

const meta: StyleComponentProps<'tf-search-button'> = {
  ref: 'tf-search-button',
  tag: 'tf-search-button',
  description: 'A generic button with 3 variants: primary, secondary and tertiary.',
  component: 'Tourisfair Button',
  variants: [
    defaultBtn,
    primaryNone,
    primaryActive,
    primaryFocus,
    primaryDisabled,
    secondaryNone,
    secondaryActive,
    secondaryFocus,
    secondaryDisabled,
    tertiaryNone,
    tertiaryActive,
    tertiaryFocus,
    tertiaryDisabled,
  ],
};

export const styleTfSearchButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
