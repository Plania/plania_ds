import { css, html, TfBase } from './TfBase.js';

const style = css`
:host {
   display: inline-flex;
   padding: 4px 8px;
   justify-content: center;
   align-items: center;
   height: 20px;    
    width: 20px;    
   border-radius: 50%;;
   background: var(--theme-sys-light-surface-variant, #D4D4D4);
 }
 .step-number {
   display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--theme-sys-light-surface-variant, #D4D4D4);
    
   text-align: center;
   font-family: Nunito;
   font-size: 12px;
   font-style: normal;
   font-weight: 700;
   line-height: 16px;
   letter-spacing: 0.4px;
   background: var(--tf-sys-light-outline, var(--theme-sys-light-outline, #71787D));
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
 }
`;

export class TfStep extends TfBase {
    private _currentStep: number;
    
    constructor(stepNumber: number) {
        super();
        this._currentStep = stepNumber || 1;
        this.shadowRoot &&
             (this.shadowRoot.innerHTML += html`
                <style>
                   ${style}
                </style>
                <div id="stepContainer">
                <span class="step-number">${this._currentStep.toString()}</span>  
                </div>
             `);
      }
    
      static get observedAttributes() {
        return ['step', 'currentStep'];
      }
    
      attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'currentStep') {
          this._currentStep = parseInt(newValue);
          this.updateStepState();
        }
      }
    
      updateStepState() {
        const stepContainer = this.shadowRoot?.querySelector('#stepContainer');
        if (!stepContainer) return;
        
        Array.from(stepContainer.children).forEach((child, index) => {
          child.classList.remove('active');
          if (index === this._currentStep) {
            child.classList.add('active');
          }
        });
      }
    
      get step() {
        return this.getAttribute('step') || '0';
      }
    
      set step(value) {
        this.setAttribute('step', value);
      }
    
      get currentStep() {
        return this.getAttribute('currentStep') || '0';
      }
    
      set currentStep(value) {
        this.setAttribute('currentStep', value);
      }
    }
    
    declare global {
       interface HTMLElementTagNameMap {
          'tf-step': TfStep;
       }
    }

customElements.define('tf-step', TfStep);
