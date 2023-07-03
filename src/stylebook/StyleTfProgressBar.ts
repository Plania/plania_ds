import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const progressBar0: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 0%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 0% progress.',
  data: {
    progress: '0',
  },
};

const progressBar10: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 10%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 10% progress.',
  data: {
    progress: '10',
  },
};

const progressBar20: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 20%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 20% progress.',
  data: {
    progress: '20',
  },
};

const progressBar30: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 30%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 30% progress.',
  data: {
    progress: '30',
  },
};

const progressBar40: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 40%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 40% progress.',
  data: {
    progress: '40',
  },
};

const progressBar50: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 50%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 50% progress.',
  data: {
    progress: '50',
  },
};

const progressBar60: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 60%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 60% progress.',
  data: {
    progress: '60',
  },
};

const progressBar70: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 70%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 70% progress.',
  data: {
    progress: '70',
  },
};

const progressBar80: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 80%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 80% progress.',
  data: {
    progress: '80',
  },
};

const progressBar90: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 90%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 90% progress.',
  data: {
    progress: '90',
  },
};

const progressBar100: StyleVariantProps<'tf-progress-bar'> = {
  name: 'progress bar 100%',
  tag: 'tf-progress-bar',
  description: 'A progress bar with 100% progress.',
  data: {
    progress: '100',
  },
};

const meta: StyleComponentProps<'tf-progress-bar'> = {
  ref: 'tf-progress-bar',
  tag: 'tf-progress-bar',
  description: 'A progress bar.',
  component: 'Tourisfair Progress Bar',
  variants: [
    progressBar0,
    progressBar10,
    progressBar20,
    progressBar30,
    progressBar40,
    progressBar50,
    progressBar60,
    progressBar70,
    progressBar80,
    progressBar90,
    progressBar100,
  ],
};

export const styleTfProgressBar = (styleBook: StyleBook) => styleBook.addComponent(meta);
