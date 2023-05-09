import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputTextIconDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component with icon.',
  data: {
    icon: 'true',
    status: 'default',
    pictogramme: 'account-circle',
    content: '<p slot="label">Default Icon</p>',
  },
};

const tfInputTextDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component no icon.',
  data: {
    icon: 'false',
    status: 'default',
    content: '<p slot="label">Default</p>',
  },
};

const tfInputTextIconDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled with icon.',
  data: {
    icon: 'true',
    status: 'disabled',
    pictogramme: 'account-circle',
    content: '<p slot="label">Disabled Icon</p>',
  },
};

const tfInputTextDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled no icon.',
  data: {
    icon: 'false',
    status: 'disabled',
    content: '<p slot="label">Disabled</p>',
  },
};

const tfInputTextIconError: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    pictogramme: 'account-circle',
    placeholder: 'old value',
    content: `<p slot="label">Error</p> 
    <span slot="error">Error message</span>`,
  },
};

const tfInputTextError: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component error no icon.',
  data: {
    icon: 'false',
    status: 'error',
    placeholder: 'old value',
    content: `<p slot="label">Error</p> 
              <span slot="error">Error message</span>`,
  },
};

const meta: StyleComponentProps<'tf-input-text'> = {
  ref: 'tf-input-text',
  tag: 'tf-input-text',
  description:
    'Tourisfair input text component. It is used to showcase an input text',
  component: 'Tourisfair Input Text',
  variants: [
    tfInputTextIconDefault,
    tfInputTextDefault,
    tfInputTextIconDisabled,
    tfInputTextDisabled,
    tfInputTextIconError,
    tfInputTextError,
  ],
};

export const styleTfInputText = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
