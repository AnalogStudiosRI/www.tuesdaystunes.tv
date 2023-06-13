import '../../styles/theme.css';
import './footer.js';

export default {
  title: 'Components/Footer'
};

const Template = () => '<tt-footer></tt-footer>';

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Footer'
};