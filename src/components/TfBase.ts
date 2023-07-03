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
      --tf-sys-light-primary-container: #c2e8ff;
      --tf-sys-light-secondary-container: #ffdacf;
      --tf-sys-light-tertiary-container: #ffddb0;
      --tf-sys-light-error-container: #ffdad4;
      --tf-sys-light-onprimary: #250127;
      --tf-sys-light-onsecondary: #250127;
      --tf-sys-light-ontertiary: #250127;
      --tf-sys-light-on-error : #FFFFFF;
      --tf-sys-light-primary: #00aae3;
      --tf-sys-light-secondary: #ff805e;
      --tf-sys-light-tertiary: #ffb030;
      --tf-sys-light-error: #ba1b1b;
      --tf-sys-light-surface-variant: #d4d4d4;
      --tf-sys-light-surface: #fbfdfd;
      --tf-sys-light-outline: #71787d;
      --tf-sys-light-background: #f3f3f3;
      --tf-onprimary-main: #f9f9f8;
      --tf-onsecondary-main: #f9f9f8;
      --tf-ontertiary-main: #f9f9f8;
      --tf-secondary-main: #f2bf41;
      --tf-tertiary-main: #4ca7de;
      --tf-main-main: #012e4a;
      --tf-main-variant: #505050;
      --tf-main-disabled: #c4c4c4;
      --tf-background-main: #ffffff;
      --tf-background-main: #f3f3f3;
      --tf-ref-green: #56a359;
      --tf-ref-white-25: #ffffff;
      --tf-ref-neutral-neutral95: #eff1f1;
      --tf-ref-primary-primary90: #c2e8ff;
      --tf-ref-primary-primary10: #001e2c;

      --tf-subhead1 : 700 1rem/2rem Nunito,sans-serif;
      --tf-caption : 400 0.75rem/1rem Nunito,sans-serif;
      --tf-body-small : 400 0.75rem/1rem Nunito,sans-serif;
      --tf-button : 700 1rem Nunito,sans-serif;
      --tf-body1 : 400 1rem/1.5rem Nunito,sans-serif;
   }

   .primary {
      background-color: var(--tf-sys-light-primary);
      color: var(--tf-sys-light-onprimary);
   }

   .secondary {
      background-color: var(--tf-sys-light-secondary);
      color: var(--tf-onsecondary-main);
   }

   .tertiary {
      background-color: var(--tf-sys-light-tertiary);
      color: var(--tf-sys-light-onprimary);
   }

   .primary-container {
      background-color: var(--tf-ref-primary-primary90);
      color: var(--tf-ref-primary-primary10);
   }

   .background {
      background-color: var(--tf-background-main);
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
