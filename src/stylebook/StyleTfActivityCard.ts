import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const ActvityCard : StyleVariantProps<'tf-activity-card'> = {
  name: 'Activity Card',
  tag: 'tf-activity-card',
  description: 'A activity card component.',
  data: {
    title : 'Activity Card',
    status : 'default',
    rating : '2.5',
    address : 'Paris, France',
    liked : '',
    'start-hours' : '10:00',
    'end-hours' : '18:00',
    img : 'https://vivrelemarais.typepad.fr/.a/6a00d8341d8a0f53ef01b8d225c37d970c-pi',
        
  },
};

const meta : StyleComponentProps<'tf-activity-card'> = {
  ref: 'tf-activity-card',
  description: 'Tourisfair Activity Card component. It is used to show activity.',
  tag: 'tf-activity-card',
  component: 'Tourisfair Activity Card',
  variants: [
    ActvityCard,
  ],
};

export const StyleTfActivityCard = (stylebook : StyleBook) => stylebook.addComponent(meta);