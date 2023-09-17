import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputTextIconDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component with icon and label.',
  data: {
    placeholder: 'Type here',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="account-circle" slot="icon"></tf-icon>
    `,
  },
};

const tfInputTextDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component no icon.',
  data: {
    placeholder: 'Type here',
    content: html` <label slot="label">Label</label> `,
  },
};

const tfInputTextIconDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled with icon.',
  data: {
    placeholder: 'Type here',
    disabled: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="account-circle" slot="icon"></tf-icon>
    `,
  },
};

const tfInputTextDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled no icon.',
  data: {
    placeholder: 'Type here',
    disabled: '',
    content: html` <label slot="label">Label</label> `,
  },
};

const tfInputTextIconError: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component error with icon.',
  data: {
    value: 'Some error value',
    error: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="account-circle" slot="icon"></tf-icon>
      <span slot="error">Error message</span>
    `,
  },
};

const tfInputTextError: StyleVariantProps<'tf-input-text'> = {
  name: 'Plania input text',
  tag: 'tf-input-text',
  description: 'A text input component error no icon.',
  data: {
    value: 'Some error value',
    error: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="account-circle" slot="icon"></tf-icon>
      <span slot="error">Error message</span>
    `,
  },
};

const meta: StyleComponentProps<'tf-input-text'> = {
  ref: 'tf-input-text',
  tag: 'tf-input-text',
  description: 'Plania input text component. It is used to showcase an input text',
  component: 'Plania Input Text',
  variants: [
    tfInputTextIconDefault,
    tfInputTextDefault,
    tfInputTextIconDisabled,
    tfInputTextDisabled,
    tfInputTextIconError,
    tfInputTextError,
  ],
};

export const styleTfInputText = (styleBook: StyleBook) => styleBook.addComponent(meta);
