export const html = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export const css = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

const style = css`
   html,
   body,
   div,
   span,
   applet,
   object,
   iframe,
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   p,
   blockquote,
   pre,
   a,
   abbr,
   acronym,
   address,
   big,
   cite,
   code,
   del,
   dfn,
   em,
   img,
   ins,
   kbd,
   q,
   s,
   samp,
   small,
   strike,
   strong,
   sub,
   sup,
   tt,
   var,
   b,
   u,
   i,
   center,
   dl,
   dt,
   dd,
   ol,
   ul,
   li,
   fieldset,
   form,
   label,
   legend,
   table,
   caption,
   tbody,
   tfoot,
   thead,
   tr,
   th,
   td,
   article,
   aside,
   canvas,
   details,
   embed,
   figure,
   figcaption,
   footer,
   header,
   hgroup,
   menu,
   nav,
   output,
   ruby,
   section,
   summary,
   time,
   mark,
   audio,
   video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
   }
   /* HTML5 display-role reset for older browsers */
   article,
   aside,
   details,
   figcaption,
   figure,
   footer,
   header,
   hgroup,
   menu,
   nav,
   section {
      display: block;
   }
   body {
      line-height: 1;
   }
   ol,
   ul {
      list-style: none;
   }
   blockquote,
   q {
      quotes: none;
   }
   blockquote:before,
   blockquote:after,
   q:before,
   q:after {
      content: '';
      content: none;
   }
   table {
      border-collapse: collapse;
      border-spacing: 0;
   }

   :host {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 2rem;
   }

   * {
      --tf-sys-light-primary: var(--tf-sys-light-primary, #00aae3);
      --tf-sys-light-onprimary: var(--tf-sys-light-onprimary, #250127);
      --tf-sys-light-primary-container: var(--tf-sys-light-primary-container, #c2e8ff);
      --tf-sys-light-secondary: var(--tf-sys-light-secondary, #ff805e);
      --tf-sys-light-onsecondary: var(--tf-sys-light-onsecondary, #250127);
      --tf-sys-light-secondary-container: var(--tf-sys-light-secondary-container, #ffdacf);
      --tf-sys-light-tertiary: var(--tf-sys-light-tertiary, #ffb030);
      --tf-sys-light-ontertiary: var(--tf-sys-light-ontertiary, #250127);
      --tf-sys-light-tertiary-container: var(--tf-sys-light-tertiary-container, #ffddb0);
      --tf-sys-light-error: var(--tf-sys-light-error, #ba1b1b);
      --tf-sys-light-on-error: var(--tf-sys-light-on-error, #ffffff);
      --tf-sys-light-error-container: var(--tf-sys-light-error-container, #ffdad4);
      --tf-sys-light-surface-variant: var(--tf-sys-light-surface-variant, #d4d4d4);
      --tf-sys-light-surface: var(--tf-sys-light-surface, #f9f9f8);
      --tf-sys-light-outline: var(--tf-sys-light-outline, #71787d);
      --tf-sys-light-background: var(--tf-sys-light-background, #f3f3f3);

      --tf-subhead1: var(--tf-subhead1, 700 1rem/2rem Nunito, sans-serif);
      --tf-caption: var(--tf-caption, 400 0.75rem/1rem Nunito, sans-serif);
      --tf-body-small: var(--tf-body-small, 400 0.75rem/1rem Nunito, sans-serif);
      --tf-button: var(--tf-button, 700 1rem Nunito, sans-serif);
      --tf-body1: var(--tf-body1, 400 1rem/1.5rem Nunito, sans-serif);
   }

   .primary {
      background-color: var(--tf-sys-light-primary);
      color: var(--tf-sys-light-onprimary);
   }

   .secondary {
      background-color: var(--tf-sys-light-secondary);
      color: var(--tf-sys-light-onsecondary);
   }

   .tertiary {
      background-color: var(--tf-sys-light-tertiary);
      color: var(--tf-sys-light-ontertiary);
   }

   .primary-container {
      background-color: var(--tf-sys-light-primary-container);
   }

   .background {
      background-color: var(--tf-sys-light-background);
   }
`;

export class TfBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot &&
         (this.shadowRoot.innerHTML = html`
            <style>
               ${style}
            </style>
         `);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-base': TfBase;
   }
}

customElements.define('tf-base', TfBase);
