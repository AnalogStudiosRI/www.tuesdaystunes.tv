import '../../styles/theme.css';
import './cast-and-crew.js';

export default {
  title: 'Components/Cast and Crew'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<tt-cast-crew></tt-cast-crew>';

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Cast and Crew'
};