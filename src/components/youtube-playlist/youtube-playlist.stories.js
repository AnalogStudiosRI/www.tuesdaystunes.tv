import '../../styles/theme.css';
import './youtube-playlist';

export default {
  title: 'Components/YouTube Playlist'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<tt-youtube-playlist></tt-youtube-playlist>';

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: 'YouTube Playlist'
};