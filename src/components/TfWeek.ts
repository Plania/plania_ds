import { css, html, TfBase } from './TfBase.js';

const style = css`
    .week {
        display: flex;
        align-items: center;
        height: 100%;
    }
`;

class TfWeek extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="week">
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
          <tf-day day="1" state="default"></tf-day>
        </div>
      `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-week': TfWeek;
  }
}

customElements.define('tf-week', TfWeek);
