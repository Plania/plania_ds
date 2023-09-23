import { HTMLAttributes } from 'react';
import { JsxElement } from 'typescript';

declare class TfBase extends HTMLElement {}

declare class TfActionBar extends TfBase {
  /**
   * This method renders a container for actions.
   * An action is a button that performs a task on an item or a view.
   * The method will reject any children item that is not a TfButton.
   */
  private _render(): void;
}

declare class TfActivityCard extends TfBase {
  img: string;
  title: string;
  rating: string;
  address: string;
  liked: boolean;
}

declare class TfAgeSelector extends TfBase {
  slider?: boolean;
  status?: string;
  min?: string;
  max?: string;
  value?: string;
}

declare class TfBackground extends TfBase {
  actions?: boolean;
}

declare class TfBadge extends TfBase {}

declare class TfBudget extends TfBase {
  /**
   * This property sets the level of the budget per person, from 1 to 5.
   * Level 1: less than 10 €
   * Level 2: between 10 € and 20 €
   * Level 3: between 20 € and 50 €
   * Level 4: between 50 € and 100 €
   * Level 5: more than 100 €
   */
  level: string;
}

declare class TfButton extends TfBase {}

declare class TfCalendar extends TfBase {}
declare class TfCardHeaderImage extends TfBase {}
declare class TfCarrouselIndicator extends TfBase {}
declare class TfCheckbox extends TfBase {}
declare class TfChip extends TfBase {}
declare class TfCityOfTheWeek extends TfBase {}
declare class TfCitySwiper extends TfBase {}
declare class TfCitySwiperItem extends TfBase {}
declare class TfDateSelector extends TfBase {}
declare class TfDay extends TfBase {}
declare class TfDropdown extends TfBase {}
declare class TfDropdownItem extends TfBase {}
declare class TfDropDownListButton extends TfBase {}
declare class TfFavorite extends TfBase {}
declare class TfFavoritePlan extends TfBase {}
declare class TfHomeCard extends TfBase {}
declare class TfIcon extends TfBase {
  icon?: string;
}
declare class TfInfoBubble extends TfBase {}
declare class TfInputPassword extends TfBase {}
declare class TfInputText extends TfBase {
  placeholder?: string;
}
declare class TfLogo extends TfBase {}
declare class TfLogoNotch extends TfBase {}
declare class TfMainContainer extends TfBase {}
declare class TfMonthHeader extends TfBase {}
declare class TfNavigationItem extends TfBase {}
declare class TfNavigationBar extends TfBase {}
declare class TfProgressBar extends TfBase {}
declare class TfRadioButton extends TfBase {
  name?: string;
  checked?: boolean;
}
declare class TfSearchActivityCard extends TfBase {}
declare class TfSearchBadge extends TfBase {}
declare class TfSearchCardHeaderImage extends TfBase {}
declare class TfSearchCardDetails extends TfBase {}
declare class TfSimpleSlider extends TfBase {}
declare class TfSliderThumb extends TfBase {}
declare class TfStep extends TfBase {}
declare class TfStepper extends TfBase {}
declare class TfTextButton extends TfBase {}
declare class TfTypeaheadItem extends TfBase {}
declare class TfTypeAHead extends TfBase {}
declare class TfWeek extends TfBase {}
declare class TfWeekDays extends TfBase {}
declare class TfWelcomeCard extends TfBase {}
declare class TfWelcomeImage extends TfBase {}

