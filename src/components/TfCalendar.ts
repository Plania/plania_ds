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

  .calendar-header {
    display: flex;
    align-items: center;
  }

  .monthdays-container {
    position: relative;
    height: 19rem;
    max-height: 19rem;
    overflow: hidden;
  }

  .monthdays {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.25s ease-in-out;
  }

  .left {
    left: -100%;
  }

  .right {
    left: 100%;
  }

  tf-icon[icon='arrow-back-ios'] {
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    z-index: 999;
  }

  tf-icon[icon='arrow-forward-ios'] {
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    z-index: 999;
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

  private month = new Date().getMonth();
  private year = new Date().getFullYear();
  private numberClick = 0;
  private dateSelected: number[] = [];
  private mutationCallback = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== 'attributes' ||
        (mutation.attributeName !== 'start' && mutation.attributeName !== 'end')
      ) {
        return;
      }
      this.eventForDateSelector(
        mutation.attributeName,
        mutation.target.getAttribute(mutation.attributeName)
      );
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
          <div class="monthdays-container">
            <tf-icon icon="arrow-back-ios"></tf-icon>
            <tf-icon icon="arrow-forward-ios"></tf-icon>
          </div>
        </section>
      `);
  }

  connectedCallback() {
    const TfDateSelector = this.shadowRoot?.querySelector('tf-date-selector') as HTMLElement;
    this.genereateMonthDays();
    this.shadowRoot
      ?.querySelector('.calendar')
      ?.addEventListener('click', (e) => this.eventForClick(e));

    this.shadowRoot
      ?.querySelector('tf-icon[icon="arrow-back-ios"]')
      ?.addEventListener('click', () => this.generatePreviousMonth());

    this.shadowRoot
      ?.querySelector('tf-icon[icon="arrow-forward-ios"]')
      ?.addEventListener('click', () => this.generateNextMonth());

    const observer = new MutationObserver(this.mutationCallback);
    observer.observe(TfDateSelector, { attributes: true });
  }

  static get observedAttributes() {
    return ['start-date', 'end-date'];
  }

  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector('.calendar')
      ?.removeEventListener('click', (e) => this.eventForClick(e));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const TfDateSelector = this.shadowRoot?.querySelector('tf-date-selector');
    switch (name) {
    case 'start-date':
      if (oldValue === newValue) return;
      TfDateSelector?.setAttribute('start', newValue);
      break;
    case 'end-date':
      if (oldValue === newValue) return;
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
    return new Date(
      parseInt(dateArray[2]),
      parseInt(dateArray[1]) - 1,
      parseInt(dateArray[0])
    ).getTime();
  }

  eventForDateSelector(attribute: string, value: string) {
    if (value.length < 10) return;
    this.setAttribute(`${attribute}-date`, value);
    this.generateMonthAndYear(value);
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

  firstDate() {
    const startDate = this.startDate;
    const endDate = this.endDate;
    if (startDate === '' && endDate !== '') {
      this.startDate = endDate;
      this.dateSelected.push(this.dateIntoDateStamp(endDate));
      this.numberClick = 1;
    } else if (startDate !== '' && endDate === '') {
      this.endDate = startDate;
      this.dateSelected.push(this.dateIntoDateStamp(startDate));
      this.numberClick = 1;
    }
  }

  secondDate() {
    const timeStart = this.dateIntoDateStamp(this.startDate);
    const timeEnd = this.dateIntoDateStamp(this.endDate);
    this.dateSelected = [];
    if (timeStart > timeEnd) {
      const temp = this.startDate;
      this.startDate = this.endDate;
      this.endDate = temp;
    }
    if (timeStart === timeEnd) {
      this.dateSelected.push(timeStart);
      this.numberClick = 1;
      return;
    }

    this.dateSelected.push(timeStart);
    this.dateSelected.push(timeEnd);
    this.numberClick = 2;
  }

  eventForClick(e: any) {
    e.preventDefault();
    if (e.composedPath()[2].nodeName !== 'TF-DAY') return;
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
        if (this.dateSelected.length <= 1) {
          this.displayDateSelectedSingle(day);
        } else {
          this.displayDateSelectedInterval(day);
        }
      });
    });
  }

  displayDateSelectedInterval(day: HTMLElement) {
    const time = parseInt(day.getAttribute('date') as string);
    if (
      !day.getAttribute('state') ||
      day.getAttribute('state') === 'disabled' ||
      day.getAttribute('state') === 'differentMonth'
    )
      return;
    if (time === this.dateSelected[0]) {
      day.setAttribute('state', 'startDate');
    }
    if (time === this.dateSelected[1]) {
      day.setAttribute('state', 'endDate');
    }
    if (time > this.dateSelected[0] && time < this.dateSelected[1]) {
      day.setAttribute('state', 'selectedDate');
    }
  }

  displayDateSelectedSingle(day: HTMLElement) {
    if (
      !day.getAttribute('state') ||
      day.getAttribute('state') === 'disabled' ||
      day.getAttribute('state') === 'differentMonth'
    )
      return;
    if (parseInt(day.getAttribute('date') as string) === this.dateSelected[0]) {
      day.setAttribute('state', 'startEndDate');
    }
  }

  resetDateSelected() {
    this.shadowRoot?.querySelectorAll('tf-week').forEach((week) => {
      week.shadowRoot?.querySelectorAll('tf-day').forEach((day) => {
        if (
          !(
            day.getAttribute('state') === 'differentMonth' ||
            day.getAttribute('state') === 'disabled'
          )
        )
          day.setAttribute('state', 'default');
      });
    });
  }

  genereateMonthDays() {
    const div = document.createElement('div');
    div.classList.add('monthdays');
    this.shadowRoot?.querySelector('.monthdays-container')?.appendChild(div);
    this.generateMonthHeader(div);
    this.generateWeeksForMonth(div);
  }

  generateWeeksForMonth(monthdays: HTMLElement) {
    for (let i = 0; i < 6; i++) {
      const week = document.createElement('tf-week');
      week.setAttribute('week', i.toString());
      week.setAttribute('month', this.allMonth[this.month]);
      week.setAttribute('year', this.year.toString());
      week.setAttribute('disabledpreviousdays', 'true');
      monthdays.appendChild(week);
    }
  }

  generateMonthHeader(monthdays: HTMLElement) {
    const monthHeader = document.createElement('tf-month-header');
    monthHeader.setAttribute('month', this.allMonth[this.month]);
    monthHeader.setAttribute('year', this.year.toString());
    monthdays.appendChild(monthHeader);
  }

  numberOfWeeksInMonth(month: number, year: number) {
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil(used / 7);
  }

  generateNextMonth() {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    this.genereateMonthDays();
    this.animation(false);
    this.displayDateSelected();
  }

  generatePreviousMonth() {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    this.genereateMonthDays();
    this.animation(true);
    this.displayDateSelected();
  }

  generateMonthAndYear(dateTime: string) {
    this.shadowRoot?.querySelector('.monthdays')?.remove();
    const date = new Date(this.dateIntoDateStamp(dateTime));
    this.month = date.getMonth();
    this.year = date.getFullYear();
    console.log(this.month, this.year);
    this.genereateMonthDays();
    this.displayDateSelected();
  }


  animation(left: boolean) {
    const monthdaysNew = this.shadowRoot?.querySelector('.monthdays-container')
      ?.lastChild as HTMLElement;
    const monthdaysOld = this.shadowRoot?.querySelector('.monthdays') as HTMLElement;
    monthdaysNew.classList.add(left ? 'left' : 'right');
    monthdaysOld.classList.add(left ? 'right' : 'left');
    setTimeout(() => {
      monthdaysOld.remove();
      monthdaysNew.classList.remove(left ? 'left' : 'right');
     
    }, 250);

    const allMonthDays = this.shadowRoot?.querySelectorAll(
      '.monthdays'
    ) as NodeListOf<HTMLElement>;

    if (allMonthDays.length > 2) {
      allMonthDays.forEach((monthdays) => {
        if (monthdays !== monthdaysNew) monthdays.remove();
      });
    }
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
