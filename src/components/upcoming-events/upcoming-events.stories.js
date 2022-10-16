import '../../styles/theme.css';
import './upcoming-events.js';
import { SINGLE_EVENT, MULTIPLE_EVENTS, NO_EVENTS } from './mock-events';

export default {
  title: 'Components/Upcoming Events'
};

// TODO mock data with an apostrophe will not work here, e.g. 'Tuesday\'s Tunes Season 3 - Premier!'
// If I use double quote everything stops at the first double quote, e.g. `[{`
// If I use single quote, it stops at the first single quote, e.g. `[{"title":"Tuesday`
// works fine when using `setAttribute` and the DOM 🤷
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
  events: NO_EVENTS
};