declare module 'plania-ds' {
  interface HTMLElementTagNameMap {
    'tf-action-bar': TfActionBar;
    'tf-activity-card': TfActivityCard;
    'tf-age-selector': TfAgeSelector;
    'tf-background': TfBackground;
    'tf-badge': TfBadge;
    'tf-base': TfBase;
    'tf-budget': TfBudget;
    'tf-button': TfButton;
    'tf-calendar': TfCalendar;
    'tf-card-header-image': TfCardHeaderImage;
    'tf-carrousel-indicator': TfCarrouselIndicator;
    'tf-checkbox': TfCheckbox;
    'tf-chip': TfChip;
    'tf-city-of-the-week': TfCityOfTheWeek;
    'tf-city-swiper': TfCitySwiper;
    'tf-city-swiper-item': TfCitySwiperItem;
    'tf-date-selector': TfDateSelector;
    'tf-day': TfDay;
    'tf-dropdown': TfDropdown;
    'tf-dropdown-item': TfDropdownItem;
    'tf-drop-down-list-button': TfDropDownListButton;
    'tf-favorite': TfFavorite;
    'tf-favorite-plan': TfFavoritePlan;
    'tf-home-card': TfHomeCard;
    'tf-icon': TfIcon;
    'tf-info-bubble': TfInfoBubble;
    'tf-input-password': TfInputPassword;
    'tf-input-text': TfInputText;
    'tf-logo': TfLogo;
    'tf-logo-notch': TfLogoNotch;
    'tf-main-container': TfMainContainer;
    'tf-month-header': TfMonthHeader;
    'tf-navigation-item': TfNavigationItem;
    'tf-navigation-bar': TfNavigationBar;
    'tf-progress-bar': TfProgressBar;
    'tf-radio-button': TfRadioButton;
    'tf-search-activity-card': TfSearchActivityCard;
    'tf-search-badge': TfSearchBadge;
    'tf-search-card-header-image': TfSearchCardHeaderImage;
    'tf-search-card-details': TfSearchCardDetails;
    'tf-simple-slider': TfSimpleSlider;
    'tf-slider-thumb': TfSliderThumb;
    'tf-step': TfStep;
    'tf-stepper': TfStepper;
    'tf-text-button': TfTextButton;
    'tf-typeahead-item': TfTypeaheadItem;
    'tf-typeahead': TfTypeAHead;
    'tf-week': TfWeek;
    'tf-week-days': TfWeekDays;
    'tf-welcome-card': TfWelcomeCard;
    'tf-welcome-image': TfWelcomeImage;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tf-action-bar': TfActionBar;
      'tf-activity-card': TfActivityCard;
      'tf-age-selector': TfAgeSelector;
      'tf-background': TfBackground;
      'tf-badge': TfBadge;
      'tf-base': TfBase;
      'tf-budget': TfBudget;
      'tf-button': TfButton;
      'tf-calendar': TfCalendar;
      'tf-card-header-image': TfCardHeaderImage;
      'tf-carrousel-indicator': TfCarrouselIndicator;
      'tf-checkbox': TfCheckbox;
      'tf-chip': TfChip;
      'tf-city-of-the-week': TfCityOfTheWeek;
      'tf-city-swiper': TfCitySwiper;
      'tf-city-swiper-item': TfCitySwiperItem;
      'tf-date-selector': TfDateSelector;
      'tf-day': TfDay;
      'tf-dropdown': TfDropdown;
      'tf-dropdown-item': TfDropdownItem;
      'tf-drop-down-list-button': TfDropDownListButton;
      'tf-favorite': TfFavorite;
      'tf-favorite-plan': TfFavoritePlan;
      'tf-home-card': TfHomeCard;
      'tf-icon': TfIcon;
      'tf-info-bubble': TfInfoBubble;
      'tf-input-password': TfInputPassword;
      'tf-input-text': TfInputText;
      'tf-logo': TfLogo;
      'tf-logo-notch': TfLogoNotch;
      'tf-main-container': TfMainContainer;
      'tf-month-header': TfMonthHeader;
      'tf-navigation-item': TfNavigationItem;
      'tf-navigation-bar': TfNavigationBar;
      'tf-progress-bar': TfProgressBar;
      'tf-radio-button': TfRadioButton;
      'tf-search-activity-card': TfSearchActivityCard;
      'tf-search-badge': TfSearchBadge;
      'tf-search-card-header-image': TfSearchCardHeaderImage;
      'tf-search-card-details': TfSearchCardDetails;
      'tf-simple-slider': TfSimpleSlider;
      'tf-slider-thumb': TfSliderThumb;
      'tf-step': TfStep;
      'tf-stepper': TfStepper;
      'tf-text-button': TfTextButton;
      'tf-typeahead-item': TfTypeaheadItem;
      'tf-typeahead': TfTypeahead;
      'tf-week': TfWeek;
      'tf-week-days': TfWeekDays;
      'tf-welcome-card': TfWelcomeCard;
      'tf-welcome-image': TfWelcomeImage;
    }
  }

  interface TfBase extends HTMLAttributes<JsxElement> {
    children?: React.JSX.Element | React.JSX.Element[] | string;
    slot?: string;
  }
  interface TfActionBar extends TfBase {
    /**
     * This method renders a container for actions.
     * An action is a button that performs a task on an item or a view.
     * The method will reject any children item that is not a TfButton.
     */
    private _render(): void;
  }
  interface TfActivityCard extends TfBase {
    img: string;
    title: string;
    rating: string;
    address: string;
    liked: boolean;
  }
  interface TfAgeSelector extends TfBase {
    slider?: boolean;
    status?: string;
    min?: string;
    max?: string;
    value?: string;
  }
  interface TfBackground extends TfBase {
    actions?: boolean;
  }
  interface TfBadge extends TfBase {}
  interface TfBudget extends TfBase {
    /**
     * This property sets the level of the budget per person, from 1 to 5.
     * Level 1: less than 10 €
     * Level 2: between 10 € and 20 €
     * Level 3: between 20 € and 50 €
     * Level 4: between 50 € and 100 €
     * Level 5: more than 100 €
     */
    level: string;
  }
  interface TfButton extends TfBase {
    variant?: string;
    size?: string;
    icon?: string;
    text?: boolean;
    active?: boolean;
  }
  interface TfCalendar extends TfBase {}
  interface TfCardHeaderImage extends TfBase {}
  interface TfCarrouselIndicator extends TfBase {}
  interface TfCheckbox extends TfBase {}
  interface TfChip extends TfBase {}
  interface TfCityOfTheWeek extends TfBase {}
  interface TfCitySwiper extends TfBase {}
  interface TfCitySwiperItem extends TfBase {}
  interface TfDateSelector extends TfBase {}
  interface TfDay extends TfBase {}
  interface TfDropdown extends TfBase {}
  interface TfDropdownItem extends TfBase {}
  interface TfDropDownListButton extends TfBase {}
  interface TfFavorite extends TfBase {}
  interface TfFavoritePlan extends TfBase {}
  interface TfHomeCard extends TfBase {}
  interface TfIcon extends TfBase {
    icon?: string;
  }
  interface TfInfoBubble extends TfBase {}
  interface TfInputPassword extends TfBase {}
  interface TfInputText extends TfBase {
    placeholder?: string;
  }
  interface TfLogo extends TfBase {}
  interface TfLogoNotch extends TfBase {}
  interface TfMainContainer extends TfBase {}
  interface TfMonthHeader extends TfBase {}
  interface TfNavigationItem extends TfBase {}
  interface TfNavigationBar extends TfBase {}
  interface TfProgressBar extends TfBase {}
  interface TfRadioButton extends TfBase {
    name?: string;
    checked?: boolean;
  }
  interface TfSearchActivityCard extends TfBase {}
  interface TfSearchBadge extends TfBase {}
  interface TfSearchCardHeaderImage extends TfBase {}
  interface TfSearchCardDetails extends TfBase {}
  interface TfSimpleSlider extends TfBase {}
  interface TfSliderThumb extends TfBase {}
  interface TfStep extends TfBase {}
  interface TfStepper extends TfBase {
    steps?: number;
    current?: number;
  }
  interface TfTextButton extends TfBase {}
  interface TfTypeaheadItem extends TfBase {}
  interface TfTypeahead extends TfBase {}
  interface TfWeek extends TfBase {}
  interface TfWeekDays extends TfBase {}
  interface TfWelcomeCard extends TfBase {}
  interface TfWelcomeImage extends TfBase {}
}

export default global;
