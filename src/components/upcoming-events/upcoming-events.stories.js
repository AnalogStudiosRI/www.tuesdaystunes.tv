import '../../styles/theme.css';
import './upcoming-events.js';

const SINGLE_EVENT = [{
  title: 'Tuesdays Tunes Season Premier!',
  timestamp: Date.now() + 300000,
  link: 'http://www.facebook.com/'
}];

const MULTIPLE_EVENTS = [{
  title: 'Tuesdays Tunes Season Premier!',
  timestamp: Date.now() + 300000,
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesdays Tunes Season Premier!!!!!',
  timestamp: Date.now() + 30000000000,
  link: 'http://www.facebook.com/'
}];

export default {
  title: 'Components/Upcoming Events'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = ({ events }) => `<tt-upcoming-events events='${JSON.stringify(events)}'></tt-upcoming-events>`;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  events: SINGLE_EVENT
};

export const MultipleEvents = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
MultipleEvents.args = {
  events: MULTIPLE_EVENTS
};