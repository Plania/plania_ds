import { css, html, TfBase } from './TfBase.js';

const style = css`
  .week-days {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font: var(--tf-body2-big);
  }

  .week-days > span {
    display: flex;
    width: 2rem;
    height: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    color: var(--greyscale-black, #000);
    text-align: center;
    font-family: Nunito;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (max-width: 230px) {
    .week-days {
      gap: 0;
      justify-content: space-between;
    }
  }
`;

export class TfWeekDays extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="week-days">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>
      `);
  }

  // connectedCallback() {}

  // attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {}
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-week-days': TfWeekDays;
  }
}

customElements.define('tf-week-days', TfWeekDays);
