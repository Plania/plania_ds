import { StyleComponent, StyleComponentProps } from './StyleComponent.js';
import { css, html } from '../components/TfBase.js';
import { StyleTfActivityCard } from './StyleTfActivityCard.js';
import { styleTfAgeSelector } from './StyleTfAgeSelector.js';
import { styleTfBackground } from './StyleBackground.js';
import { styleTfBadge } from './StyleTfBadge.js';
import { styleTfBudget } from './StyleTfBudget.js';
import { styleTfButton } from './StyleTfButton.js';
import { styleTfCalendar } from './StyleTfCalendar.js';
import { styleTfCardDetails } from './StyleTfCardDetails.js';
import { styleTfCardHeaderImage } from './StyleTfCardHeaderImage.js';
import { styleTfCarrouselIndicator } from './StyleTfCarrousselIndicator.js';
import { styleTfCheckbox } from './StyleTfCheckbox.js';
import { styleTfChip } from './StyleTfChip.js';
import { styleTfCityOfTheWeek } from './StyleTfCityOfTheWeek.js';
import { styleTfCitySwiper } from './StyleTfCitySwiper.js';
import { styleTfCitySwiperItem } from './StyleTfCitySwiperItem.js';
import { styleTfDateSelector } from './StyleTfDateSelector.js';
import { styleTfDay } from './StyleTfDay.js';
import { styleTfDropdown } from './StyleTfDropdown.js';
import { styleTfDropdownItem } from './StyleTfDropdownItem.js';
import { styleTfDropDownListButton } from './StyleTfDropDownListButton.js';
import { styleTfFavorite } from './StyleTfFavorite.js';
import { styleTfFavoritePlan } from './StyleTfFavoritePlan.js';
import { styleTfHomeCard } from './StyleTfHomeCard.js';
import { styleTfIcon } from './StyleTfIcon.js';
import { styleTfInputPassword } from './StyleTfInputPassword.js';
import { styleTfInputText } from './StyleTfInputText.js';
import { styleTfLogo } from './StyleTfLogo.js';
import { styleTfLogoNotch } from './StyleTfLogoNotch.js';
import { styleTfMainContainer } from './StyleTfMainContainer.js';
import { StyleTfMonthHeader } from './StyleMonthHeader.js';
import { styleTfNavigationItem } from './StyleTfNavigationItem.js';
import { styleTfNavigationBar } from './StyleTfNavigationBar.js';
import { styleTfProgressBar } from './StyleTfProgressBar.js';
import { styleTfSearchActivityCard } from './StyleTfSearchActivityCard.js';
import { styleTfSearchBadge } from './StyleTfSearchBadge.js';
import { styleTfSearchCardDetails } from './StyleTfSearchCardDetails.js';
import { styleTfSearchCardHeaderImage } from './StyleTfSearchCardHeaderImage.js';
import { styleTfSimpleSlider } from './StyleTfSimpleSlider.js';
import { styleTfSliderThumb } from './StyleTfSliderThumb.js';
import { styleTfStep } from './StyleTfStep.js';
import { styleTfTextButton } from './StyleTfTextButton.js';
import { styleTfTypeAHeadItem } from './StyleTfTypeAHeadItem.js';
import { styleTfTypeAHead } from './StyleTfTypeAHead.js';
import { styleTfWeek } from './StyleTfWeek.js';
import { styleTfWeekDays } from './StyleTfWeekDays.js';
import { styleTfWelcomeCard } from './StyleTfWelcomeCard.js';
import { styleTfWelcomeImage } from './StyleTfWelcomeImage.js';

export const styleBookCSS: string = css`
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

  * {
    --sb-color: 255, 255, 255;
    --sb-background: rgb(var(--sb-color));
    --sb-on-color: 32, 32, 32;
    --sb-on-background: rgb(var(--sb-on-color));
    --sb-error: #fdd;
    --sb-on-error: #f00;
    --sb-alpha-1: 0.1;
    --sb-alpha-2: 0.2;
    --sb-alpha-3: 0.3;
    --sb-alpha-4: 0.4;
    --sb-alpha-5: 0.5;
    --sb-alpha-6: 0.6;
    --sb-alpha-7: 0.7;
    --sb-alpha-8: 0.8;
    --sb-alpha-9: 0.9;
  }

  .style-book {
    font-family: 'SF Pro Display', 'Arial', Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    overflow: auto;
  }

  .style-component {
    background-color: var(--sb-background);
    border-radius: 0.5rem;
    color: var(--sb-on-background);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 720px;
  }

  .style-variant-card {
    background-color: var(--sb-background);
    border-radius: 0.5rem;
    box-shadow: 4px 4px 10px 0 rgba(var(--sb-on-color), var(--sb-alpha-5));
    margin: 1rem;
    min-width: 200px;
    padding: 1rem;
  }

  .style-variant {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
  }

  h3 {
    border-bottom: 1px solid rgba(var(--sb-on-color), var(--sb-alpha-2));
    display: block !important;
    margin: 0;
    width: 100%;
  }

  pre {
    background-color: var(--sb-on-background);
    color: var(--sb-background);
    max-width: 640px;
    overflow: auto;
    padding: 0.5rem;
  }

  pre.error {
    background-color: var(--sb-error);
    color: var(--sb-on-error);
  }

  .main {
    display: flex;
    flex-wrap: nowrap;
  }

  .navbar {
    min-width: 13rem;
  }
`;

