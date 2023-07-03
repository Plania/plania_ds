/* eslint-disable no-case-declarations */
import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      max-width: 17.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      overflow: hidden;
   }

   tf-icon {
      cursor: pointer;
   }
   .button-container {
      display: flex;
      gap: 0.25rem;
   }

   .button-container > span {
      display: flex;
      align-items: center;
   }

   .button-container > span::after {
      content: '';
      display: block;
      width: 0.5rem;
      border-bottom: 2px solid black;
   }

   .calendar-day-container {
      display: grid;
      grid-template-columns: repeat(7, auto);
      grid-template-rows: repeat(7, auto);
      column-gap: 0;
      width: 17.5rem;
      position: absolute;
   }

   .calendar-month-container {
      width: 17.5rem;
      height: 15rem;
      overflow: hidden;
      position: relative;
   }

   .calendar-week-container {
      display: grid;
      grid-template-columns: repeat(7, auto);
   }

   .calendar-left {
      width: 400px;
      position: absolute;
      bottom: 0;
      right: -400px;
   }

   .day {
      display: flex;
      background-color: var(--tf-sys-light-surface);
      align-items: center;
      justify-content: center;
      font-weight: bold;
   }

   .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .calendar-header > span {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-weight: 700;
   }

   .right {
      right: -400px;
      transition: 0.5s;
   }

   .left {
      right: 400px;
      transition: 0.5s;
   }

   .center {
      right: 0;
      transition: 0.5s;
   }
