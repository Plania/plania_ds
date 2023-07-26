import { html, css, TfBase } from './TfBase.js';

const tfActivityCardStyle = css`
  .container {
    display: flex;
    gap: 0px;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  }

  .header-image {
    width: 100%;
    height: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;
  }

  .subtitle {
    font-size: var(--tf-body-small);
    color: var(--tf-sys-light-outline);
  }

  .budget {
    display: flex;
  }

  .type {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .description {
    flex-grow: 1;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
  }
`;
//
export class TfSearchActivityCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfActivityCardStyle}
        </style>
        <div class="container">
          <section class="header-image">
            <slot name="image"></slot>
          </section>
          <section class="details">
            <h2>
              <slot name="title"></slot>
            </h2>
            <p class="subtitle ">
              <slot name="subtitle"></slot>
            </p>
            <div class="budget">
              <slot name="budget"></slot>
            </div>
            <slot class="type" name="chip"></slot>
            <p class="description ">
              <slot name="description"></slot>
            </p>
            <div class="actions">
              <slot name="actions"></slot>
            </div>
          </section>
        </div>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['title', 'subtitle', 'src'];
  }

  attributeChangedCallback(name: string /*oldValue: string | null,*/, newValue: string | null) {
    const imgElem = this.shadowRoot?.querySelector<HTMLDivElement>('.header-img');

    if (!imgElem) return;
    if (name === 'src') {
      imgElem.style.backgroundImage = `url(${newValue})`;
    }
    if (name === 'title') {
      this.innerHTML += html` <span slot="title">${this.title}</span> `;
    }
    if (name === 'subtitle') {
      this.innerHTML += html` <span slot="subtitle">${this.subtitle}</span> `;
    }
  }
  // FAV

  // IMG
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value ?? '');
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
    'tf-search-activity-card': TfSearchActivityCard;
  }
}

customElements.define('tf-search-activity-card', TfSearchActivityCard);
