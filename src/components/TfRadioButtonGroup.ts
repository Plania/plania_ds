import { html, TfBase } from './TfBase.js';
import { TfRadioButton } from './TfRadioButton.js';

export class TfRadioButtonGroup extends TfBase {
  constructor() {
    super();
    this.shadowRoot && (this.shadowRoot.innerHTML = html` <slot></slot> `);
  }

  connectedCallback() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;
    slot.addEventListener('slotchange', this._checkNodes.bind(this));
    this.addEventListener('tf-input', (e) => {
      const target = e.target as TfRadioButton;
      this.value = target.value;
      this._updateValue();
    });
  }

  static get observedAttributes() {
    return ['name', 'value'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;
    if (name === 'name') {
      this._checkNodes();
    }
  }

  private _isRadioButton(node: Node) {
    return node.nodeName === 'TF-RADIO-BUTTON';
  }

  private _checkNodes() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;
    const nodes = slot.assignedNodes();
    nodes.forEach((node, index) => {
      if (this._isRadioButton(node)) {
        let radio = node as TfRadioButton;
        radio.name = this.name;
        radio.id = (radio.id || this.id || this.name) + '-' + index;
      }
    });
  }

  private _updateValue() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;
    const nodes = slot.assignedNodes();
    let isSet = false;
    nodes.forEach((node) => {
      if (this._isRadioButton(node)) {
        let radio = node as TfRadioButton;
        if (radio.value === this.value && !isSet) {
          radio.checked = true;
          isSet = true;
        } else {
          radio.checked = false;
        }
      }
    });
  }

  get name() {
    return this.getAttribute('name') || 'radio';
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  set value(value) {
    this.setAttribute('value', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-radio-button-group': TfRadioButtonGroup;
  }
}

customElements.define('tf-radio-button-group', TfRadioButtonGroup);
