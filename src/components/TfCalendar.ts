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

  .icon-input {
    padding-left: 2.2 !important;
    width: calc(100% - 2.2rem - 2px);
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
    grid-template-rows: repeat(6, auto);
    column-gap: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }

  .calendar-month-container {
    height: 15rem;
    overflow: hidden;
    position: relative;
    background-color: var(--tf-sys-light-surface);
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

  #all-calendar {
    z-index: 999;
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

  .modal {
    display: none;
    position: absolute;
    top: 3rem;
    background-color: var(--tf-sys-light-background);
  }
`;

export class TfCalendar extends TfBase {
  element: {
    calendar?: HTMLElement;
    calendarDayContainer?: HTMLElement;
    calendarWeekContainer?: HTMLElement;
    calendarMonthContainer?: HTMLElement;
    allCalendar: HTMLElement;
    endInput: HTMLElement;
    daySelected: number[];
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
        <section id="all-calendar">
          <section class="calendar-header" tabindex="0">
            <tf-icon icon="arrow-back-ios"></tf-icon>
            <span></span>
            <tf-icon icon="arrow-forward-ios"></tf-icon>
          </section>
          <section>
            <tf-week-days></tf-week-days>
            <tf-month-header></tf-month-header>
            <section>
              
            </section>
            <div class="calendar-week-container" tabindex="0"></div>
            <div class="calendar-month-container">
              <div class="calendar-day-container center"></div>
            </div>
          </section>
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
      allCalendar: this.shadowRoot?.querySelector('#all-calendar') as HTMLElement,
      endInput: this.shadowRoot?.querySelector('#end') as HTMLElement,
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
    if (this.getAttribute('month') === null && this.getAttribute('year') === null) {
      this.displayDefaultDate();
    }
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
    this.keyUpEventForTextInput();
  }

  static get observedAttributes() {
    return ['month', 'year', 'onlyonedate', 'modal', 'start-date', 'end-date'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const calendarElem = this.element.calendarDayContainer;
    const span = this.shadowRoot?.querySelector('.calendar-header > span');
    if (!calendarElem || !span) return;

    calendarElem.innerHTML = '';

    if (['month', 'year'].includes(name)) {
      this.displayMonthAndYear();
    }

    if (this.onlyonedate) {
      this.element.endInput.remove();
      this.shadowRoot?.querySelector('.button-container > span')?.remove();
      this.shadowRoot?.querySelector('.button-container')?.classList.remove('button-container');
    }

    if (this.modal) {
      this.element.allCalendar.classList.add('modal');
      this.eventForModal();
    } else {
      this.element.allCalendar.classList.remove('modal');
      this.removeEventForModal();
    }

    this.generateMonth();
    this.generateOtherMonthDays();
  }

  displayDefaultDate() {
    this.displayMonthAndYear();
    this.generateMonth();
    this.generateOtherMonthDays();
  }

  keyUpEventForTextInput() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      const inputElement = input.shadowRoot?.querySelector('input');
      inputElement?.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') return;
        inputElement.value = inputElement.value.replace(/[^0-9]/g, '');
        if (inputElement.value.length >= 2) {
          inputElement.value = inputElement.value.slice(0, 2) + '-' + inputElement.value.slice(2);
        }
        if (inputElement.value.length >= 5) {
          inputElement.value = inputElement.value.slice(0, 5) + '-' + inputElement.value.slice(5);
        }
        if (inputElement.value.length >= 10) {
          inputElement.value = inputElement.value.slice(0, 10);
        }
      });
    });

    this.shadowRoot
      ?.querySelector('#start')
      ?.shadowRoot?.querySelector('input')
      ?.addEventListener('keyup', () => {
        if (this.onlyonedate) {
          this.eventForStartInputOneDate();
        } else {
          this.eventForInput();
        }
      });

    this.shadowRoot
      ?.querySelector('#end')
      ?.shadowRoot?.querySelector('input')
      ?.addEventListener('keyup', () => {
        this.eventForInput(false);
      });
  }

  numberOfWeeksInMonth() {
    const firstDay = this.getFirstDayOfMonth(this.month, this.year);
    const numberOfWeeks = Math.ceil((this.numbersOfDaysInMonth + firstDay) / 7);
    return numberOfWeeks;
  }

  allDayToDefault() {
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;
    for (const day of allTfDay) {
      const state = day.getAttribute('state');
      if (
        state === 'selectedDate' ||
        state === 'startDate' ||
        state === 'endDate' ||
        state === 'startEndDate'
      ) {
        day.setAttribute('state', 'default');
      }
    }
  }

  removeAllValue() {
    this.removeAttribute('start-date');
    this.removeAttribute('end-date');
    this.setInputValue(-1, 'start');
    this.setInputValue(-1, 'end');
    this.element.daySelected = [];
  }

  eventForStartInputOneDate() {
    this.allDayToDefault();
    const startValue = this.shadowRoot?.querySelector('#start')?.shadowRoot?.querySelector('input')
      ?.value as string;
    if (startValue.length < 10) return;

    const start = this.generateDateStamps(
      parseInt(startValue.slice(0, 2)),
      startValue.slice(3, 6),
      startValue.slice(7, 11)
    );

    if (Number.isNaN(start)) {
      this.displayError();
      return;
    } else {
      this.removeError();
    }

    this.month = this.allMonth[new Date(start).getMonth()];
    this.year = new Date(start).getFullYear().toString();
    this.startDate = startValue;
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;

    const tfDayArray = Array.from(allTfDay); // Convertir en tableau
    const selectedDay = tfDayArray.find(
      (day) => parseInt(day.getAttribute('date') as string) === start
    );
    if (!selectedDay) return;
    this.element.daySelected = [];
    selectedDay.setAttribute('state', 'startEndDate');
    this.element.daySelected.unshift(parseInt(selectedDay.getAttribute('date') as string));
    this.setInputValue(start, 'end');
    this.numberClick = 1;

    this.displaySelectedDate(true);
  }

  inputValueToStamp(inputValue: string) {
    const day = parseInt(inputValue.slice(0, 2));
    const month = inputValue.slice(3, 6);
    const year = inputValue.slice(7, 11);
    return this.generateDateStamps(day, month, year);
  }

  eventForInput(isStart = true) {
    const startValue = this.shadowRoot?.querySelector('#start')?.shadowRoot?.querySelector('input')
      ?.value as string;
    const endValue = this.shadowRoot?.querySelector('#end')?.shadowRoot?.querySelector('input')
      ?.value as string;
    if (startValue.length < 10 && endValue.length < 10) return;
    const start = startValue.length >= 10 ? this.inputValueToStamp(startValue) : -1;
    const end = endValue.length >= 10 ? this.inputValueToStamp(endValue) : -1;
    if (Number.isNaN(start) || Number.isNaN(end)) {
      this.displayError();
      return;
    } else {
      this.removeError();
    }

    if (isStart && start !== -1) {
      this.month = this.allMonth[new Date(start).getMonth()];
      this.year = new Date(start).getFullYear().toString();
    } else if (!isStart && end !== -1) {
      this.month = this.allMonth[new Date(end).getMonth()];
      this.year = new Date(end).getFullYear().toString();
    }

    if (end === -1 && this.numberClick === 0) {
      this.setInputValue(start, 'start');
      this.setInputValue(start, 'end');
      this.element.daySelected.push(start);
      this.displaySelectedDate(true);
      this.numberClick = 1;
    } else if (start === -1 && this.numberClick === 0) {
      this.setInputValue(end, 'start');
      this.setInputValue(end, 'end');
      this.element.daySelected.push(end);
      this.displaySelectedDate(true);
      this.numberClick = 1;
    }

    if (start !== -1 && end !== -1) {
      this.element.daySelected = [];
      this.element.daySelected.push(start);
      this.element.daySelected.push(end);
      this.element.daySelected.sort();
      this.setInputValue(this.element.daySelected[0], 'start');
      this.setInputValue(this.element.daySelected[1], 'end');
      if (start === end) {
        this.displaySelectedDate(true);
      } else {
        this.displaySelectedDate();
      }
    }
  }

  displayError() {
    this.removeError();
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input.setAttribute('status', 'error');
      input.insertAdjacentHTML(
        'beforeend',
        '<p slot="error">Invalid date as to be  JJ/MM/YYYY</p>'
      );
    });
  }

  removeError() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input.setAttribute('status', 'default');
      input.querySelector('p')?.remove();
    });
  }

  eventForModal() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input.addEventListener('click', () => {
        this.element.allCalendar.style.setProperty('display', 'block');
      });

      input.addEventListener('blur', (e: any) => {
        if (!this.element.allCalendar.contains(e.relatedTarget)) {
          this.element.allCalendar.style.setProperty('display', 'none');
        } else {
          input.shadowRoot?.querySelector('input')?.focus();
        }
      });
    });
  }

  removeEventForModal() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input.removeEventListener('click', () => {
        this.element.allCalendar.style.setProperty('display', 'block');
      });
      input.removeEventListener('blur', (e: any) => {
        if (!this.element.allCalendar.contains(e.relatedTarget)) {
          this.element.allCalendar.style.setProperty('display', 'none');
        } else {
          input.shadowRoot?.querySelector('input')?.focus();
        }
      });
    });
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
    this.numbersOfDaysInMonth = this.numberOfDaysInMonth(this.month, this.year);
    this.updateMonthAndYear(next);
    const calendarElement = this.createCalendar(next ? 'right' : 'left');
    this.animateCalendarTransition(calendarElement, next ? 'right' : 'left');
    if (this.element.daySelected.length === 1) {
      this.displaySelectedDate(true);
    } else if (this.element.daySelected.length === 2) {
      this.displaySelectedDate();
    }
  }

  displaySelectedDate(onlystartDate = false) {
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;
    const firstDay = Math.min(...this.element.daySelected);
    if (onlystartDate) {
      for (const day of allTfDay) {
        if (!day.getAttribute('date')) continue;
        const dayTime = parseInt(day.getAttribute('date') as string);
        if (dayTime === firstDay) {
          day.setAttribute('state', 'startEndDate');
        }
      }
      return;
    }
    const lastDay = Math.max(...this.element.daySelected);
    for (const day of allTfDay) {
      if (!day.getAttribute('date')) continue;
      day.setAttribute('state', 'default');
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
    if (time === -1) {
      this.shadowRoot?.querySelector(`#${id}`)?.setAttribute('value', '');
      return;
    }
    const date = new Date(time);
    const input = this.shadowRoot?.querySelector(`#${id}`) as HTMLInputElement;
    if (!input) return;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    input.setAttribute('value', `${day}-${month}-${date.getFullYear()}`);
    if (id === 'start') {
      this.startDate = input.value;
    } else {
      this.endDate = input.value;
    }
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

  numberOfDaysInMonth(month: string, year: string) {
    const monthIndex = new Date(Date.parse(month + ' 1, ' + year)).getMonth();
    return new Date(parseInt(year), monthIndex, 0).getDate();
  }

  getFirstDayOfMonth(month: string, year: string) {
    return new Date(Date.parse(month + ' 1, ' + year)).getDay();
  }

  generateDateByTimeStamp(timeStamp: number) {
    return new Date(timeStamp).toLocaleDateString();
  }
  //This part generate a date stamp for a day
  generateDateStamps(numberDay = 1, month = this.month, year = this.year) {
    return new Date(Date.parse(`${month} ${numberDay}, ${year}`)).getTime();
  }

  //This part create a calendar and return the element and display year and month
  createCalendar(position: string) {
    const calendarElem = document.createElement('div');
    calendarElem.classList.add('calendar-day-container');
    calendarElem.classList.add(position);
    this.element.calendarMonthContainer?.insertAdjacentElement('afterbegin', calendarElem);
    this.generateMonth(calendarElem);
    this.generateOtherMonthDays(calendarElem);

    return calendarElem;
  }

  //This part display the month and year in the header
  displayMonthAndYear() {
    const span = this.shadowRoot?.querySelector('.calendar-header > span');
    if (!span) return;
    span.innerHTML = `<div>${this.month}</div> <div>${this.year}</div>`;
  }

  //This part generate the month
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

  //This part generate the days of the previous and next month
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

  //This part is called when the user click on a day and display wich day is selected
  handleCalendarClick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'TF-DAY') return;
    switch (this.numberClick) {
    case 0:
      this.handleFirstClick(target);
      break;
    case 1:
      if (this.onlyonedate) {
        this.handleThirdClick();
        this.handleFirstClick(target);
        return;
      }
      this.handleSecondClick(target);
      break;
    case 2:
      this.handleThirdClick();
      break;
    }
  };

  handleFirstClick(target: HTMLElement) {
    const date = parseInt(target.getAttribute('date') as string);
    const formatedDate = this.generateDateByTimeStamp(date);
    this.setInputValue(date, 'start');
    this.setInputValue(date, 'end');
    this.startDate = formatedDate;
    this.endDate = formatedDate;
    this.element.daySelected?.push(date);
    this.numberClick = 1;
    this.displaySelectedDate(true);
  }

  handleSecondClick(target: HTMLElement) {
    const dayTime = parseInt(target.getAttribute('date') as string);
    this.element.daySelected.push(dayTime);
    this.element.daySelected.sort();
    const firstDay = this.element.daySelected[0];
    const lastDay = this.element.daySelected[1];
    if (firstDay === lastDay) {
      this.removeAllValue();
      this.numberClick = 0;
    } else {
      this.setInputValue(firstDay, 'start');
      this.setInputValue(lastDay, 'end');
      this.startDate = this.generateDateByTimeStamp(firstDay);
      this.numberClick = 2;
    }

    this.displaySelectedDate();
  }

  handleThirdClick() {
    this.allDayToDefault();
    this.removeAllValue();
    this.numberClick = 0;
  }

  get month() {
    const today = new Date();
    const month = this.allMonth[today.getMonth()];

    return this.getAttribute('month') || month;
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

  get modal() {
    return this.hasAttribute('modal');
  }

  set modal(value) {
    value && this.setAttribute('modal', '');
    !value && this.removeAttribute('modal');
  }

  get onlyonedate() {
    return this.hasAttribute('onlyOneDate');
  }

  set onlyonedate(value) {
    value && this.setAttribute('onlyOneDate', '');
    !value && this.removeAttribute('onlyOneDate');
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
