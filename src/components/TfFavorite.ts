import { html, css, TfBase } from './TfBase.js';
import { TfIcon } from './TfIcon.js';

const tfFavoriteStyle = css`
  :host {
    display: flex;
    align-items: center;
  }
`;

export class TfFavorite extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfFavoriteStyle}
        </style>
        <tf-icon icon="favorite-border"></tf-icon>
      `);
  }

  connectedCallback() {
    this.shadowRoot?.querySelector('div')?.addEventListener('click', () => {
      this.enabled = !this.enabled;
    });
  }

  static get observedAttributes() {
    return ['enabled'];
  }

  attributeChangedCallback() {
    // _newValue: string | null // _oldValue: string | null, // _name: string,
    const favoriteElem = this.shadowRoot?.querySelector('tf-icon') as TfIcon;
    // The enabled attribute has no value: we only check if it is present or not
    if (this.enabled) {
      favoriteElem.icon = 'favorite';
    } else {
      favoriteElem.icon = 'favorite-border';
    }
  }

  get enabled() {
    return this.hasAttribute('enabled');
  }

  set enabled(_value) {
    _value && this.setAttribute('enabled', '');
    !_value && this.removeAttribute('enabled');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-favorite': TfFavorite;
  }
}

customElements.define('tf-favorite', TfFavorite);