`;

export class TfCalendar extends TfBase {
  element: {
      calendar?: HTMLElement;
      calendarDayContainer?: HTMLElement;
      calendarWeekContainer?: HTMLElement;
      calendarMonthContainer?: HTMLElement;
      daySelected: HTMLElement[];
   };

  allMonth: string[];
  numbersOfDaysInMonth: number;
  numberClick = 0;
  calendarPage: number;
  calendarSelected: never[];

  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="button-container">
               <tf-text-input
                  icon
                  status="default"
                  pictogramme="date-range"
                  label="Start"
                  id="start"
               ></tf-text-input>
               <span></span>
               <tf-text-input
                  icon
                  status="default"
                  pictogramme="date-range"
                  label="End"
                  id="end"
               ></tf-text-input>
            </div>
            <section class="calendar-header">
               <tf-icon icon="arrow-back-ios"></tf-icon>
               <span></span>
               <tf-icon icon="arrow-forward-ios"></tf-icon>
            </section>
            <section class="calendar-container">
               <div class="calendar-week-container"></div>
               <div class="calendar-month-container">
                  <div class="calendar-day-container center"></div>
               </div>
            </section>
         `);
    this.element = {
      calendar: this.shadowRoot?.querySelector('.center') as HTMLElement,
      calendarDayContainer: this.shadowRoot?.querySelector(
        '.calendar-day-container'
      ) as HTMLElement,
      calendarWeekContainer: this.shadowRoot?.querySelector(
        '.calendar-week-container'
      ) as HTMLElement,
      calendarMonthContainer: this.shadowRoot?.querySelector(
        '.calendar-month-container'
      ) as HTMLElement,
      daySelected: [],
    };
    this.allMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.numbersOfDaysInMonth = this.numberOfDaysInMonth(this.month, this.year);
    this.numberClick = 0;
    this.calendarPage = 0;
    this.calendarSelected = [];
  }

  connectedCallback() {
    this.generateDaysWeek();
    this.shadowRoot
      ?.querySelector('tf-icon[icon="arrow-back-ios"]')
      ?.addEventListener('click', () => {
        this.handleOnClick(false);
      });

    this.shadowRoot
      ?.querySelector('tf-icon[icon="arrow-forward-ios"]')
      ?.addEventListener('click', () => {
        this.handleOnClick(true);
      });

    this.element.calendarMonthContainer?.addEventListener('click', this.handleCalendarClick);
  }

  static get observedAttributes() {
    return ['month', 'year'];
  }

  generateDaysWeek() {
    const dayOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    dayOfWeek.forEach((day) => {
      const dayElem = document.createElement('div');
      dayElem.innerHTML = day;
      dayElem.classList.add('day');
      this.element.calendarWeekContainer?.insertAdjacentElement('beforeend', dayElem);
    });
  }

  handleOnClick(next = true) {
    this.numbersOfDaysInMonth = this.numberOfDaysInMonth(this.month, this.year, next ? 0 : 1);
    this.updateMonthAndYear(next);
    const calendarElement = this.createCalendar(next ? 'right' : 'left');
    this.animateCalendarTransition(calendarElement, next ? 'right' : 'left');
    if (this.element.daySelected.length <= 1) return;
    this.displaySelectedDate();
  }

  handleCalendarClick = (e: Event) => {
    if (!this.element.daySelected) return;
    const target = e.target as HTMLElement;
    if (target.tagName !== 'TF-DAY') return;

    switch (this.numberClick) {
    case 0:
      this.handleFirstClick(target);
      break;
    case 1:
      this.handleSecondClick(target);
      break;
    case 2:
      this.handleThirdClick();
      break;
    }

    if (this.numberClick === 2) {
      this.displaySelectedDate();
    }
  };

  displaySelectedDate() {
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    const firstDay = parseInt(this.element.daySelected[0].getAttribute('date') as string);
    const lastDay = parseInt(this.element.daySelected[1].getAttribute('date') as string);
    if (!allTfDay) return;
    for (const day of allTfDay) {
      if (!day.getAttribute('date')) continue;
      const dayTime = parseInt(day.getAttribute('date') as string);
      if (dayTime > firstDay && dayTime < lastDay) {
        day.setAttribute('state', 'selectedDate');
      } else if (dayTime === firstDay) {
        day.setAttribute('state', 'startDate');
      } else if (dayTime === lastDay) {
        day.setAttribute('state', 'endDate');
      }
    }
  }

  setInputValue(time: number, id: string) {
    const date = new Date(time);
    const input = this.shadowRoot?.querySelector(`#${id}`) as HTMLInputElement;
    if (!input) return;
    input.setAttribute('value', `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }

  animateCalendarTransition(calendarElem: HTMLElement, position = 'right') {
    setTimeout(() => {
      calendarElem?.classList.remove(position);
      calendarElem?.classList.add('center');
      this.element.calendar?.classList.remove('center');
      this.element.calendar?.classList.add(position === 'right' ? 'left' : 'right');
      this.element.calendar = calendarElem;
      setTimeout(() => {
        this.element.calendarMonthContainer?.removeChild(
               this.element.calendarMonthContainer?.lastElementChild as HTMLElement
        );
      }, 500);
    }, 10);
  }

  createCalendar(position: string) {
    const calendarElem = document.createElement('div');
    calendarElem.classList.add('calendar-day-container');
    calendarElem.classList.add(position);
    this.element.calendarMonthContainer?.insertAdjacentElement('afterbegin', calendarElem);
    this.generateMonth(calendarElem);
    this.generateOtherMonthDays(calendarElem);

    return calendarElem;
  }

  updateMonthAndYear(next = true) {
    const add = next ? 1 : -1;

    if (this.allMonth.indexOf(this.month) === 0 && !next) {
      this.year = (parseInt(this.year) + add).toString();
      this.month = this.allMonth[11];
    } else if (this.allMonth.indexOf(this.month) === 11 && next) {
      this.year = (parseInt(this.year) + add).toString();
      this.month = this.allMonth[0];
    } else {
      this.month = this.allMonth[this.allMonth.indexOf(this.month) + add];
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const calendarElem = this.element.calendarDayContainer;
    const span = this.shadowRoot?.querySelector('.calendar-header > span');
    if (!calendarElem || !span) return;

    calendarElem.innerHTML = '';

    if (name === 'month' || name === 'year') {
      this.numbersOfDaysInMonth = this.numberOfDaysInMonth(this.month, this.year);
      span.innerHTML = `<div>${this.month}</div> <div>${this.year}</div>`;
    }

    this.generateMonth();
    this.generateOtherMonthDays();
  }

  numberOfDaysInMonth(month: string, year: string, nextMonth = 1) {
    const monthIndex = new Date(Date.parse(month + ' 1, ' + year)).getMonth() + nextMonth;
    return new Date(parseInt(year), monthIndex, 0).getDate();
  }

  getFirstDayOfMonth(month: string, year: string) {
    return new Date(Date.parse(month + ' 1, ' + year)).getDay();
  }

  generateDateStamps(numberDay = 1) {
    return new Date(Date.parse(`${this.month} ${numberDay}, ${this.year}`)).getTime();
  }

  generateMonth(element = this.element.calendarDayContainer) {
    if (!element) return;
    const startOfMonth = this.getFirstDayOfMonth(this.month, this.year);
    for (let i = 0; i < startOfMonth; i++) {
      const day = document.createElement('tf-day');
      day.setAttribute('state', 'disabled');
      element.insertAdjacentElement('beforeend', day);
    }
    for (let i = 0; i < this.numbersOfDaysInMonth; i++) {
      const day = document.createElement('tf-day');
      day.setAttribute('day', (i + 1).toString());
      day.setAttribute('state', 'default');
      day.setAttribute('date', this.generateDateStamps(i + 1).toString());
      element.insertAdjacentElement('beforeend', day);
    }
  }

  generateOtherMonthDays(element = this.element.calendarDayContainer) {
    if (!element) return;
    for (
      let i = 0;
      i < 42 - this.numbersOfDaysInMonth - this.getFirstDayOfMonth(this.month, this.year);
      i++
    ) {
      const day = document.createElement('tf-day');
      day.setAttribute('day', (i + 1).toString());
      day.setAttribute('state', 'differentMonth');
      element.insertAdjacentElement('beforeend', day);
    }
  }

  handleFirstClick(target: HTMLElement) {
    target.setAttribute('state', 'startEndDate');
    const date = parseInt(target.getAttribute('date') as string);
    this.setInputValue(date, 'start');
    this.setInputValue(date, 'end');
    this.element.daySelected?.push(target);
    this.numberClick++;
  }

  handleSecondClick(target: HTMLElement) {
    const dayTime = parseInt(target.getAttribute('date') as string);
    const daySelectedTime = parseInt(this.element.daySelected[0].getAttribute('date') as string);

    if (dayTime < daySelectedTime) {
      this.element.daySelected[0].setAttribute('state', 'endDate');
      target.setAttribute('state', 'startDate');
      this.setInputValue(dayTime, 'start');
      this.element.daySelected.unshift(target);
    } else {
      this.element.daySelected[0].setAttribute('state', 'startDate');
      target.setAttribute('state', 'endDate');
      this.setInputValue(dayTime, 'end');
      this.element.daySelected.push(target);
    }

    this.numberClick++;
  }

  handleThirdClick() {
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;

    for (const day of allTfDay) {
      const state = day.getAttribute('state');
      if (state === 'selectedDate' || state === 'startDate' || state === 'endDate') {
        day.setAttribute('state', 'default');
      }
    }

    this.element.daySelected = [];
    this.numberClick = 0;
  }

  get month() {
    return this.getAttribute('month') || 'January';
  }

  set month(value) {
    this.setAttribute('month', value);
  }

  get year() {
    return this.getAttribute('year') || '2021';
  }

  set year(value) {
    this.setAttribute('year', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-calendar': TfCalendar;
   }
}

customElements.define('tf-calendar', TfCalendar);
