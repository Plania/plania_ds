import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputTextIconDefault: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component with icon.',
  data: {
    icon: 'true',
    status: 'default',
    pictogramme: 'account-circle',
    label: 'Default Icon',
  },
};

const tfInputTextDefault: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component no icon.',
  data: {
    icon: 'false',
    status: 'default',
    label: 'Default',
  },
};

const tfInputTextDefaultFocus: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component no icon.Focussed.',
  data: {
    icon: 'false',
    status: 'label',
    label: 'Default',
  },
};

const tfInputTextIconDefaultFocus: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component with icon. Focussed.',
  data: {
    icon: 'true',
    status: 'label',
    pictogramme: 'account-circle',
    label: 'Default Icon',
  },
};



const tfInputTextIconDisabled: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component disabled with icon.',
  data: {
    icon: 'true',
    status: 'disabled',
    pictogramme: 'account-circle',
    label: 'Disabled Icon',
  },
};

const tfInputTextDisabled: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component disabled no icon.',
  data: {
    icon: 'false',
    status: 'disabled',
    label: 'Disabled',
  },
};

const tfInputTextIconError: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    pictogramme: 'account-circle',
    label: 'Error',
    value : 'old value',
    content: '<span slot="error">Error message</span>',
  },
};

const tfInputTextError: StyleVariantProps<'tf-text-input'> = {
  name: 'tf input text',
  tag: 'tf-text-input',
  description: 'A text input component error no icon.',
  data: {
    icon: 'false',
    status: 'error',
    label: 'Error',
    value : 'old value',
    content: '<span slot="error">Error message</span>',
  },
};

const meta: StyleComponentProps<'tf-text-input'> = {
  ref: 'tf-text-input',
  tag: 'tf-text-input',
  description:
    'Tourisfair input text component. It is used to showcase an input text',
  component: 'Tourisfair Input Text',
  variants: [
    tfInputTextIconDefault,
    tfInputTextIconDefaultFocus,
    tfInputTextDefault,
    tfInputTextDefaultFocus,
    tfInputTextIconDisabled,
    tfInputTextDisabled,
    tfInputTextIconError,
    tfInputTextError,
  ],
};

export const styleTfInputText = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
