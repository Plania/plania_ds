import { html, css, TfBase } from './TfBase.js';

const tfFavoriteStyle = css`
   .favorite {
      stroke: var(--tf-sys-light-surface);
      stroke-width: 2;
      fill: var(--tf-sys-light-surface);
   }
   .enabled {
      fill: none !important;
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
            <div>
               <svg
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M4.8823 17.0843L13.2581 25.5336C13.5926 25.871 13.7599 26.0398 13.9683 26.0398C14.1766 26.0398 14.3439 25.871 14.6784 25.5336L23.0542 17.0843C25.1993 14.9203 25.4638 11.522 23.6794 9.05222L23.099 8.24892C20.8559 5.14424 16.0911 5.64022 14.5355 9.14033C14.3171 9.63186 13.6194 9.63186 13.401 9.14033C11.8454 5.64022 7.08061 5.14424 4.83749 8.24892L4.25711 9.05222C2.47267 11.522 2.73719 14.9203 4.8823 17.0843Z"
                     class="favorite"
                  />
               </svg>
            </div>
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
    const favoriteElem = this.shadowRoot?.querySelector('path') as SVGPathElement;
    // The enabled attribute has no value: we only check if it is present or not
    if (this.enabled) {
      favoriteElem.classList.add('enabled');
    } else {
      favoriteElem.classList.remove('enabled');
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
