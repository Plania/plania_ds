import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const welcomeCardFirst: StyleVariantProps<'tf-welcome-card'> = {
  name: 'first step',
  tag: 'tf-welcome-card',
  description: ' Indicate the first step of a welcome card.',
  data: {
    content: `
    <h1 slot="title">Title </h1>
      <p slot="content">
        Content inside your card. First step
      </p>`,
    step: 'first',
  },
};

const welcomeCardIntermediate: StyleVariantProps<'tf-welcome-card'> = {
  name: 'intermediate step',
  tag: 'tf-welcome-card',
  description: ' Indicate the intermediate step of a welcome card.',
  data: {
    content: `
    <h1 slot="title">Title </h1>
      <p slot="content">
        Content inside your card. Intermediate step
      </p>`,
    step: 'intermediate',
  },
};

const welcomeCardFinal: StyleVariantProps<'tf-welcome-card'> = {
  name: 'final step',
  tag: 'tf-welcome-card',
  description: ' Indicate the final step of a welcome card.',
  data: {
    content: `
    <h1 slot="title">Title </h1>
      <p slot="content">
        Content inside your card. Final step
      </p>`,
    step: 'final',
  },
};

const meta: StyleComponentProps<'tf-welcome-card'> = {
  ref: 'tf-welcome-card',
  tag: 'tf-welcome-card',
  description: 'Indicate the current step of a welcome card.',
  component: 'Plania Welcome Card',
  variants: [welcomeCardFirst, welcomeCardIntermediate, welcomeCardFinal],
};

export const styleTfWelcomeCard = (styleBook: StyleBook) => styleBook.addComponent(meta);
