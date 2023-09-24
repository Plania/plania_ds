import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputDateIconDefault: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component with icon and label.',
  data: {
    placeholder: 'Type here',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="date-range" slot="icon"></tf-icon>
    `,
  },
};

const tfInputDateDefault: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component no icon.',
  data: {
    placeholder: 'Type here',
    content: html` <label slot="label">Label</label> `,
  },
};

const tfInputDateIconDisabled: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component disabled with icon.',
  data: {
    placeholder: 'Type here',
    disabled: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="date-range" slot="icon"></tf-icon>
    `,
  },
};

const tfInputDateDisabled: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component disabled no icon.',
  data: {
    placeholder: 'Type here',
    disabled: '',
    content: html` <label slot="label">Label</label> `,
  },
};

const tfInputDateIconError: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component error with icon.',
  data: {
    value: 'Some error value',
    error: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="date-range" slot="icon"></tf-icon>
      <span slot="error">Error message</span>
    `,
  },
};

const tfInputDateError: StyleVariantProps<'tf-input-date'> = {
  name: 'Plania input date',
  tag: 'tf-input-date',
  description: 'A date input component error no icon.',
  data: {
    value: 'Some error value',
    error: '',
    content: html`
      <label slot="label">Label</label>
      <tf-icon icon="date-range" slot="icon"></tf-icon>
      <span slot="error">Error message</span>
    `,
  },
};

const meta: StyleComponentProps<'tf-input-date'> = {
  ref: 'tf-input-date',
  tag: 'tf-input-date',
  description: 'Plania input date component. It is used to showcase an input date',
  component: 'Plania Input Date',
  variants: [
    tfInputDateIconDefault,
    tfInputDateDefault,
    tfInputDateIconDisabled,
    tfInputDateDisabled,
    tfInputDateIconError,
    tfInputDateError,
  ],
};

export const styleTfInputDate = (styleBook: StyleBook) => styleBook.addComponent(meta);
