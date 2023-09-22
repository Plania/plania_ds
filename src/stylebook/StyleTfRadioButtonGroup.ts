import { html } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const radioButtonGroupDefault: StyleVariantProps<'tf-radio-button-group'> = {
  name: 'Radio button group',
  tag: 'tf-radio-button-group',
  description: 'Radio button group',
  data: {
    name: 'radio',
    content: html`
      <tf-radio-button value="1">Radio button 1</tf-radio-button>
      <tf-radio-button value="2">Radio button 2</tf-radio-button>
      <tf-radio-button value="3">Radio button 3</tf-radio-button>
      <tf-radio-button value="4">Radio button 4</tf-radio-button>
    `,
  },
};

const meta: StyleComponentProps<'tf-radio-button-group'> = {
  ref: 'tf-radio-button',
  description:
    `Plania radio button group component.

  It helps grouping radio-buttons together.` +
    html`
      <p>Here is an example of real life use:</p>
      <tf-radio-button-group name="radio">
        <tf-radio-button value="1">Radio button 1</tf-radio-button>
        <tf-radio-button value="2">Radio button 2</tf-radio-button>
        <tf-radio-button value="3">Radio button 3</tf-radio-button>
        <tf-radio-button value="4">Radio button 4</tf-radio-button>
      </tf-radio-button-group>
      <pre class="language-html">
        <code>
&lt;tf-radio-button-group name='radio'&gt;
  &lt;tf-radio-button value="1"&gt;Radio button 1&lt;/tf-radio-button&gt;
  &lt;tf-radio-button value="2"&gt;Radio button 2&lt;/tf-radio-button&gt;
  &lt;tf-radio-button value="3"&gt;Radio button 3&lt;/tf-radio-button&gt;
  &lt;tf-radio-button value="4"&gt;Radio button 4&lt;/tf-radio-button&gt;
&lt;/tf-radio-button-group&gt;</code>
      </pre>
    `,
  tag: 'tf-radio-button-group',
  component: 'Plania Radio button',
  variants: [radioButtonGroupDefault],
};

export const styleTfRadioButtonGroup = (styleBook: StyleBook) => styleBook.addComponent(meta);
