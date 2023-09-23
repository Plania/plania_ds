/**
 * @module TfIcon
 * @description
 * To use this component, import the module and use the component in your template.
 * ```typescript
 * import { TfIcon } from 'tf-components';
 * ```
 * ```html
 * <tf-icon name="add"></tf-icon>
 * ```
 *
 * @property {string} name - The name of the icon to display. The name is the same as the SVG file name.
 *
 * @fires tf-load - Dispatched when the SVG is loaded.
 */

import { css, html, TfBase } from './TfBase.js';

// For responsiveness, we use `em` as unit. To change size,
// change the font-size of the host element.
const style = css`
  :host {
    display: inline-block;
    align-self: center;
  }

  :host div {
    display: flex;
    align-items: stretch;
    width: 1em;
    height: 1em;
    min-width: 1em;
    min-height: 1em;
    overflow: hidden;
    transform: translateZ(0);
  }

  :host svg {
    width: 1em;
    height: 1em;
  }
`;

const requestMap = new Map<string, Promise<Response>>();

const iconList = [
  'account-circle',
  'add-circle-outline',
  'add',
  'arrow-back-ios',
  'arrow-drop-down',
  'arrow-drop-up',
  'arrow-forward-ios',
  'change-circle',
  'check',
  'chevron-left',
  'chevron-right',
  'child-friendly',
  'date-range',
  'euro-symbol',
  'explore',
  'eyes',
  'favorite',
  'favorite-border',
  'half-star',
  'hourglass-bottom',
  'hourglass-top',
  'keyboard-arrow-down',
  'keyboard-arrow-right',
  'language',
  'lock',
  'location-on',
  'location-city',
  'low-priority',
  'man',
  'message',
  'numbers',
  'phone',
  'pound-symbol',
  'remove',
  'remove-circle-outline',
  'search',
  'send',
  'star-outlined',
  'star-rate',
  'trash',
  'view-headline',
  'visibility',
  'visibility-off',
  'world',
];

type TfIconName = (typeof iconList)[number];

export class TfIcon extends TfBase {
  private _svg: string = '';

  connectedCallback() {
    this._loadIcon();
    this._render();
  }

  private _render() {
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html`
        <style>
          ${style}
        </style>
        <div aria-hidden="true">${this._svg}</div>
      `);
  }

  private onLoad(message: string) {
    this.dispatchEvent(new CustomEvent('tf-load', { detail: message }));
  }

  private onError(message: string) {
    this.dispatchEvent(new CustomEvent('tf-error', { detail: message }));
  }

  private _getIconPath(): string {
    // The SVG path is computed using the SVG name and is relative
    // to the assets folder.
    const path = `${window.TfDS.LOCAL ? '' : 'https://ds.plania.io'}/assets`;
    return `${path}/icons/${this.icon}.svg`;
  }

  private async _loadIcon(): Promise<void> {
    // Get SVG content from SVG file path.

    const iconPath = this._getIconPath();

    if (!requestMap.has(iconPath)) {
      requestMap.set(iconPath, fetch(iconPath));
    }

    try {
      const iconRequest = await requestMap.get(iconPath);
      const iconResponse = iconRequest?.clone();

      if (iconResponse?.ok) {
        this._svg = await iconResponse.text();
        this.onLoad(`Icon ${this.icon} loaded`);
        this._render();
      } else {
        this.onError(`Icon ${this.icon} failed loading: ${iconResponse?.statusText}`);
      }
    } catch (error) {
      this.onError(`Icon ${this.icon} failed loading: ${error}`);
    }
  }

  get icon(): TfIconName {
    return this.getAttribute('icon') || 'add';
  }

  set icon(value: TfIconName) {
    this.setAttribute('icon', value || 'add');
    this._loadIcon();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-icon': TfIcon;
  }
}

customElements.define('tf-icon', TfIcon);
