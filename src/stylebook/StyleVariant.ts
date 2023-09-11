import marked from '../components.js';
import { css, html } from '../components/TfBase.js';
import { styleBookCSS } from './StyleBook.js';

export const escapeHTML = (htm_: string): string =>
  htm_.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export type StyleVariantDataProps = Record<string, unknown>;

export interface StyleVariantProps<K extends keyof HTMLElementTagNameMap> {
  name: string;
  description: string;
  tag: K;
  data: StyleVariantDataProps;
}

export interface StyleComponentProps<K extends keyof HTMLElementTagNameMap> {
  ref: string;
  description: string;
  tag: K;
  component: string;
  variants: StyleVariantProps<K>[];
}

export class StyleVariant<K extends keyof HTMLElementTagNameMap> extends HTMLElement {
  private _props: StyleVariantProps<K> = {} as StyleVariantProps<K>;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${styleBookCSS}
        </style>
        <div class="style-variant-card">
          <slot name="title"></slot>
          <slot name="description"></slot>
          <div class="style-variant">
            <slot></slot>
          </div>
          <slot name="code"></slot>
        </div>
      `);
  }

  connectedCallback() {
    this.setVariantProps(this.props);
  }

  static get observedAttributes(): string[] {
    return ['name', 'description', 'data', 'tag'];
  }

  attributeChangedCallback(
    name_: string,
    oldValue_: string | null,
    _newValue_: string | null
  ): void {
    if (oldValue_ !== _newValue_) {
      name_ === 'name' && this.updateName();
      name_ === 'description' && this.updateDescription();
      name_ === 'data' && this.updateData();
    }
  }

  updateName(): void {
    const titleElem: HTMLHeadingElement | null = this.querySelector<HTMLHeadingElement>('h3');
    const nameHTML = marked.parse(this.name);
    if (titleElem) {
      titleElem.innerHTML = nameHTML;
    } else {
      this.innerHTML += html` <h3 slot="title" style="display: inline;">${nameHTML}</h3> `;
    }
  }

  updateDescription(): void {
    if (!this.description) return;
    const descriptionHTML = marked.parse(this.description);
    const descriptionElem: HTMLParagraphElement | null =
      this.querySelector<HTMLParagraphElement>('p');
    if (descriptionElem) {
      descriptionElem.innerHTML = descriptionHTML;
    } else {
      this.innerHTML += html` <p slot="description">${descriptionHTML}</p> `;
    }
  }

  updateData(): void {
    const variant: HTMLElementTagNameMap[K] = this.buildVariant(
      this.tag,
      this.data
    ) as unknown as HTMLElementTagNameMap[K];
    const shouldBe: string = this.shouldBe();
    this.innerHTML += html`
      <div slot="code">
        <pre><code>${escapeHTML(variant.outerHTML)}</code></pre>
        ${variant.outerHTML !== shouldBe
          ? html`<p>Should be:</p>
              <pre class="error"><code>${escapeHTML(shouldBe)}</code></pre>`
          : ''}
      </div>
    `;
    this.appendChild(variant);
  }

  buildVariant(tag_: K, data_: string): HTMLElementTagNameMap[K] {
    const variant: HTMLElementTagNameMap[K] = document.createElement(tag_);
    const parsedData: StyleVariantDataProps = JSON.parse(data_) as unknown as StyleVariantDataProps;
    for (const key in parsedData) {
      if (key === 'content') continue;
      variant.setAttribute(key, parsedData[key] as string);
    }
    variant.innerHTML += variant.shadowRoot ? parsedData.content || '' : 'Not defined yet';
    return variant;
  }

  shouldBe(): string {
    const data: StyleVariantDataProps = JSON.parse(this.data);
    const expected: string = Object.keys(data)
      .map((key_) => this.checkDataKey(key_, data[key_]))
      .join('')
      .trim();
    return `<${this.tag}${expected ? ' ' : ''}${expected}>${data.content || ''}</${this.tag}>`;
  }

  checkDataKey(key_: string, value_: unknown): string {
    if (key_ === 'content') return '';
    if (typeof value_ === 'boolean') return value_ ? ` ${key_}=""` : '';
    return ` ${key_}="${value_}"`;
  }

  setVariantProps(props_: StyleVariantProps<K>): void {
    this.name = props_.name;
    this.description = props_.description;
    this.data = JSON.stringify(props_.data);
  }

  get name(): string {
    return this.getAttribute('name') ?? '';
  }

  set name(value_: string) {
    this.setAttribute('name', value_);
  }

  get description(): string {
    return this.getAttribute('description') ?? '';
  }

  set description(value_: string) {
    this.setAttribute('description', value_);
  }

  get data(): string {
    return this.getAttribute('data') ?? '';
  }

  set data(value_: string) {
    this.setAttribute('data', value_);
  }

  get tag(): K {
    return this.getAttribute('tag') as K;
  }

  set tag(value_: string) {
    this.setAttribute('tag', value_);
  }

  get props(): StyleVariantProps<K> {
    return this._props;
  }

  set props(value_: StyleVariantProps<K>) {
    this._props = value_;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'style-variant': StyleVariant<keyof HTMLElementTagNameMap>;
  }
}

customElements.define('style-variant', StyleVariant);
