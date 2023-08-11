import { html, css, TfBase } from './TfBase.js';

const style = css`
  :host {
    display: flex;
    margin: 0;
    width: 100%;
    cursor: pointer;
    position: relative;
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  tf-text-input {
    width: 100%;
    z-index: 999;
  }

  .hide {
    display: none !important;
  }

  .dropDown {
    position: absolute;
    width: calc(100% - 2px);
    top: calc(100% - 1rem);
    display: flex;
    padding-bottom: 1.1rem;
    padding-top: 1.25rem;
    flex-direction: column;
    gap: 0.25rem;
    border-radius: 0 0 1.5rem 1.5rem;
    border: 1px solid var(--tf-read-only-light-outline-opacity-016, rgba(113, 120, 125, 0.16));
    background: var(--tf-sys-light-surface, #f9f9f8);
  }
`;

export class TfTypeAHead extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="container">
          <tf-text-input></tf-text-input>
          <div class="dropDown">
            <slot></slot>
          </div>
        </div>
      `);
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector('tf-text-input') as HTMLElement;
    this.handleOnClickedForItem();
    this.handleOnInput();
    input?.addEventListener('blur', () => {
      this.open = false;
    });

    input?.addEventListener('focus', () => {
      this.open = true;
    });
  }

  static get observedAttributes() {
    return ['icon', 'status', 'open', 'label', 'value'];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    const input = this.shadowRoot?.querySelector('tf-text-input');
    const div = this.shadowRoot?.querySelector('.dropDown') as HTMLDivElement;
    if (oldVal === newVal) return;
    switch (name) {
    case 'status':
      input?.setAttribute('status', newVal);
      break;
    case 'label':
      input?.setAttribute('label', newVal);
      break;
    case 'value':
      input?.setAttribute('value', newVal);

      break;
    }

    if (this.icon) {
      input?.setAttribute('icon', '');
      input?.setAttribute('pictogramme', 'search');
    } else {
      input?.removeAttribute('icon');
      input?.removeAttribute('pictogramme');
    }
    if (this.open && this.status !== 'disabled') {
      setTimeout(() => {
        div.style.display = 'flex';
        this.handleOnClickedForItem();
      }, 100);
    }else{
      setTimeout(() => {
        div.style.display = 'none';
      }, 100);
    }
  }

  handleOnClickedForItem() {
    const expanderT = this.shadowRoot?.querySelector('slot');
    const listOfTfHead = expanderT
      ?.assignedElements()
      .filter((e) => e.nodeName === 'TF-TYPEAHEAD-ITEM') as HTMLElement[];
    listOfTfHead?.forEach((e) => {
      e.addEventListener('click', () => {
        const input = this.shadowRoot?.querySelector('tf-text-input');
        const value = input?.hasAttribute('value') ? input.getAttribute('value') : e.textContent;
        input?.setAttribute('value', e.textContent || '');
        this.setAttribute('value', value || '');
        this.open = false;
        this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
      });
    });
  }

  handleOnInput() {
    const input = this.shadowRoot?.querySelector('tf-text-input');
    

    input?.addEventListener('input' , () =>{
      this.value = input.value;
      let find = 0;
      const slot = this.shadowRoot?.querySelector('slot');
      const listOfTfHead = slot?.assignedElements().filter((e) => e.nodeName === 'TF-TYPEAHEAD-ITEM') as HTMLElement[];
      listOfTfHead?.forEach((e) => {
        console.log(input.value.toLowerCase());
        if (e.textContent?.toLowerCase().match(input.value.toLowerCase())) {
          e.style.display = 'flex';
          find += 1;
        } else {
          e.style.display = 'none';
         
        }
      });
      if(find === 0){
        listOfTfHead?.forEach((e) => {
          e.style.display = 'flex';
        }
        );
      }
    });
  }
    

  get icon() {
    return this.hasAttribute('icon');
  }

  set icon(value) {
    value && this.setAttribute('icon', '');
    !value && this.removeAttribute('icon');
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    value && this.setAttribute('open', '');
    !value && this.removeAttribute('open');
  }

  get value() {
    return this.getAttribute('value') as string;
  }

  set value(value : string) {
    this.setAttribute('value', value);
  }

  set status(value: string) {
    this.setAttribute('status', value);
  }

  get status() {
    return this.getAttribute('status') as string;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-type-a-head': TfTypeAHead;
  }
}

window.customElements.define('tf-type-a-head', TfTypeAHead);
