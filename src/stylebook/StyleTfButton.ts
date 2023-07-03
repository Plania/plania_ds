import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';


//medium button Primary
const smallPrimaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no text, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'small',
    icon : 'add',
  },
};

const smallPrimaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'small',
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const smallPrimaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'small',
    text : '',
    content : 'Button',
  },
};

const smallPrimaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no text, and based on the primary variant.',
  data: {
    ...smallPrimaryInactiveOnlyIcon.data,
    state: 'hover',
    active : '',
  },
};

const smallPrimaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no icon, and based on the primary variant.',
  data: {
    ...smallPrimaryHoverOnlyIcon.data,
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const smallPrimaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Small Active Button',
  tag: 'tf-button',
  description: 'The Active button is small, with no icon, and based on the primary variant.',
  data: {
    ...smallPrimaryInactive.data,
    state : 'hover',
    active : '',
  },
};

//small button Secondary
const smallSecondaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no text, and based on the secondary variant.',
  data: {
    ...smallPrimaryInactiveOnlyIcon.data,
    variant : 'secondary',
  },
};

const smallSecondaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the secondary variant.',
  data: {
    ...smallPrimaryInactiveIcon.data,
    variant : 'secondary',
  },
};

const smallSecondaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the secondary variant.',
  data: {
    ...smallPrimaryInactive.data,
    variant : 'secondary',
  },
};

const smallSecondaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no text, and based on the secondary variant.',
  data: {
    ...smallPrimaryHoverOnlyIcon.data,
    variant : 'secondary',
  },
};

const smallSecondaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no icon, and based on the secondary variant.',
  data: {
    ...smallPrimaryHoverIcon.data,
    variant : 'secondary',
  },
};

const smallSecondaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Small Active Button',
  tag: 'tf-button',
  description: 'The Active button is small, with no icon, and based on the secondary variant.',
  data: {
    ...smallPrimaryHover.data,
    variant : 'secondary',
  },
};
//small button Teriary
const smallTertiaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no text, and based on the tertiary variant.',
  data: {
    ...smallPrimaryInactiveOnlyIcon.data,
    variant : 'tertiary',
  },
};

const smallTertiaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the tertiary variant.',
  data: {
    ...smallPrimaryInactiveIcon.data,
    variant : 'tertiary',
  },
};

const smallTertiaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Small Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is small, with no icon, and based on the tertiary variant.',
  data: {
    ...smallPrimaryInactive.data,
    variant : 'tertiary',
  },
};

const smallTertiaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no text, and based on the tertiary variant.',
  data: {
    ...smallPrimaryHoverOnlyIcon.data,
    variant : 'tertiary',
  },
};

const smallTertiaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Small Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is small, with no icon, and based on the tertiary variant.',
  data: {
    ...smallPrimaryHoverIcon.data,
    variant : 'tertiary',
  },
};

const smallTertiaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Small Active Button',
  tag: 'tf-button',
  description: 'The Active button is small, with no icon, and based on the tertiary variant.',
  data: {
    ...smallPrimaryHover.data,
    variant : 'tertiary',
  },
};

//small button Primary
const mediumPrimaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no text, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'medium',
    icon : 'add',
  },
};

const mediumPrimaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'medium',
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const mediumPrimaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'medium',
    text : '',
    content : 'Button',
  },
};

const mediumPrimaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no text, and based on the primary variant.',
  data: {
    ...mediumPrimaryInactiveOnlyIcon.data,
    state: 'hover',
    active : '',
  },
};

const mediumPrimaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no icon, and based on the primary variant.',
  data: {
    ...mediumPrimaryHoverOnlyIcon.data,
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const mediumPrimaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Medium Active Button',
  tag: 'tf-button',
  description: 'The Active button is medium, with no icon, and based on the primary variant.',
  data: {
    ...mediumPrimaryInactive.data,
    state : 'hover',
    active : '',
  },
};

