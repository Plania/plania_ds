import { css, html, TfBase } from './TfBase.js';

const tfCardHeaderImageStyle = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  .badge {
    position: relative;
    left: 2rem;
  }
  .favorite {
    position: relative;
    bottom: 1rem;
    left: 2rem;
  }

  .image {
    max-width: 100%;
    max-height: 100%;
    width: 14rem;
    height: 20rem;
    background-size: cover;
    background-position: center;
  }
`;

export class TfSearchCardHeaderImage extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfCardHeaderImageStyle}
        </style>
        <div class="image">
          <tf-badge class="badge no"></tf-badge>
          <tf-favorite class="favorite" enabled=""></tf-favorite>
        </div>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['src', 'badge', 'favorite'];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    const divElem = this.shadowRoot?.querySelector<HTMLDivElement>('.image');
    const favoriteElem = this.shadowRoot?.querySelector<HTMLDivElement>('badge');
    if (!divElem) return;
    if (_name === 'src') {
      divElem.style.backgroundImage = `url(${_newValue})`;
    }
    if (this.enabled) {
      favoriteElem?.classList.add('enabled');
    } else {
      favoriteElem?.classList.remove('enabled');
    }
  }

  get enabled() {
    return this.hasAttribute('enabled');
  }

  set enabled(_value) {
    _value && this.setAttribute('enabled', '');
    !_value && this.removeAttribute('enabled');
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(value) {
    this.setAttribute('src', value ?? '');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-search-card-header-image': TfSearchCardHeaderImage;
  }
}

customElements.define('tf-search-card-header-image', TfSearchCardHeaderImage);
