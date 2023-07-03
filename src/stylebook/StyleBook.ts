import { StyleComponent, StyleComponentProps } from './StyleComponent.js';
import { css, html } from '../components/TfBase.js';
import { styleTfBadge } from './StyleTfBadge.js';
import { styleTfBudget } from './StyleTfBudget.js';
import { styleTfButton } from './StyleTfButton.js';
import { styleTfCardDetails } from './StyleTfCardDetails.js';
import { styleTfCardHeaderImage } from './StyleTfCardHeaderImage.js';
import { styleTfCarrouselIndicator } from './StyleTfCarrousselIndicator.js';
import { styleTfChip } from './StyleTfChip.js';
import { styleTfCitySwiper } from './StyleTfCitySwiper.js';
import { styleTfCitySwiperItem } from './StyleTfCitySwiperItem.js';
import { styleTfDropDownListButton } from './StyleTfDropDownListButton.js';
import { styleTfFavorite } from './StyleTfFavorite.js';
import { styleTfHomeCard } from './StyleTfHomeCard.js';
import { styleTfIcon } from './StyleTfIcon.js';
import { styleTfInputText } from './StyleTfInputText.js';
import { styleTfLogo } from './StyleTfLogo.js';
import { styleTfMainContainer } from './StyleTfMainContainer.js';
import { styleTfTextButton } from './StyleTfTextButton.js';
import { styleTfWelcomeCard } from './StyleTfWelcomeCard.js';
import { styleTfProgressBar } from './StyleTfProgressBar.js';
import { styleTfNavigationItem } from './StyleNavigationItem.js';
import { styleTfNavigationBar } from './StyleTfNavigationBar.js';
import { styleTfInputPassword } from './StyleTfInputPassword.js';
import { styleTfLogoNotch } from './StyleTfLogoNotch.js';
import { styleTfCheckbox } from './StyleCheckbox.js';
import { styleTfSimpleSlider } from './StyleTfSimpleSlider.js';
import { styleTfAgeSelector } from './StyleTfAgeSelector.js';
import { styleTfCityOfTheWeek } from './StyleTfCityOfTheWeek.js';
import { styleTfFavoritePlan } from './StyleTfFavoritePlan.js';
import { StyleTfActivityCard } from './StyleTfActivityCard.js';
import { styleTfCalendar } from './StyleTfCalendar.js';
import { styleTfDay } from './StyleTfDay.js';

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
      gap: 1rem;
      flex-wrap: wrap;
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
`;

export class StyleBook extends HTMLElement {
  private _components: StyleComponent[] = [];

  constructor() {
    const styleBook: StyleBook = document.querySelector('style-book') as unknown as StyleBook;
    if (styleBook) return styleBook;
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot &&
         (this.shadowRoot.innerHTML = html`
            <style>
               ${styleBookCSS}
            </style>
            <nav class="navbar">
               <ul></ul>
            </nav>
            <div class="style-book"></div>
         `);
  }

  // connectedCallback() {}

  addComponent<K extends keyof HTMLElementTagNameMap>(props_: StyleComponentProps<K>): StyleBook {
    const component: StyleComponent = this.buildComponent(props_);
    this.shadowRoot?.querySelector('.style-book')?.appendChild(component);
    return this;
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
    if (this.shadowRoot) {
      const styleBook: HTMLDivElement | null = this.shadowRoot.querySelector('.style-book');
      if (styleBook) styleBook.innerHTML += html_;
    }
    // TODO : add to nav
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

const styleBook = document.createElement('style-book') as StyleBook;
styleTfCalendar(styleBook);
styleTfDay(styleBook);
StyleTfActivityCard(styleBook);
styleTfFavoritePlan(styleBook);
styleTfCityOfTheWeek(styleBook);
styleTfAgeSelector(styleBook);
styleTfSimpleSlider(styleBook);
styleTfButton(styleBook);
styleTfCheckbox(styleBook);
styleTfLogoNotch(styleBook);
styleTfInputPassword(styleBook);
styleTfNavigationBar(styleBook);
styleTfNavigationItem(styleBook);
styleTfInputText(styleBook);
styleTfCitySwiperItem(styleBook);
styleTfCitySwiper(styleBook);
styleTfIcon(styleBook);
styleTfHomeCard(styleBook);
styleTfWelcomeCard(styleBook);
styleTfTextButton(styleBook);
styleTfBadge(styleBook);
styleTfBudget(styleBook);
styleTfCardDetails(styleBook);
styleTfCardHeaderImage(styleBook);
styleTfCarrouselIndicator(styleBook);
styleTfChip(styleBook);
styleTfDropDownListButton(styleBook);
styleTfFavorite(styleBook);
styleTfLogo(styleBook);
styleTfMainContainer(styleBook);
styleTfProgressBar(styleBook);
document.body.appendChild(styleBook);
