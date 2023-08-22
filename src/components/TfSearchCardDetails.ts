import { html, css, TfBase } from './TfBase.js';

const tfCardDetailsStyle = css`
  .type {
    font-weight: bold;
    display: block;
    padding-top: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.625rem;
    
  }

  .actions {
    float: right;
    font-weight: 700;
  }
`;

export class TfSearchCardDetails extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfCardDetailsStyle}
        </style>
        <section class="details">
          <h2>
            <slot name="title"></slot>
          </h2>
          <p class="subtitle">
            <slot name="subtitle"></slot>
          </p>
          <slot name="budget"></slot>
          <slot class="type" name="chip"></slot>
          <p class="description">
            <slot name="description"></slot>
          </p>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </section>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['title', 'subtitle'];
  }

  attributeChangedCallback(name: string /*oldValue: string | null, newValue: string | null*/) {
    if (name === 'title') {
      this.innerHTML += html` <span slot="title">${this.title}</span> `;
    }
    if (name === 'subtitle') {
      this.innerHTML += html` <span slot="subtitle">${this.subtitle}</span> `;
    }
  }
  // SUBTITLE
  get subtitle() {
    return this.getAttribute('subtitle') || 'title';
  }

  set subtitle(value) {
    this.setAttribute('subtitle', value);
  }
  // TITLE
  get title() {
    return this.getAttribute('title') || 'title';
  }

  set title(value) {
    this.setAttribute('title', value);
  }
}
//

declare global {
  interface HTMLElementTagNameMap {
    'tf-search-card-details': TfSearchCardDetails;
  }
}

customElements.define('tf-search-card-details', TfSearchCardDetails);
