import { css, html, TfBase } from './TfBase.js';

const style = css`
   span {
      background-color: var(--tf-sys-light-surface);
      outline: 1px solid var(--tf-sys-light-primary);
      border-radius: 1rem;
      padding: 0.25rem 0.5rem;
      font: var(--tf-body-small);
      display: flex;
      align-items: center;
      width: fit-content;
      cursor: pointer;
   }

   span > tf-icon {
      width: 1rem;
      height: 1rem;
      color: var(--tf-sys-light-onprimary);
   }

   .selected {
      background-color: var(--tf-sys-light-primary);
   }

   .disabled {
      color:var(--tf-sys-light-outline);
      background-color: var(--tf-sys-light-surface-variant);
      outline-color: var(--tf-sys-light-outline);
      cursor: default;
   }

   .chip-card {
      background-color: var(--tf-sys-light-surface);
      outline:none;
      box-shadow: 2px 2px 4px 0px #00000040;
      padding: 0rem 0.5rem;
   }
`;

export class TfChip extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <span class='disabled'>
               <slot></slot>
            </span>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['selected', 'active', 'symbol', 'icon'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const chipElem = this.shadowRoot?.querySelector('span');
    if (!chipElem) return;
    chipElem.classList.remove('selected');
    chipElem.classList.remove('disabled');

    if(!this.active){
      chipElem.classList.add('disabled');
    }
    switch (name) {
    case 'selected':
      chipElem.classList.add('selected');
      break;
    case 'symbol':
      if (!this.icon) return;
      chipElem.insertAdjacentHTML(
        'afterbegin',
        '<tf-icon icon="' + newValue + '"></tf-icon>'
      );
      break;
    }
  }

  get type() {
    return this.getAttribute('type') || 'activity';
  }

  set type(value) {
    this.setAttribute('type', value ?? 'activity');
  }

  get selected() {
    return this.hasAttribute('selected');
  }

  set selected(value) {
    value && this.setAttribute('selected', '');
    !value && this.removeAttribute('selected');
  }

  get active() {
    return this.hasAttribute('active');
  }

  set active(value) {
    value && this.setAttribute('active', '');
    !value && this.removeAttribute('active');
  }

  get symbol() {
    return this.getAttribute('symbol') || '';
  }

  set symbol(value) {
    this.setAttribute('symbol', value ?? '');
  }

  get icon() {
    return this.hasAttribute('icon');
  }

  set icon(value) {
    value && this.setAttribute('icon', '');
    !value && this.removeAttribute('icon');
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-chip': TfChip;
   }
}

customElements.define('tf-chip', TfChip);
