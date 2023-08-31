import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';
import { html } from '../components/TfBase.js';

const ActionBar: StyleVariantProps<'tf-action-bar'> = {
  name: 'Action Bar',
  tag: 'tf-action-bar',
  description: 'The tf-action-bar is a container for any number of buttons.',
  data: {
    content: html`
    <tf-button onclick="alert('Back')" variant="tertiary" size="medium" text="" state="hover" active="">Back</tf-button>
    <tf-button onclick="alert('Next')" variant="primary" size="medium" text="" state="hover" active="">Next</tf-button>
  `
  },
};

const meta: StyleComponentProps<'tf-action-bar'> = {
  ref: 'tf-action-bar',
  tag: 'tf-action-bar',
  description:
    'Tourisfair Action Bar component. Used everywhere a user is required to confirm an action, a selection, ...etc',
  component: 'Tourisfair Action Bar',
  variants: [ActionBar],
};

export const styleTfActionBar = (styleBook: StyleBook) => styleBook.addComponent(meta);