//medium button Secondary
const mediumSecondaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no text, and based on the secondary variant.',
  data: {
    ...mediumPrimaryInactiveOnlyIcon.data,
    variant : 'secondary',
  },
};

const mediumSecondaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the secondary variant.',
  data: {
    ...mediumPrimaryInactiveIcon.data,
    variant : 'secondary',
  },
};

const mediumSecondaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the secondary variant.',
  data: {
    ...mediumPrimaryInactive.data,
    variant : 'secondary',
  },
};

const mediumSecondaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no text, and based on the secondary variant.',
  data: {
    ...mediumPrimaryHoverOnlyIcon.data,
    variant : 'secondary',
  },
};

const mediumSecondaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no icon, and based on the secondary variant.',
  data: {
    ...mediumPrimaryHoverIcon.data,
    variant : 'secondary',
  },
};

const mediumSecondaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Medium Active Button',
  tag: 'tf-button',
  description: 'The Active button is medium, with no icon, and based on the secondary variant.',
  data: {
    ...mediumPrimaryHover.data,
    variant : 'secondary',
  },
};
//medium button Teriary
const mediumTertiaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no text, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryInactiveOnlyIcon.data,
    variant : 'tertiary',
  },
};

const mediumTertiaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryInactiveIcon.data,
    variant : 'tertiary',
  },
};

const mediumTertiaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Medium Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is medium, with no icon, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryInactive.data,
    variant : 'tertiary',
  },
};

const mediumTertiaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no text, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryHoverOnlyIcon.data,
    variant : 'tertiary',
  },
};

const mediumTertiaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Medium Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is medium, with no icon, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryHoverIcon.data,
    variant : 'tertiary',
  },
};

const mediumTertiaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Medium Active Button',
  tag: 'tf-button',
  description: 'The Active button is medium, with no icon, and based on the tertiary variant.',
  data: {
    ...mediumPrimaryHover.data,
    variant : 'tertiary',
  },
};

//small button Primary
const largePrimaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no text, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'large',
    icon : 'add',
  },
};

const largePrimaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'large',
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const largePrimaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    size: 'large',
    text : '',
    content : 'Button',
  },
};

const largePrimaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no text, and based on the primary variant.',
  data: {
    ...largePrimaryInactiveOnlyIcon.data,
    state: 'hover',
    active : '',
  },
};

const largePrimaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no icon, and based on the primary variant.',
  data: {
    ...largePrimaryHoverOnlyIcon.data,
    icon : 'add',
    text : '',
    content : 'Button',
  },
};

const largePrimaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Large Active Button',
  tag: 'tf-button',
  description: 'The Active button is large, with no icon, and based on the primary variant.',
  data: {
    ...largePrimaryInactive.data,
    state : 'hover',
    active : '',
  },
};

//large button Secondary
const largeSecondaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no text, and based on the secondary variant.',
  data: {
    ...largePrimaryInactiveOnlyIcon.data,
    variant : 'secondary',
  },
};

const largeSecondaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the secondary variant.',
  data: {
    ...largePrimaryInactiveIcon.data,
    variant : 'secondary',
  },
};

const largeSecondaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the secondary variant.',
  data: {
    ...largePrimaryInactive.data,
    variant : 'secondary',
  },
};

const largeSecondaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no text, and based on the secondary variant.',
  data: {
    ...largePrimaryHoverOnlyIcon.data,
    variant : 'secondary',
  },
};

const largeSecondaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no icon, and based on the secondary variant.',
  data: {
    ...largePrimaryHoverIcon.data,
    variant : 'secondary',
  },
};

const largeSecondaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Large Active Button',
  tag: 'tf-button',
  description: 'The Active button is large, with no icon, and based on the secondary variant.',
  data: {
    ...largePrimaryHover.data,
    variant : 'secondary',
  },
};
//large button Teriary
const largeTertiaryInactiveOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no text, and based on the tertiary variant.',
  data: {
    ...largePrimaryInactiveOnlyIcon.data,
    variant : 'tertiary',
  },
};

const largeTertiaryInactiveIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the tertiary variant.',
  data: {
    ...largePrimaryInactiveIcon.data,
    variant : 'tertiary',
  },
};

const largeTertiaryInactive : StyleVariantProps<'tf-button'> = {
  name: 'Large Inactive Button',
  tag: 'tf-button',
  description: 'The Inactive button is large, with no icon, and based on the tertiary variant.',
  data: {
    ...largePrimaryInactive.data,
    variant : 'tertiary',
  },
};

const largeTertiaryHoverOnlyIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no text, and based on the tertiary variant.',
  data: {
    ...largePrimaryHoverOnlyIcon.data,
    variant : 'tertiary',
  },
};

const largeTertiaryHoverIcon : StyleVariantProps<'tf-button'> = {
  name: 'Large Hover Button',
  tag: 'tf-button',
  description: 'The Hover button is large, with no icon, and based on the tertiary variant.',
  data: {
    ...largePrimaryHoverIcon.data,
    variant : 'tertiary',
  },
};

const largeTertiaryHover : StyleVariantProps<'tf-button'> = {
  name: 'Large Active Button',
  tag: 'tf-button',
  description: 'The Active button is large, with no icon, and based on the tertiary variant.',
  data: {
    ...largePrimaryHover.data,
    variant : 'tertiary',
  },
};






const meta: StyleComponentProps<'tf-button'> = {
  ref: 'tf-button',
  tag: 'tf-button',
  description: 'A generic button with 3 variants: primary, secondary and tertiary.',
  component: 'Tourisfair Button',
  variants: [
    smallPrimaryInactiveOnlyIcon,
    smallPrimaryInactiveIcon,
    smallPrimaryInactive,
    smallPrimaryHoverOnlyIcon,
    smallPrimaryHoverIcon,
    smallPrimaryHover,
    smallSecondaryInactiveOnlyIcon,
    smallSecondaryInactiveIcon,
    smallSecondaryInactive,
    smallSecondaryHoverOnlyIcon,
    smallSecondaryHoverIcon,
    smallSecondaryHover,
    smallTertiaryInactiveOnlyIcon,
    smallTertiaryInactiveIcon,
    smallTertiaryInactive,
    smallTertiaryHoverOnlyIcon,
    smallTertiaryHoverIcon,
    smallTertiaryHover, 
    mediumPrimaryInactiveOnlyIcon,
    mediumPrimaryInactiveIcon,
    mediumPrimaryInactive,
    mediumPrimaryHoverOnlyIcon,
    mediumPrimaryHoverIcon,
    mediumPrimaryHover,
    mediumSecondaryInactiveOnlyIcon,
    mediumSecondaryInactiveIcon,
    mediumSecondaryInactive,
    mediumSecondaryHoverOnlyIcon,
    mediumSecondaryHoverIcon,
    mediumSecondaryHover,
    mediumTertiaryInactiveOnlyIcon,
    mediumTertiaryInactiveIcon,
    mediumTertiaryInactive,
    mediumTertiaryHoverOnlyIcon,
    mediumTertiaryHoverIcon,
    mediumTertiaryHover,
    largePrimaryInactiveOnlyIcon,
    largePrimaryInactiveIcon,
    largePrimaryInactive,
    largePrimaryHoverOnlyIcon,
    largePrimaryHoverIcon,
    largePrimaryHover,
    largeSecondaryInactiveOnlyIcon,
    largeSecondaryInactiveIcon,
    largeSecondaryInactive,
    largeSecondaryHoverOnlyIcon,
    largeSecondaryHoverIcon,
    largeSecondaryHover,
    largeTertiaryInactiveOnlyIcon,
    largeTertiaryInactiveIcon,
    largeTertiaryInactive,
    largeTertiaryHoverOnlyIcon,
    largeTertiaryHoverIcon,
    largeTertiaryHover,


  ],
};

export const styleTfButton = (styleBook: StyleBook) => styleBook.addComponent(meta);
