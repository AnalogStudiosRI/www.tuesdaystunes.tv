import '../../styles/theme.css';
import './youtube-playlist';

export default {
  title: 'Components/YouTube Playlist'
};

const Template = () => '<tt-youtube-playlist></tt-youtube-playlist>';

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'YouTube Playlist'
};