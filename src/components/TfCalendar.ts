/* eslint-disable no-case-declarations */
import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      max-width: 19rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
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
      width: 19rem;
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
      display:none;
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
            <section id="all-calendar">
               <section class="calendar-header">
                  <tf-icon icon="arrow-back-ios"></tf-icon>
                  <span></span>
                  <tf-icon icon="arrow-forward-ios"></tf-icon>
               </section>
               <section>
                  <div class="calendar-week-container"></div>
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
    this.keyUpEventForTextInput();
  }

  static get observedAttributes() {
    return ['month', 'year', 'onlyOneDate', 'modal'];
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

    if (this.modal) {
      this.element.allCalendar.classList.add('modal');
      this.eventForModal();
    }else{
      this.element.allCalendar.classList.remove('modal');
      this.removeEventForModal();
    }
    
    
    this.generateMonth();
    this.generateOtherMonthDays();
  }

  keyUpEventForTextInput() {
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      const inputElement = input.shadowRoot?.querySelector('input');
      inputElement?.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.key === 'Backspace' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') return;
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

    this.shadowRoot?.querySelector('#start')?.shadowRoot?.querySelector('input')?.addEventListener('keyup', () => {
      this.eventForStartInput();
    }
    );

    this.shadowRoot?.querySelector('#end')?.shadowRoot?.querySelector('input')?.addEventListener('keyup', () => {
      this.eventForEndInput();
    }
    );
  }

  eventForStartInput() {
    const startValue = this.shadowRoot?.querySelector('#start')?.shadowRoot?.querySelector('input')?.value as string;
    const endValue = this.shadowRoot?.querySelector('#end')?.shadowRoot?.querySelector('input')?.value as string;

    if (startValue.length < 10) return;
    let start = this.generateDateStamps(parseInt(startValue.slice(0, 2)), startValue.slice(3, 6), startValue.slice(7, 11));

    if (Number.isNaN(start)) {
      this.displayError();
      return;
    } else {
      this.removeError();
    }

    if(endValue.length >= 10 ){
      let end = this.generateDateStamps(parseInt(endValue.slice(0, 2)), endValue.slice(3, 6), endValue.slice(7, 11));
      if (Number.isNaN(end)) {
        return;
      } else {
        if (end < start) {
          this.setInputValue(start, 'end');
          this.setInputValue(end, 'start');
          const temporary = start;
          start = end;
          end = temporary;
          this.eventForEndInput();
        }
      }
    }

    this.month = this.allMonth[new Date(start).getMonth()];
    this.year = new Date(start).getFullYear().toString();
    this.startDate = startValue;
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;

    const tfDayArray = Array.from(allTfDay); // Convertir en tableau
    const selectedDay = tfDayArray.find(day => parseInt(day.getAttribute('date') as string) === start);

    if (selectedDay) {
      if (endValue.length < 10 || this.numberClick === 0) {
        this.element.daySelected = [];
        selectedDay.setAttribute('state', 'startEndDate');
        this.element.daySelected.unshift(selectedDay);
        this.setInputValue(start, 'end');
        this.numberClick = 1;
      } else if (endValue !== startValue) {
        if (this.element.daySelected.length >= 2) this.element.daySelected.shift();
        selectedDay.setAttribute('state', 'startDate');
        this.element.daySelected.unshift(selectedDay);
        this.numberClick = 2;
      }
    }

    if (this.element.daySelected.length === 2) {
      this.displaySelectedDate();
    }
  }

  eventForEndInput() {
    const endValue = this.shadowRoot?.querySelector('#end')?.shadowRoot?.querySelector('input')?.value as string;
    const startValue = this.shadowRoot?.querySelector('#start')?.shadowRoot?.querySelector('input')?.value as string;

    if (endValue.length < 10) return;

    let end = this.generateDateStamps(parseInt(endValue.slice(0, 2)), endValue.slice(3, 6), endValue.slice(7, 11));

    if (Number.isNaN(end)) {
      this.displayError();
      return;
    } else {
      this.removeError();
    }

    if(startValue.length >= 10 ){
      let start = this.generateDateStamps(parseInt(startValue.slice(0, 2)), startValue.slice(3, 6), startValue.slice(7, 11));
      if (Number.isNaN(end)) {
        return;
      } else {
        if (end < start) {
          this.setInputValue(start, 'end');
          this.setInputValue(end, 'start');
          const temporary = start;
          start = end;
          end = temporary;
          this.eventForStartInput();
        }
      }
    }

    this.month = this.allMonth[new Date(end).getMonth()];
    this.year = new Date(end).getFullYear().toString();
    this.endDate = endValue;
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;

    const tfDayArray = Array.from(allTfDay); // Convertir en tableau
    const selectedDay = tfDayArray.find(day => parseInt(day.getAttribute('date') as string) === end);

    if (selectedDay) {
      if (startValue.length < 10 || this.numberClick === 0) {
        this.element.daySelected = [];
        selectedDay.setAttribute('state', 'startEndDate');
        this.element.daySelected.push(selectedDay);
        this.setInputValue(end, 'start');
        this.numberClick = 1;
      } else if (startValue !== endValue) {
        if (this.element.daySelected.length >= 2) this.element.daySelected.pop();
        selectedDay.setAttribute('state', 'endDate');
        this.element.daySelected.push(selectedDay);
        this.numberClick = 2;
      }
    }

    if (this.element.daySelected.length === 2) {
      this.displaySelectedDate();
    }
  }

  displayError(){
    this.removeError();
    this.shadowRoot?.querySelectorAll('tf-text-input').forEach((input) => {
      input.setAttribute('status', 'error');
      input.insertAdjacentHTML('beforeend', '<p slot="error">Invalid date as to be  JJ/MM/YYYY</p>');
    });
  }

  removeError(){
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
      input.addEventListener('blur', (e : any) => {
        if(!this.element.allCalendar.contains(e.relatedTarget)){
          this.element.allCalendar.style.setProperty('display', 'none');
        }else{
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
      input.removeEventListener('blur', (e : any) => {
        if(!this.element.allCalendar.contains(e.relatedTarget)){
          this.element.allCalendar.style.setProperty('display', 'none');
        }else{
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
    const nextMonth = next ? 0 : 1;
    this.numbersOfDaysInMonth = this.numberOfDaysInMonth(this.month + nextMonth , this.year);
    this.updateMonthAndYear(next);
    const calendarElement = this.createCalendar(next ? 'right' : 'left');
    this.animateCalendarTransition(calendarElement, next ? 'right' : 'left');
    if (this.element.daySelected.length === 1){
      this.displaySelectedDate(true);
    }else if(this.element.daySelected.length === 2){
      this.displaySelectedDate();
    }
  }
  
  displaySelectedDate(onlystartDate = false) {
    const allTfDay = this.shadowRoot?.querySelectorAll('tf-day');
    if (!allTfDay) return;
    const firstDay = parseInt(this.element.daySelected[0].getAttribute('date') as string);
    if(onlystartDate){
      for (const day of allTfDay) {
        if (!day.getAttribute('date')) continue;
        const dayTime = parseInt(day.getAttribute('date') as string);
        if (dayTime === firstDay) {
          day.setAttribute('state', 'startEndDate');
        }
      }
      return;
    }
    const lastDay = parseInt(this.element.daySelected[1].getAttribute('date') as string);
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
    if(time === 0){
      this.shadowRoot?.querySelector(`#${id}`)?.setAttribute('value', '');
      return;
    }
    const date = new Date(time);
    const input = this.shadowRoot?.querySelector(`#${id}`) as HTMLInputElement;
    if (!input) return;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    input.setAttribute('value', `${day}-${month}-${date.getFullYear()}`);
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
  generateDateStamps( numberDay = 1 , month = this.month , year = this.year) {
    return new Date(Date.parse(`${month} ${numberDay}, ${year}`)).getTime();
  }

  //This part create a calendar and return the element
  createCalendar(position: string) {
    const calendarElem = document.createElement('div');
    calendarElem.classList.add('calendar-day-container');
    calendarElem.classList.add(position);
    this.element.calendarMonthContainer?.insertAdjacentElement('afterbegin', calendarElem);
    this.generateMonth(calendarElem);
    this.generateOtherMonthDays(calendarElem);

    return calendarElem;
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

  //This part is called when the user click on a day and display wich day is selected
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

  handleFirstClick(target: HTMLElement) {
    target.setAttribute('state', 'startEndDate');
    const date = parseInt(target.getAttribute('date') as string);
    const formatedDate = this.generateDateByTimeStamp(date);
    this.setInputValue(date, 'start');
    this.setInputValue(date, 'end');
    this.startDate = formatedDate;
    this.endDate = formatedDate;
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
      this.startDate = this.generateDateByTimeStamp(dayTime);
      this.element.daySelected.unshift(target);
    } else {
      this.element.daySelected[0].setAttribute('state', 'startDate');
      target.setAttribute('state', 'endDate');
      this.endDate = this.generateDateByTimeStamp(dayTime);
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
    this.removeAttribute('start-date');
    this.removeAttribute('end-date');
    this.setInputValue(0, 'start');
    this.setInputValue(0, 'end');
    this.element.daySelected = [];
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

  get onlyOneDate() {
    return this.hasAttribute('onlyOneDate');
  }

  set onlyOneDate(value) {
    value && this.setAttribute('onlyOneDate', '');
    !value && this.removeAttribute('onlyOneDate');
  }

  get startDate() {
    return this.getAttribute('start-date') || '';
  }

  set startDate(value : string) {
    this.setAttribute('start-date', value);
  }

  get endDate() {
    return this.getAttribute('end-date') || '';
  }

  set endDate(value : string) {
    this.setAttribute('end-date', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-calendar': TfCalendar;
   }
}

customElements.define('tf-calendar', TfCalendar);
