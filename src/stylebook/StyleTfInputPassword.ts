import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputPasswordIconDefault: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component with icon and no show password.',
  data: {
    icon: 'true',
    status: 'default',
    show : 'false',
    label : 'Password Icon',
  },
};

const tfInputPasswordIconDefaultShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component with icon and show password.',
  data: {
    icon: 'true',
    status: 'default',
    show : 'true',
    label : 'Password Icon',
  },
};

const tfInputPasswordDefault: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component no icon and no show password.',
  data: {
    icon: 'false',
    status: 'default',
    show : 'false',
    label : 'Password',
  },
};

const tfInputPasswordDefaultIconDisabledShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component disabled with icon and show password.',
  data: {
    icon: 'false',
    status: 'default',
    show : 'true',
    label: 'Disabled Icon',
  },
};

const tfInputPasswordIconDisabled: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component disabled with icon.',
  data: {
    icon: 'true',
    status: 'disabled',
    show : 'true',
    label: 'Disabled Icon',
  },
};

const tfInputPasswordIconDisabledShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component disabled with icon.',
  data: {
    icon: 'true',
    status: 'disabled',
    show: 'false',
    label: 'Disabled Icon',
  },
};

const tfInputPasswordShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component disabled with icon.',
  data: {
    icon: 'false',
    status: 'disabled',
    show: 'true',
    label: 'Disabled Icon',
  },
};


const tfInputPasswordDisabled: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component disabled no icon.',
  data: {
    icon: 'false',
    status: 'disabled',
    label: 'Disabled',
  },
};

const tfInputPasswordIconError: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    show: 'false',
    placeholder: 'old value',
    label: 'Error',
    content: '<span slot="error">Error message</span>',
  },
};

const tfInputPasswordError: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component error no icon.',
  data: {
    icon: 'false',
    status: 'error',
    show: 'false',
    placeholder: 'old value',
    label: 'Error',
    content: ' <span slot="error">Error message</span>',
  },
};

const tfInputPasswordIconErrorShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    show : 'true',
    placeholder: 'old value',
    content: `<p slot="label">Error</p> 
    <span slot="error">Error message</span>`,
  },
};

const tfInputPasswordErrorShow: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    show : 'true',
    placeholder: 'old value',
    content: `<p slot="label">Error</p> 
    <span slot="error">Error message</span>`,
  },
};

const tfInputPasswordErrorShowNoText: StyleVariantProps<'tf-input-password'> = {
  name: 'tf input password',
  tag: 'tf-input-password',
  description: 'A password input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    show : 'true',
    placeholder: 'old value',
  },
};

const meta: StyleComponentProps<'tf-input-password'> = {
  ref: 'tf-input-password',
  tag: 'tf-input-password',
  description:
    'Tourisfair input password component. It is used to showcase an input password',
  component: 'Tourisfair Input Password',
  variants: [
    tfInputPasswordIconDefault,
    tfInputPasswordIconDefaultShow,
    tfInputPasswordDefault,
    tfInputPasswordDefaultIconDisabledShow,
    tfInputPasswordIconDisabled,
    tfInputPasswordIconDisabledShow,
    tfInputPasswordShow,
    tfInputPasswordDisabled,
    tfInputPasswordIconError,
    tfInputPasswordError,
    tfInputPasswordIconErrorShow,
    tfInputPasswordErrorShow,
    tfInputPasswordErrorShowNoText
  ],
};

export const styleTfInputPassword = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
