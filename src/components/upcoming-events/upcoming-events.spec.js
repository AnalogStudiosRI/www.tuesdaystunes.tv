import { expect } from '@esm-bundle/chai';
import './upcoming-events.js';
import { SINGLE_EVENT, NO_EVENTS, MULTIPLE_EVENTS } from './mock-events.js';

const MONTH_INDEX_MAPPER = [
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
  'December'
];

describe('Components/Upcoming Events', () => {
  let events;

  describe('Default Behavior', () => {
    before(async () => {
      events = document.createElement('tt-upcoming-events');
  
      document.body.appendChild(events);
  
      await events.updateComplete;
    });

    it('should not be null', () => {
      expect(events).not.equal(undefined);
      expect(events.querySelectorAll('div.upcoming-events').length).equal(1);
    });
  });

  describe('Single event', () => {
    before(async () => {
      events = document.createElement('tt-upcoming-events');
      events.setAttribute('events', JSON.stringify(SINGLE_EVENT));
  
      document.body.appendChild(events);
  
      await events.updateComplete;
    });

    it('should not display the no upcoming events text', () => {
      const headings = events.querySelectorAll('h2');

      expect(headings.length).to.equal(1);
      expect(headings[0].textContent).to.not.equal('No Upcoming Events');
    });

    it('should display the correct month heading', () => {
      const headings = events.querySelectorAll('h2');
      const time = new Date(SINGLE_EVENT[0].timestamp);
      const month = time.getMonth();
      const monthLabel = MONTH_INDEX_MAPPER[month];

      expect(headings[0].textContent).to.contain(monthLabel);
    });

    it('should display the correct date details', () => {
      const { title, timestamp } = SINGLE_EVENT[0];
      const headings = events.querySelectorAll('h3');
      const time = new Date(timestamp);
      const date = time.getDate();
      const hour = time.getHours() - 12;
      const display = `${date}${title}@${hour}pm`.replace(/ /g, '');

      expect(headings[0].textContent.replace(/\n/g, '').replace(/ /g, '')).to.equal(display);
    });
  });

  describe('Multiple events', () => {
    let ORDERED_EVENTS = [];

    before(async () => {
      events = document.createElement('tt-upcoming-events');
      events.setAttribute('events', JSON.stringify(MULTIPLE_EVENTS));
  
      document.body.appendChild(events);
  
      await events.updateComplete;

      // 3, 1, 0, 2, 4 
      ORDERED_EVENTS = [{
        ...MULTIPLE_EVENTS[3]
      }, {
        ...MULTIPLE_EVENTS[1]
      }, {
        ...MULTIPLE_EVENTS[0]
      }, {
        ...MULTIPLE_EVENTS[2]
      }, {
        ...MULTIPLE_EVENTS[4]
      }];
    });

    it('should not display the no upcoming events text', () => {
      const headings = events.querySelectorAll('h2');

      expect(headings.length).to.equal(2);
      expect(headings[0].textContent).to.not.equal('No Upcoming Events');
    });

    it('should display the correct month heading', () => {
      const headings = events.querySelectorAll('h2');
      const eventsByMonth = {};

      MULTIPLE_EVENTS.forEach((event) => {
        const time = new Date(event.timestamp);
        const month = time.getMonth();
        const monthKey = MONTH_INDEX_MAPPER[month];
  
        if (!eventsByMonth[monthKey]) {
          eventsByMonth[monthKey] = true;
        }
      });
      
      headings.forEach((heading, idx) => {  
        expect(heading.textContent).to.contain(Object.keys(eventsByMonth)[idx]);
      });
    });

    it('should display the correct date details', () => {
      const headings = events.querySelectorAll('h3');

      headings.forEach((heading, idx) => {
        const { title, timestamp } = ORDERED_EVENTS[idx];
        const time = new Date(timestamp);
        const date = time.getDate();
        const hour = time.getHours() - 12;
        const display = `${date}${title}@${hour}pm`.replace(/ /g, '');

        expect(heading.textContent.replace(/\n/g, '').replace(/ /g, '')).to.equal(display);
      });
    });
  });

  describe('No events', () => {
    before(async () => {
      events = document.createElement('tt-upcoming-events');
      events.setAttribute('events', JSON.stringify(NO_EVENTS));
  
      document.body.appendChild(events);
  
      await events.updateComplete;
    });

    it('should only display the no upcoming events text', () => {
      const headings = events.querySelectorAll('h2');

      expect(headings.length).to.equal(1);
      expect(headings[0].textContent).to.equal('No Upcoming Events');
    });
  });

  after(() => {
    events.remove();
    events = null;
  });

});