import { css, html, TfBase } from './TfBase.js';
import { TfCarrouselIndicator } from './TfCarrouselIndicator.js';

const style = css`
  .welcome-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--tf-sys-light-background);
    border-radius: 2rem;
    padding: 1rem;
  }

  .welcome-card__title {
    size: 1.5rem;
    font-weight: 800;
    text-align: center;
    width: 100%;
  }

  .welcome-card__content {
    line-height: 1.5rem;
    text-align: center;
    width: 100%;
  }

  .welcome-card__actions {
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .spacer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
    
`;

export class TfWelcomeCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
      <style>
        ${style}
      </style>
      <section class="welcome-card">
        <div class="welcome-card__title">
          <slot name="title"></slot>
        </div>
        <div class="welcome-card__content">
          <slot name="content"></slot>
        </div>
        <tf-carrousel-indicator step=${this.step}></tf-carrousel-indicator>
        <div class="welcome-card__actions">
          <div class="spacer"></div>
          <tf-button variant="primary" size="medium" text active class="action-button transform"/>Next</tf-button>
          <div class="spacer">
            <tf-text-button suffix-icon="<tf-icon icon='arrow-forward-ios'></tf-icon>">
              Skip
            </tf-text-button>
          </div>
        </div>
      </section>
    `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['step'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string) {
    const carrousel = this.shadowRoot?.querySelector('tf-carrousel-indicator') as TfCarrouselIndicator;
    const button = this.shadowRoot?.querySelector('tf-button') as HTMLElement;
    let tfTextButton = this.shadowRoot?.querySelector('tf-text-button');
    if(!tfTextButton){
      tfTextButton = document.createElement('tf-text-button');
      tfTextButton.setAttribute('suffix-icon', '<tf-icon icon="arrow-forward-ios"></tf-icon>');
      tfTextButton.textContent = 'Skip';
    }
    carrousel.setAttribute('step', newValue);
    if (name === 'step' && newValue === 'final') {
      this.shadowRoot?.querySelector('tf-text-button')?.remove();
      button.textContent = 'Start';
    }else if(name === 'step'){
      this.shadowRoot?.querySelector('tf-button')?.classList.add('transform');
      button.textContent = 'Next';
      this.shadowRoot?.querySelectorAll('.spacer')[1].appendChild(tfTextButton);
    }
  }

  get step() {
    return this.getAttribute('step') || 'first';
  }

  set step(value) {
    this.setAttribute('step', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-welcome-card': TfWelcomeCard;
  }
}

customElements.define('tf-welcome-card', TfWelcomeCard);
