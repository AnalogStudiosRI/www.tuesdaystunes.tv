import '../../styles/theme.css';
import './cast-and-crew.js';

export default {
  title: 'Components/Cast and Crew'
};

const Template = () => '<tt-cast-crew></tt-cast-crew>';

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Cast and Crew'
};