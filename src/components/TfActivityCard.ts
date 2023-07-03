import { css, html, TfBase } from './TfBase.js';
import { tfIconNameMap } from './TfIcon.js';

const style = css`
   :host {
      display: flex;
      margin: 0;
      width: 100%;
      box-shadow: 2px 2px 4px 0px #00000040;
   }

   .image-container {
      width: 30%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
   }

   .image-container > tf-chip {
      position: absolute;
   }

   #hourglass-top {
      left: 50%;
      transform: translate(-50%, -50%);
   }

   #hourglass-bottom {
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
   }

   h3 {
      font: var(--tf-subhead1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }

   .main-container {
      padding: 0 0.5rem 0.5rem 0.5rem;
      width: 70%;
      background-color: var(--tf-sys-light-surface);
   }

   .activity-location-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
   }

   .activity-location-container > tf-icon {
      width: 1rem;
      height: 1rem;
   }

   .activity-location-container > p {
      font: var(--tf-caption);
   }

   .activity-button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.25rem;
      width: 100%;
   }

   .activity-button-container > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--tf-sys-light-error);
   }

   .activity-star-container {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
   }

   .activity-star-container > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--tf-sys-light-tertiary);
   }

   .activity-delete-button > button {
      background-color: var(--tf-sys-light-error);
   }
`;

export class TfActivityCard extends TfBase {
  elements: {
      div: HTMLElement;
      starContainer: Element;
      buttonContainer: Element;
      address: Element;
      h3: HTMLHeadingElement;
      hourglassTop: Element;
      hourglassBottom: Element;
   };
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="image-container">
               <tf-chip active icon symbol="hourglass-top" id="hourglass-top">09:00</tf-chip>
               <tf-chip active icon symbol="hourglass-bottom" id="hourglass-bottom">12:00</tf-chip>
            </section>
            <section class="main-container">
               <div>
                  <h3>Activity</h3>
                  <div class="activity-location-container">
                     <tf-icon icon="location-on"></tf-icon>
                     <p id="address"></p>
                  </div>
               </div>
               <div>
                  <div class="activity-star-container"></div>
                  <div class="activity-button-container">
                     <tf-button
                        variant="tertiary"
                        size="small"
                        state="default"
                        active
                        icon="low-priority"
                     ></tf-button>
                     <tf-button
                        variant="default"
                        size="small"
                        state="default"
                        active
                        icon="change-circle"
                     ></tf-button>
                     <tf-button
                        variant="default"
                        size="small"
                        state="default"
                        active
                        icon="euro-symbol"
                     ></tf-button>
                     <tf-button
                        variant="default"
                        size="small"
                        state="default"
                        active
                        icon="trash"
                        class="activity-delete-button"
                     ></tf-button>
                     ${tfIconNameMap['favorite-border']}
                  </div>
               </div>
            </section>
         `);
    this.elements = {
      div: this.shadowRoot?.querySelector('section') as HTMLElement,
      starContainer: this.shadowRoot?.querySelector('.activity-star-container') as Element,
      buttonContainer: this.shadowRoot?.querySelector('.activity-button-container') as Element,
      address: this.shadowRoot?.querySelector('#address') as Element,
      h3: this.shadowRoot?.querySelector('h3') as HTMLHeadingElement,
      hourglassTop: this.shadowRoot?.querySelector('#hourglass-top') as Element,
      hourglassBottom: this.shadowRoot?.querySelector('#hourglass-bottom') as Element,
    };
  }

  connectedCallback() {
    const deleteButton = this.findDeleteButton();
    const tfChips = this.findAllTfChips();
    if (!deleteButton || !tfChips.length) return;

    deleteButton.style.setProperty('background-color', 'var(--tf-sys-light-error)');
    tfChips.forEach((chip) => {
      chip.shadowRoot?.querySelector('span')?.classList.add('chip-card');
    });
    deleteButton.style.setProperty('color', 'var(--tf-sys-light-on-error)');
  }

  findDeleteButton() {
    return this.shadowRoot
      ?.querySelector('.activity-delete-button')
      ?.shadowRoot?.querySelector('button');
  }

  findAllTfChips() {
    const tfChips = this.shadowRoot?.querySelectorAll('tf-chip');
    return tfChips ? Array.from(tfChips) : [];
  }

  static get observedAttributes() {
    return ['img', 'rating', 'address', 'title', 'liked', 'start-hours', 'end-hours'];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    let allElementsDefined = true;
    for (const key in this.elements) {
      if (!this.elements[key as keyof typeof this.elements]) {
        allElementsDefined = false;
        break;
      }
    }

    if (!allElementsDefined) {
      return;
    }

    const updateBackgroundImage = (_newValue: string) => {
      this.elements.div.style.setProperty('background-image', `url(${_newValue})`);
    };

    const updateRating = (_newValue: string) => {
      this.elements.starContainer.innerHTML = '';
      const value = parseFloat(_newValue);
      let j = 0;
      for (let i = 0; i < value - 1; i++) {
        this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['star-rate']);
      }
      if (value % 1 !== 0) {
        this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['half-star']);
        j++;
      } else {
        this.elements.starContainer.insertAdjacentHTML('beforeend', tfIconNameMap['star-rate']);
      }
      for (let i = 0; i < 5 - value - j; i++) {
        this.elements.starContainer.insertAdjacentHTML(
          'beforeend',
          tfIconNameMap['star-outlined']
        );
      }
      this.elements.starContainer.insertAdjacentHTML('beforeend', `<p>${_newValue}</p>`);
    };

    const updateAddress = (_newValue: string) => {
      this.elements.address.innerHTML = _newValue;
    };

    const updateTitle = (_newValue: string) => {
      this.elements.h3.innerHTML = _newValue;
    };

    const updateLikedButton = () => {
      this.elements.buttonContainer.removeChild(
            this.elements.buttonContainer.lastElementChild as Node
      );
      this.elements.buttonContainer.insertAdjacentHTML('beforeend', tfIconNameMap['favorite']);
    };

    const updateStartHours = (_newValue: string) => {
      this.elements.hourglassTop.innerHTML = _newValue;
    };

    const updateEndHours = (_newValue: string) => {
      this.elements.hourglassBottom.innerHTML = _newValue;
    };

    const updateElement = {
      img: updateBackgroundImage,
      rating: updateRating,
      address: updateAddress,
      title: updateTitle,
      liked: updateLikedButton,
      'start-hours': updateStartHours,
      'end-hours': updateEndHours,
    };

    const updateFunction = updateElement[_name as keyof typeof updateElement];
    if (updateFunction) {
      updateFunction(_newValue);
    }
  }

  get img() {
    return this.getAttribute('img') || '';
  }

  set img(value) {
    this.setAttribute('img', value ?? '');
  }

  get rating() {
    return this.getAttribute('rating') || '';
  }

  set rating(value) {
    this.setAttribute('rating', value ?? '');
  }

  get address() {
    return this.getAttribute('address') || '';
  }

  set address(value) {
    this.setAttribute('address', value ?? '');
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  set title(value) {
    this.setAttribute('title', value ?? '');
  }

  get liked() {
    return this.hasAttribute('liked');
  }

  set liked(value) {
    value ? this.setAttribute('liked', '') : this.removeAttribute('liked');
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-activity-card': TfActivityCard;
   }
}

customElements.define('tf-activity-card', TfActivityCard);
