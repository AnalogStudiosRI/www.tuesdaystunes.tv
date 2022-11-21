import '../../styles/theme.css';
import './upcoming-events.js';
import { SINGLE_EVENT, MULTIPLE_EVENTS, NO_EVENTS } from './mock-events';

export default {
  title: 'Components/Upcoming Events'
};

const Template = ({ events }) => `<tt-upcoming-events events='${JSON.stringify(events).replace(/'/g, '\\"')}'></tt-upcoming-events>`;

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