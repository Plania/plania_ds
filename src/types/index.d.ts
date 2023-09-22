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
  slider: boolean;
  status: string;
  min: string;
  max: string;
  value: string;
}

declare class TfBackground extends TfBase {
  actions: boolean;
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
declare class TfIcon extends TfBase {}
declare class TfInfoBubble extends TfBase {}
declare class TfLogo extends TfBase {}
declare class TfLogoNotch extends TfBase {}
declare class TfMainContainer extends TfBase {}
declare class TfMonthHeader extends TfBase {}
declare class TfNavigationItem extends TfBase {}
declare class TfNavigationBar extends TfBase {}
declare class TfPasswordInput extends TfBase {}
declare class TfProgressBar extends TfBase {}
declare class TfRadioButton extends TfBase {
  name: string;
  checked: boolean;
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
declare class TfTextInput extends TfBase {}
declare class TfTypeAHeadItem extends TfBase {}
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
    'tf-logo': TfLogo;
    'tf-logo-notch': TfLogoNotch;
    'tf-main-container': TfMainContainer;
    'tf-month-header': TfMonthHeader;
    'tf-navigation-item': TfNavigationItem;
    'tf-navigation-bar': TfNavigationBar;
    'tf-password-input': TfPasswordInput;
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
    'tf-text-input': TfTextInput;
    'tf-type-a-head-item': TfTypeAHeadItem;
    'tf-type-a-head': TfTypeAHead;
    'tf-week': TfWeek;
    'tf-week-days': TfWeekDays;
    'tf-welcome-card': TfWelcomeCard;
    'tf-welcome-image': TfWelcomeImage;
  }
}
