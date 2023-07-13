import { css, html, TfBase } from './TfBase.js';

const style = css`
    .week {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .week > tf-day {
        width:2.5rem;
        height:2.5rem;
        
    }
`;

class TfWeek extends TfBase {
  allMonth: string[];
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="week">
          
        </div>
      `);

    this.allMonth = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];
  }

  connectedCallback() {
    this.generateDaysOfWeek();
  }

  static get observedAttributes() {
    return ['week', 'month', 'year' , 'disabledpreviousdays'];
  }

  attributeChangedCallback(name: string) {
    console.log(name);
    if (name === 'month' || name === 'year' || name === 'week' || name === 'disabledpreviousdays') {
      this.generateDaysOfWeek();
    }
  }

  convertMonth = (month = this.month) => {
    return this.allMonth.indexOf(month.toLowerCase());
  };


  dayLabel = (i : number) =>{
    const indexOfMonth = this.convertMonth();
    const firstDay = new Date(parseInt(this.year), indexOfMonth, 1).getDay();
    const lastDay = new Date(parseInt(this.year), indexOfMonth + 1, 0).getDate();
    const day = (7 * parseInt(this.week)) - firstDay + i + 1;
    return (day < 1 || day > lastDay) ? 0 : day;
  };

  disabledDays = (day : number) => {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    if(!this.disabledPreviousDays) return false;
    if(todayMonth > this.convertMonth()){
      return true;
    }else{
      return (todayDay > day && todayMonth === this.convertMonth());
    }
  };

  generateDay = (days : number) => {
    const div = this.shadowRoot?.querySelector('.week') as HTMLElement;
    const TfDay = document.createElement('tf-day');
    let date : number;
    switch (days) {
    case 0:
      TfDay.setAttribute('state', 'differentMonth');
      break;
    default:
      date = new Date(parseInt(this.year), this.convertMonth(), days).getTime();
      TfDay.setAttribute('date', date.toString());
      TfDay.setAttribute('state', 'default');
      TfDay.setAttribute('day', days.toString());
      break;
    }

    if (this.disabledDays(days) && days !== 0) {
      TfDay.setAttribute('state', 'disabled');
    }
    
    TfDay.setAttribute('tabindex', '0');
    div.appendChild(TfDay);
  };

  generateDaysOfWeek = () => {
    const weekElement = this.shadowRoot?.querySelector('.week') as HTMLElement;
    weekElement.innerHTML = '';
    for (let i = 0; i <= 6; i++) {
      this.generateDay(this.dayLabel(i));
    }
  };

  get week() {
    return this.getAttribute('week') || '0';
  }

  set week(value) {
    this.setAttribute('week', value);
  }

  get month() {
    const today = new Date();
    const month = this.allMonth[today.getMonth()];

    return this.getAttribute('month')?.toLowerCase() || month;
  }

  set month(value) {
    this.setAttribute('month', value);
  }

  get year() {
    const today = new Date();
    const year = today.getFullYear().toString();
    return this.getAttribute('year') || year;
  }

  set year(value) {
    this.setAttribute('year', value);
  }

  get disabledPreviousDays() {
    return this.hasAttribute('disabledPreviousDays');
  }

  set disabledPreviousDays(value) {
    if (value) {
      this.setAttribute('disabledPreviousDays', '');
    } else {
      this.removeAttribute('disabledPreviousDays');
    }
  }

    
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-week': TfWeek;
  }
}

customElements.define('tf-week', TfWeek);