export class StyleBook extends HTMLElement {
  private _components: StyleComponent[] = [];

  constructor() {
    const styleBook: StyleBook = document.querySelector('style-book') as unknown as StyleBook;
    if (styleBook) return styleBook;
    super();
    this.innerHTML = html`
      <div class="main">
        <style>
          ${styleBookCSS}
        </style>
        <nav class="navbar">
          <ul></ul>
        </nav>
        <div class="style-book"></div>
      </div>
    `;
  }

  // connectedCallback() {}

  addComponent<K extends keyof HTMLElementTagNameMap>(props_: StyleComponentProps<K>): StyleBook {
    const component: StyleComponent = this.buildComponent(props_);
    this.querySelector('.style-book')?.appendChild(component);
    return this;
  }

  addToNavbar(component_: StyleComponent): void {
    const navbarItem: HTMLElement = document.createElement('li');
    navbarItem.innerHTML = html`<a
      onclick="document.querySelector('#${component_.id}')?.scrollIntoView()"
      href="#${component_.tag}"
      >${component_.tag}</a
    >`;
    this.querySelector('.navbar ul')?.appendChild(navbarItem);
  }

  buildComponent<K extends keyof HTMLElementTagNameMap>(
    props_: StyleComponentProps<K>
  ): StyleComponent {
    const component: StyleComponent = this.getComponentByTag<K>(props_.tag);
    component.ref = props_.ref;
    component.description = props_.description;
    component.component = props_.component;
    component.variants = props_.variants;
    component.tag = props_.tag;
    component.id = props_.tag;
    this.addToNavbar(component);
    return component;
  }

  getComponentByTag<K extends keyof HTMLElementTagNameMap>(tag_: K): StyleComponent {
    let component: StyleComponent | undefined = this._components.find(
      (component_) => component_.tag === tag_
    ) as StyleComponent;
    if (!component) {
      component = document.createElement('style-component') as StyleComponent;
      component.tag = tag_;
      this._components.push(component);
      // TODO : add to nav
    }
    return component;
  }

  addHTML(html_: string): void {
    const styleBook: HTMLDivElement | null = this.querySelector('.style-book');
    if (styleBook) styleBook.innerHTML += html_;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'style-book': StyleBook;
  }
}

customElements.define('style-book', StyleBook);

/**
 * Stylebook
 */

// const styleBook = document.createElement('style-book') as StyleBook;
const styleBook = new StyleBook();
document.body.appendChild(styleBook);
StyleTfActivityCard(styleBook);
styleTfAgeSelector(styleBook);
styleTfBackground(styleBook);
styleTfBadge(styleBook);
styleTfBudget(styleBook);
styleTfButton(styleBook);
styleTfCalendar(styleBook);
styleTfCardDetails(styleBook);
styleTfCardHeaderImage(styleBook);
styleTfCarrouselIndicator(styleBook);
styleTfCheckbox(styleBook);
styleTfChip(styleBook);
styleTfCityOfTheWeek(styleBook);
styleTfCitySwiper(styleBook);
styleTfCitySwiperItem(styleBook);
styleTfDateSelector(styleBook);
styleTfDay(styleBook);
styleTfDropdown(styleBook);
styleTfDropdownItem(styleBook);
styleTfDropDownListButton(styleBook);
styleTfFavorite(styleBook);
styleTfFavoritePlan(styleBook);
styleTfHomeCard(styleBook);
styleTfIcon(styleBook);
styleTfInputText(styleBook);
styleTfInputPassword(styleBook);
styleTfLogo(styleBook);
styleTfLogoNotch(styleBook);
styleTfMainContainer(styleBook);
StyleTfMonthHeader(styleBook);
styleTfNavigationBar(styleBook);
styleTfNavigationItem(styleBook);
styleTfProgressBar(styleBook);
styleTfSearchActivityCard(styleBook);
styleTfSearchBadge(styleBook);
styleTfSearchCardDetails(styleBook);
styleTfSearchCardHeaderImage(styleBook);
styleTfSimpleSlider(styleBook);
styleTfSliderThumb(styleBook);
styleTfStep(styleBook);
styleTfTextButton(styleBook);
styleTfTypeAHead(styleBook);
styleTfTypeAHeadItem(styleBook);
styleTfWeek(styleBook);
styleTfWeekDays(styleBook);
styleTfWelcomeCard(styleBook);
styleTfWelcomeImage(styleBook);

document.body.appendChild(styleBook);
