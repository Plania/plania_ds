export * from './components/TfActionBar.js';
export * from './components/TfActivityCard.js';
export * from './components/TfAgeSelector.js';
export * from './components/TfBackground.js';
export * from './components/TfBadge.js';
export * from './components/TfBase.js';
export * from './components/TfBudget.js';
export * from './components/TfButton.js';
export * from './components/TfCalendar.js';
export * from './components/TfCardHeaderImage.js';
export * from './components/TfCarrouselIndicator.js';
export * from './components/TfCheckbox.js';
export * from './components/TfChip.js';
export * from './components/TfCityOfTheWeek.js';
export * from './components/TfCitySwiper.js';
export * from './components/TfCitySwiperItem.js';
export * from './components/TfDateSelector.js';
export * from './components/TfDay.js';
export * from './components/TfDoubleSlider.js';
export * from './components/TfDropdown.js';
export * from './components/TfDropdownItem.js';
export * from './components/TfDropDownListButton.js';
export * from './components/TfFavorite.js';
export * from './components/TfFavoritePlan.js';
export * from './components/TfHomeCard.js';
export * from './components/TfIcon.js';
export * from './components/TfInfoBubble.js';
export * from './components/TfInputPassword.js';
export * from './components/TfInputText.js';
export * from './components/TfLogo.js';
export * from './components/TfLogoNotch.js';
export * from './components/TfMainContainer.js';
export * from './components/TfMonthHeader.js';
export * from './components/TfNavigationItem.js';
export * from './components/TfNavigationBar.js';
export * from './components/TfProgressBar.js';
export * from './components/TfSearchActivityCard.js';
export * from './components/TfSearchBadge.js';
export * from './components/TfSearchCardHeaderImage.js';
export * from './components/TfSearchCardDetails.js';
export * from './components/TfSimpleSlider.js';
export * from './components/TfSliderThumb.js';
export * from './components/TfStep.js';
export * from './components/TfStepper.js';
export * from './components/TfTextButton.js';
export * from './components/TfTypeaheadItem.js';
export * from './components/TfTypeahead.js';
export * from './components/TfWeek.js';
export * from './components/TfWeekDays.js';
export * from './components/TfWelcomeCard.js';
export * from './components/TfWelcomeImage.js';

// Creates a proxy to the marked object as `window.marked` as a type-safe ESM export

/*

This loads (and executes) the Marked script the first time that
this module is imported into the module graph, which assigns
the Marked object to `window.marked`. This is scope pollution, and is
one of the things that ES modules avoid, but is necessary here because
you expressed dissatisfaction at the available Leaflet ES module options
at existing CDN URLs.

This proxy technique "works" well here because Leaflet
is an object export/namspace and is documented to be used this way. However,
note that — for other modules which provide multiple exports that are
intended to be imported individually by name — this technique wouldn't be
a good fit because it requires the entire module to be made available
on a single (named) export. (Note that the default export is just a named export
using the name "default").

Please refer to: https://stackoverflow.com/questions/73091042/importing-leaflet-into-module-from-cdn-with-typescript-support
*/

import 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.8.0/leaflet.js';

import type * as Marked from 'marked';
import { html } from './components/TfBase.js';

const { marked } = window as unknown as { marked: typeof Marked };

// Set options
marked.use({
  pedantic: false,
  gfm: true,
});

// Override function
const renderer = {
  code(text: string, level: any) {
    return html`
      <style>
        pre {
          background-color: lightgrey;
          padding: 1rem;
          border-radius: 0.25rem;
          overflow: auto;
        }
      </style>
      <pre>
        <code>${text}</code>
      </pre
      >
    `;
  },
  codespan(text: string) {
    return html`
      <style>
        code {
          background-color: lightgrey;
          padding: 0.25rem;
          border-radius: 0.25rem;
        }
      </style>
      <code>${text}</code>
    `;
  },
};

marked.use({ renderer });

// Same as `export {marked as default}`:
export default marked;
