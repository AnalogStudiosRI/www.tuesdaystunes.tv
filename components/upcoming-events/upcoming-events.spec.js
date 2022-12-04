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

function formatEventText(event, nextUpcomingEventId) {
  const { id, title, startTime } = event;
  const time = new Date(startTime);
  const date = time.getDate();
  const hours = time.getHours();
  const hour = hours > 12 ? hours - 12 : hours;
  const isNextUpcomingEvent = nextUpcomingEventId === id ? '👈' : '';

  return `${date}${title}@${hour}pm ${isNextUpcomingEvent}`.replace(/ /g, '');
}

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

    it('should display the top level heading text', () => {
      const headings = events.querySelectorAll('h2');

      expect(headings.length).to.equal(2); // first one is the top level heading
      expect(headings[0].textContent).to.contain('Episode Schedule');
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

      expect(headings.length).to.equal(1); // first one is the top level heading
      expect(headings[0].textContent).to.not.equal('No Upcoming Events');
    });

    it('should display the correct month heading', () => {
      const headings = events.querySelectorAll('h3');
      const time = new Date(SINGLE_EVENT[0].startTime);
      const month = time.getMonth();
      const monthLabel = MONTH_INDEX_MAPPER[month];

      expect(headings[0].textContent).to.contain(monthLabel);
    });

    it('should display the correct date details', () => {
      const event = SINGLE_EVENT[0];
      const headings = events.querySelectorAll('h4');
      const display = formatEventText(event, event.id);

      expect(headings[0].textContent.replace(/\n/g, '').replace(/ /g, '')).to.equal(display);
    });
  });

  describe.only('Multiple events', () => {
    let ORDERED_EVENTS = [];

    before(async () => {
      events = document.createElement('tt-upcoming-events');
      events.setAttribute('events', JSON.stringify(MULTIPLE_EVENTS));
  
      document.body.appendChild(events);
  
      await events.updateComplete;

      // 1, 3, 0, 2, 4
      ORDERED_EVENTS = [{
        ...MULTIPLE_EVENTS[1]
      }, {
        ...MULTIPLE_EVENTS[3]
      }, {
        ...MULTIPLE_EVENTS[0]
      }, {
        ...MULTIPLE_EVENTS[2]
      }, {
        ...MULTIPLE_EVENTS[4]
      }];
    });

    it('should not display the no upcoming events text', () => {
      const headings = events.querySelectorAll('h3');

      expect(headings.length).to.greaterThanOrEqual(2); // sometimes events will spread over three months
      expect(headings[0].textContent).to.not.equal('No Upcoming Events');
    });

    it('should display the correct month heading', () => {
      const headings = events.querySelectorAll('h3');
      const eventsByMonth = [];

      ORDERED_EVENTS.forEach((event) => {
        const time = new Date(event.startTime);
        const month = time.getMonth();
        const monthKey = MONTH_INDEX_MAPPER[month];
  
        if (!eventsByMonth.includes(monthKey)) {
          eventsByMonth.push(monthKey);
        }
      });

      headings.forEach((heading, idx) => {  
        expect(heading.textContent).to.contain(eventsByMonth[idx]);
      });
    });

    it('should display the correct date details', () => {
      const now = new Date();
      const month = now.getMonth();
      const headings = events.querySelectorAll('h4');
      let isNextUpcomingEventId = null;

      headings.forEach((heading, idx) => {
        const event = ORDERED_EVENTS[idx];
        const { startTime, id } = event;
        const eventTime = new Date(startTime);

        if (!isNextUpcomingEventId && eventTime.getMonth() === month && startTime >= now.getTime()) {
          isNextUpcomingEventId = id;
        }
        
        const display = formatEventText(event, isNextUpcomingEventId);

        expect(heading.textContent.replace(/\n/g, '').replace(/ /g, '')).to.equal(display);
      });
    });

    it('should display the correct link details', () => {
      const links = events.querySelectorAll('a');

      links.forEach((link, idx) => {
        const event = ORDERED_EVENTS[idx];
        const { title, startTime } = event;
        const time = new Date(startTime);
        const hours = time.getHours();
        const hour = hours > 12 ? hours - 12 : hours;
        const display = `${title}@${hour}pm`.replace(/ /g, '');

        expect(link.href).to.equal(event.link);
        expect(link.title).to.equal(title);
        expect(link.textContent.replace(/\n/g, '').replace(/ /g, '')).to.equal(display);
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

      expect(headings.length).to.equal(2); // first one is the top level heading
      expect(headings[1].textContent).to.equal('No Upcoming Events');
    });
  });

  describe('No events attribute', () => {
    before(async () => {
      events = document.createElement('tt-upcoming-events');

      document.body.appendChild(events);

      await events.updateComplete;
    });

    it('should only display the no upcoming events text', () => {
      const headings = events.querySelectorAll('h2');

      expect(headings.length).to.equal(2); // first one is the top level heading
      expect(headings[1].textContent).to.equal('No Upcoming Events');
    });
  });

  after(() => {
    events.remove();
    events = null;
  });

});