import '../../styles/theme.css';
import './footer.js';

export default {
  title: 'Components/Footer'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<tt-footer></tt-footer>';

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Footer'
};