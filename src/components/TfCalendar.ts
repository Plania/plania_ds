import { css, html, TfBase } from './TfBase.js';

const style = css`
  :host {
    max-width: 19rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }

  section {
    width: 100%;
  }

  .monthdays {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .monthdays > tf-month-header {
    display: block;
    width: 90%;
  }
`;

export class TfCalendar extends TfBase {
  private allMonth = [
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

  private numberClick = 0;
  private dateSelected: number[] = [];
  private mutationCallback = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== 'attributes' ||
        mutation.attributeName !== 'start' &&
        mutation.attributeName !== 'end'
      ) {
        return;
      }
      this.eventForDateSelector(mutation.attributeName, mutation.target.getAttribute(mutation.attributeName));
    }
  };

  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <section class="button-container">
          <tf-date-selector variant="interval"></tf-date-selector>
        </section>
        <section class="calendar">
          <tf-week-days></tf-week-days>
          <div class="monthdays">
            <tf-month-header></tf-month-header>
          </div>
          <section></section>
        </section>
      `);
  }

  connectedCallback() {
    const TfDateSelector = this.shadowRoot?.querySelector('tf-date-selector') as HTMLElement;
    this.generateWeeksForMonth();
    this.shadowRoot
      ?.querySelector('.calendar')
      ?.addEventListener('click', (e) => this.eventForClick(e));
    const observer = new MutationObserver(this.mutationCallback);
    observer.observe(TfDateSelector, { attributes: true });
  }

  static get observedAttributes() {
    return ['start-date', 'end-date'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const TfDateSelector = this.shadowRoot?.querySelector('tf-date-selector');
    switch (name) {
    case 'start-date':
      if(oldValue === newValue) return;
      TfDateSelector?.setAttribute('start', newValue);
      break;
    case 'end-date':
      if(oldValue === newValue) return;
      TfDateSelector?.setAttribute('end', newValue);
      break;
    }

  }

  dateStampIntoFr(dateStamp: number) {
    const date = new Date(dateStamp);
    return date.toLocaleString('fr').replace('/', '-').replace('/', '-').slice(0, 10);
  }

  dateIntoDateStamp(date: string) {
    const dateArray = date.split('-');
    return new Date(parseInt(dateArray[2]), parseInt(dateArray[1]) - 1, parseInt(dateArray[0])).getTime();
  }



  eventForDateSelector(attribute : string , value : string) {
    if(value.length < 10) return;
    this.setAttribute(`${attribute}-date`, value);
    
    switch (this.numberClick) {
    case 0:
      this.firstDate();
      break;
    default:
      this.secondDate();
      break;
    }
    this.displayDateSelected();
  }

  firstDate(){
    const startDate = this.startDate;
    const endDate = this.endDate;
    if (startDate === '' && endDate !== ''){
      this.startDate = endDate;
      this.dateSelected.push(this.dateIntoDateStamp(endDate));
      this.numberClick = 1;
    }else if (startDate !== '' && endDate === ''){
      this.endDate = startDate;
      this.dateSelected.push(this.dateIntoDateStamp(startDate));
      this.numberClick = 1;
    }
  }

  secondDate(){
    const timeStart = this.dateIntoDateStamp(this.startDate);
    const timeEnd = this.dateIntoDateStamp(this.endDate);
    this.dateSelected = [];
    if (timeStart > timeEnd){
      const temp = this.startDate;
      this.startDate = this.endDate;
      this.endDate = temp;
    }
    if (timeStart === timeEnd){
      this.dateSelected.push(timeStart);
      this.numberClick = 1;
      return;
    }

    this.dateSelected.push(timeStart);
    this.dateSelected.push(timeEnd);
    this.numberClick = 2;
  }
  

  eventForClick(e: Event) {
    switch (this.numberClick) {
    case 0:
      this.eventForFirstClick(e);
      break;
    case 1:
      this.eventForSecondClick(e);
      break;
    case 2:
      this.eventForThirdClick();
    }
  }

  eventForFirstClick(e: any) {
    const time = parseInt(e.composedPath()[2].getAttribute('date'));
    this.startDate = this.dateStampIntoFr(time);
    this.endDate = this.dateStampIntoFr(time);
    this.numberClick = 1;
    this.dateSelected.push(time);
    this.displayDateSelected();
  }

  eventForSecondClick(e: any) {
    const time = parseInt(e.composedPath()[2].getAttribute('date'));
    this.dateSelected.push(time);
    this.dateSelected.sort();
    this.startDate = this.dateStampIntoFr(this.dateSelected[0]);
    this.endDate = this.dateStampIntoFr(this.dateSelected[1]);
    this.numberClick = 2;
    this.displayDateSelected();
  }

  eventForThirdClick() {
    this.numberClick = 0;
    this.dateSelected = [];
    this.startDate = '';
    this.endDate = '';
    this.resetDateSelected();
  }

  displayDateSelected() {
    this.dateSelected.sort();
    this.resetDateSelected();
    this.shadowRoot?.querySelectorAll('tf-week').forEach((week) => {
      week.shadowRoot?.querySelectorAll('tf-day').forEach((day) => {
        if(this.dateSelected.length <= 1){
          this.displayDateSelectedSingle(day);
        }else{
          this.displayDateSelectedInterval(day);
        }
      });
    });
  }

  displayDateSelectedInterval(day: HTMLElement) {

    const time = parseInt(day.getAttribute('date') as string);
    if (!day.getAttribute('state') || day.getAttribute('state') === 'disabled' || day.getAttribute('state') === 'differentMonth') return;
    if (time === this.dateSelected[0]) {
      day.setAttribute('state', 'startDate');
    }
    if (time === this.dateSelected[1]) {
      day.setAttribute('state', 'endDate');
    }
    if (
      time > this.dateSelected[0] &&
      time < this.dateSelected[1]
    ) {
      day.setAttribute('state', 'selectedDate');
    }
  }

  displayDateSelectedSingle(day: HTMLElement) {
    if (!day.getAttribute('state') || day.getAttribute('state') === 'disabled' || day.getAttribute('state') === 'differentMonth') return;
    if (parseInt(day.getAttribute('date') as string) === this.dateSelected[0]) {
      day.setAttribute('state', 'startEndDate');
    }
  }



  resetDateSelected() {
    this.shadowRoot?.querySelectorAll('tf-week').forEach((week) => {
      week.shadowRoot?.querySelectorAll('tf-day').forEach((day) => {
        if (!(day.getAttribute('state') === 'differentMonth' || day.getAttribute('state') === 'disabled'))
          day.setAttribute('state', 'default');
      });
    });
  }

  generateWeeksForMonth() {
    for (let i = 0; i <= this.numberOfWeeksInMonth(8, 2023); i++) {
      const week = document.createElement('tf-week');
      week.setAttribute('week', i.toString());
      week.setAttribute('month', this.allMonth[6]);
      week.setAttribute('year', '2023');
      week.setAttribute('disabledpreviousdays', 'true');
      this.shadowRoot?.querySelector('.monthdays')?.appendChild(week);
    }
  }

  numberOfWeeksInMonth(month: number, year: number) {
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil(used / 7);
  }

  get startDate() {
    return this.getAttribute('start-date') || '';
  }

  set startDate(value: string) {
    this.setAttribute('start-date', value);
  }

  get endDate() {
    return this.getAttribute('end-date') || '';
  }

  set endDate(value: string) {
    this.setAttribute('end-date', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-calendar': TfCalendar;
  }
}

customElements.define('tf-calendar', TfCalendar);
