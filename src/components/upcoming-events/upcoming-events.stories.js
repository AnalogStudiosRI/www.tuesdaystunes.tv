import '../../styles/theme.css';
import './upcoming-events.js';

const SINGLE_EVENT = [{
  title: 'Tuesdays Tunes Season 3 - Premier!',
  timestamp: Date.now() + 300000,
  link: 'http://www.facebook.com/'
}];

// includes testing for multiple months, events list "overflow", and out of order events
const MULTIPLE_EVENTS = [{
  title: 'Tuesdays Tunes Season 3 - Episode 1',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 15),
  link: 'http://www.facebook.com/'
}, {
  ...SINGLE_EVENT[0]
}, {
  title: 'Tuesdays Tunes Season 3 - Episode 2',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 30),
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesdays Tunes Season 3 - Teaser Trailer',
  timestamp: SINGLE_EVENT[0].timestamp - (86400000 * 5),
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesdays Tunes Season 3 - Episode 3',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 45),
  link: 'http://www.facebook.com/'
}];

export default {
  title: 'Components/Upcoming Events'
};

const Template = ({ events }) => `<tt-upcoming-events events='${JSON.stringify(events)}'></tt-upcoming-events>`;

export const Primary = Template.bind({});

Primary.args = {
  events: SINGLE_EVENT
};

export const MultipleEvents = Template.bind({});

MultipleEvents.args = {
  events: MULTIPLE_EVENTS
};

export const NoEvents = Template.bind({});

NoEvents.args = {
  events: []
};