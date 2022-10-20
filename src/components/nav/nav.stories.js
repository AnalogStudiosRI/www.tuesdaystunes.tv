import '../../styles/theme.css';
import './nav.js';

export default {
  title: 'Components/Nav'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<tt-nav></tt-nav>';

export const Primary = Template.bind({});
