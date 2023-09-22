export const html = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export const css = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

const style = new CSSStyleSheet();
style.replaceSync(css`
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
    vertical-align: baseline;
    font-family: Nunito, 'Arial', Helvetica, sans-serif;
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
    --tf-sys-light-primary: var(--light-primary, #00aae3);
    --tf-sys-light-onprimary: var(--light-onprimary, #250127);
    --tf-sys-light-primary-container: var(--light-primary-container, #c2e8ff);
    --tf-sys-light-secondary: var(--light-secondary, #ff805e);
    --tf-sys-light-onsecondary: var(--light-onsecondary, #250127);
    --tf-sys-light-secondary-container: var(--light-secondary-container, #ffdacf);
    --tf-sys-light-tertiary: var(--light-tertiary, #ffb030);
    --tf-sys-light-ontertiary: var(--light-ontertiary, #250127);
    --tf-sys-light-tertiary-container: var(--light-tertiary-container, #ffddb0);
    --tf-sys-light-error: var(--light-error, #ba1b1b);
    --tf-sys-light-on-error: var(--light-on-error, #ffffff);
    --tf-sys-light-error-container: var(--light-error-container, #ffdad4);
    --tf-sys-light-surface-variant: var(--light-surface-variant, #d4d4d4);
    --tf-sys-light-surface: var(--light-surface, #f9f9f8);
    --tf-sys-light-background: var(--light-background, #f3f3f3);
    --tf-sys-light-outline: var(--light-outline, #71787d);
    --tf-sys-light-outline-opacity-016: var(--light-outline-opacity-016, rgba(113, 120, 125, 0.16));
    --tf-subhead1: var(--subhead1, 700 1rem/2rem Nunito, sans-serif);
    --tf-caption: var(--caption, 400 0.75rem/1rem Nunito, sans-serif);
    --tf-body-medium: var(--body-medium, 400 0.875rem/1.25rem Nunito, sans-serif);
    --tf-body-small: var(--body-small, 400 0.75rem/1rem Nunito, sans-serif);
    --tf-button: var(--button, 700 1rem Nunito, sans-serif);
    --tf-body1: var(--body1, 400 1rem/1.5rem Nunito, sans-serif);
    --tf-label-large: var(--label-large, 600 1rem/1.5rem Nunito, sans-serif);
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
`);

export class TfBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot && (this.shadowRoot.adoptedStyleSheets = [style]);
  }

  adoptStylesheet(stylesheet: CSSStyleSheet) {
    this.shadowRoot &&
      (this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, stylesheet]);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-base': TfBase;
  }
}

customElements.define('tf-base', TfBase);
