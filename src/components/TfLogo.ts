/**
 * @module TfLogo
 * @description
 * To use this component, import the module and use the component in your template.
 * ```typescript
 * import { TfLogo } from 'tf-components';
 * ```
 * ```html
 * <tf-logo type="mantra" style="color"></tf-logo>
 * ```
 *
 * @property {string} type - type of Logo: alone, mantra or text.
 * @property {string} style - style of Logo: color, mono, inverted.
 *
 * @fires tf-load - Dispatched when the SVG is loaded.
 * @fires tf-error - Dispatched when the SVG failed loading.
 */

import { css, html, TfBase } from './TfBase.js';

const style = new CSSStyleSheet();
style.replaceSync(css`
  :host {
    display: inline-block;
    align-self: center;
  }

  :host div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41em;
    height: 23em;
    min-width: 1em;
    min-height: 1em;
    overflow: hidden;
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`);

const requestMap = new Map<string, Promise<Response>>();

export class TfLogo extends TfBase {
  private _svg: string = '';

  connectedCallback() {
    this._loadLogo();
    this._render();
  }

  private _render() {
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = html` <div aria-hidden="true">${this._svg}</div> `);
  }

  private onLoad(message: string) {
    this.dispatchEvent(new CustomEvent('tf-load', { detail: message }));
  }

  private onError(message: string) {
    this.dispatchEvent(new CustomEvent('tf-error', { detail: message }));
  }

  private _getLogoPath(): string {
    // The SVG path is computed using the SVG name and is relative
    // to the assets folder.
    const path = `${window.TfDS?.LOCAL ? '' : 'https://ds.plania.io'}/assets`;
    const logo_filename = `logo_${this.type}${
      this.type !== 'alone' ? `_${this.color || 'color'}` : ''
    }`;
    return `${path}/logo/${logo_filename}.svg`;
  }

  private async _loadLogo(): Promise<void> {
    // Get SVG content from SVG file path.

    const logoPath = this._getLogoPath();
    const logoDescription = ` type=${this.type}${
      this.type !== 'alone' ? `, color=${this.color}` : ''
    }`;

    if (!requestMap.has(logoPath)) {
      requestMap.set(logoPath, fetch(logoPath));
    }

    try {
      const logoRequest = await requestMap.get(logoPath);
      const logoResponse = logoRequest?.clone();

      if (logoResponse?.ok) {
        this._svg = await logoResponse.text();
        this.onLoad(`Logo ${logoDescription} loaded`);
        this._render();
      } else {
        this.onError(`Logo ${logoDescription} failed loading: ${logoResponse?.statusText}`);
      }
    } catch (error) {
      this.onError(`Logo ${logoDescription} failed loading: ${error}`);
    }
  }

  get type() {
    return this.getAttribute('type') || 'text';
  }

  set type(value) {
    this.setAttribute('type', value);
    this._loadLogo();
  }

  get color() {
    return this.getAttribute('color') || 'color';
  }

  set color(value) {
    this.setAttribute('color', value);
    this._loadLogo();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-logo': TfLogo;
  }
}

customElements.define('tf-logo', TfLogo);
