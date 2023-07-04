import { css, html } from '../components/TfBase.js';
import { styleBookCSS } from './StyleBook.js';
import { StyleVariant, StyleVariantProps } from './StyleVariant.js';

export interface StyleComponentProps<K extends keyof HTMLElementTagNameMap> {
   ref: string;
   description: string;
   tag: K;
   component: string;
   variants: StyleVariantProps<K>[];
}

export class StyleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${styleBookCSS}
            </style>
            <style>
               details {
                  border: 1px solid #ccc1;
                  border-radius: 0.25rem;
                  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.1);
                  margin: 0.25rem;
               }
               summary {
                  list-style-position: outside;
                  border-bottom: 1px solid #ddd;
                  padding-bottom: 0.5rem;
               }
               summary a {
                  display: inline-block;
                  float: right;
               }
            </style>
            <details class="style-component" open>
               <summary>
                  <slot name="title"></slot>
                  <a href="#">Top <tf-icon icon="arrow-drop-up" /></a>
               </summary>
               <slot></slot>
            </details>
         `);
  }

  connectedCallback(): void {
    this.innerHTML = html`
         <h2 slot="title" style="display: inline;">${this.component}</h2>
         <p>${this.description}</p>
         ${this.innerHTML}
      `;

    this.variants.map((variant_) => this.addVariant(variant_));
  }

  static get observedAttributes(): string[] {
    return ['ref', 'description', 'tag', 'component', 'variants'];
  }

  addVariant<K extends keyof HTMLElementTagNameMap>(props_: StyleVariantProps<K>): StyleComponent {
    const styleVariant: StyleVariant<K> = document.createElement(
      'style-variant'
    ) as StyleVariant<K>;
    styleVariant.props = props_;
    styleVariant.tag = this.tag as K;
    this.shadowRoot?.querySelector('.style-component')?.appendChild(styleVariant);
    return this;
  }

  get ref(): string {
    return this.getAttribute('ref') ?? '';
  }

  set ref(value_) {
    this.setAttribute('ref', value_);
  }

  get description(): string {
    return this.getAttribute('description') ?? '';
  }

  set description(value_) {
    this.setAttribute('description', value_);
  }

  get tag() {
    return this.getAttribute('tag') ?? '';
  }

  set tag(value_) {
    this.setAttribute('tag', value_ ?? 'div');
  }

  get component(): string {
    return this.getAttribute('component') ?? '';
  }

  set component(value_) {
    this.setAttribute('component', value_);
  }

  get variants(): StyleVariantProps<keyof HTMLElementTagNameMap>[] {
    return JSON.parse(this.getAttribute('variants') ?? '[]');
  }

  set variants(value_: StyleVariantProps<keyof HTMLElementTagNameMap>[]) {
    this.setAttribute('variants', JSON.stringify(value_));
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'style-component': StyleComponent;
   }
}

customElements.define('style-component', StyleComponent);
