import { css, html, TfBase } from './TfBase.js';

const tfCardHeaderImageStyle = css`
   :host {
      display: block;
      width: 14rem;
      height: 20rem;
      background-size: cover;
      background-position: center;
   }

   .header-img {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: inherit;
      background-position: inherit;
   }

   tf-badge {
      position: absolute;
      left: 2.25rem;
      top: 0.06rem;
   }

   tf-favorite {
      position: absolute;
      left: 2.38rem;
      bottom: 1.06rem
   }
`;

export class TfCardHeaderImage extends TfBase {

  private mutationCallback = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== 'attributes' ||
          (mutation.attributeName !== 'enabled')
      ) {
        return;
      }
      this.eventForFavorite(
        mutation.attributeName,
        mutation.target.getAttribute(mutation.attributeName)
      );
    }
  };
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfCardHeaderImageStyle}
        </style>
        <div class="header-img">
          <tf-favorite enabled></tf-favorite>
        </div>
      `);
  }

  connectedCallback() {
    const tfFavorite = this.shadowRoot?.querySelector('tf-favorite') as HTMLElement;
    const observer = new MutationObserver(this.mutationCallback);
    observer.observe(tfFavorite, { attributes: true });
  }

  static get observedAttributes() {
    return ['src', 'badge', 'favorite'];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    const divElem = this.shadowRoot?.querySelector<HTMLDivElement>('.header-img');
    const favoriteElem = this.shadowRoot?.querySelector('tf-favorite') as HTMLElement;
    if (!divElem) return;
    switch (_name) {
    case 'src':
      divElem.style.backgroundImage = `url(${_newValue})`;
      break;
    case 'badge':
      if (_newValue === _oldValue) return;
      if (_newValue === 'eco') {
        divElem.insertAdjacentElement('afterbegin', document.createElement('tf-badge'));
      } else if (_newValue === 'none') {
        const badgeElem = divElem.querySelector('tf-badge');
        badgeElem?.remove();
      }
      break;
    }
    if (this.favorite) {
      favoriteElem?.removeAttribute('enabled');
    } else {
      favoriteElem?.setAttribute('enabled', '');
    }
  }

  eventForFavorite(attribute: string, value: string) {
    if (attribute === 'enabled') {
      if (value === null) {
        this.favorite = true;
      } else {
        this.favorite = false;
      }
    }
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(value) {
    this.setAttribute('src', value ?? '');
  }

  get badge() {
    return this.getAttribute('badge');
  }

  set badge(value) {
    this.setAttribute('badge', value ?? '');
  }

  get favorite() {
    return this.hasAttribute('favorite');
  }

  set favorite(value) {
    value && this.setAttribute('favorite', '');
    !value && this.removeAttribute('favorite');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-card-header-image': TfCardHeaderImage;
  }
}

customElements.define('tf-card-header-image', TfCardHeaderImage);
