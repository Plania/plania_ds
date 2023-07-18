import { css, html, TfBase } from './TfBase.js';

const style = css`
  .date-selector {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export class TfDateSelector extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div class="date-selector">
          <tf-text-input
            icon
            status="default"
            pictogramme="date-range"
            label="Start"
            id="start"
          ></tf-text-input>
        </div>
      `);
  }

  connectedCallback() {
    this.keyUpEventForTextInput();
  }

  keyUpEventForTextInput() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input?.addEventListener('keyup', (e) => {
        e.preventDefault();
        if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === undefined) return;
       
        input.value = input.value.replace(/[^0-9-]/g,'');
        
        if (input.value.length === 2) {
          input.value += '-';
        }
        if (input.value.length === 5) {
          input.value += '-';
        }
        if (input.value.length >= 10) {
          input.value = input.value.slice(0, 10);
          input.status = 'default';
          input.innerHTML = '';
          if(input.value.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) return;
          input.status = 'error';
          input.innerHTML += html`<span slot="error">date format JJ-MM-YYYY </span>`;
        }
      });
      input?.addEventListener('input', (e) => {
        input.id === 'start' ? this.start = input.value.slice(0,10) : this.end = input.value.slice(0,10);
      });
    });

    
  }

  static get observedAttributes() {
    return ['variant', 'start', 'end'];
  }

  attributeChangedCallback(name : string , oldValue: string, newValue: string) {
    const div = this.shadowRoot?.querySelector('div') as HTMLElement;
    
    switch (name) {
    case 'variant':
      if (newValue === 'interval'){
        this.createEndInput(div);
      }else if(newValue === 'single'){
        if(div?.querySelector('#end')) div?.querySelector('#end')?.remove();
        this.removeAttribute('end');
      }
      break;
    case 'start':
      this.shadowRoot?.querySelector('#start')?.setAttribute('value', newValue);
      break;
    case 'end':
      this.shadowRoot?.querySelector('#end')?.setAttribute('value', newValue);
      break;
    }
  }

  createEndInput(div : HTMLElement) {
    const input = document.createElement('tf-text-input');
    input.setAttribute('icon', '');
    input.setAttribute('status', 'default');
    input.setAttribute('pictogramme', 'date-range');
    input.setAttribute('label', 'End');
    input.setAttribute('id', 'end');
    div?.appendChild(input);
    this.keyUpEventForTextInput();
  }

  get variant() {
    return this.getAttribute('variant');
  }

  set variant(value) {
    this.setAttribute('variant', value || 'single');
  }

  get start() {
    return this.getAttribute('start');
  }

  set start(value) {
    this.setAttribute('start', value || '');
  }

  get end() {
    return this.getAttribute('end');
  }

  set end(value) {
    this.setAttribute('end', value || '');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-date-selector': TfDateSelector;
  }
}

customElements.define('tf-date-selector', TfDateSelector);
