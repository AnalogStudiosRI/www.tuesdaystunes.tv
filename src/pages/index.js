import fetch from 'node-fetch';
import '../components/cast-and-crew/cast-and-crew.js';
import '../components/upcoming-events/upcoming-events.js';
import '../components/spotify-playlist/spotify-playlist.js';
import '../components/youtube-playlist/youtube-playlist.js';

export default class Home extends HTMLElement {
  async connectedCallback() {
    const events = (await fetch('https://www.analogstudios.net/api/v2/events')
      .then(resp => resp.json()))
      .map(event => {
        return {
          ...event,
          startTime: event.startTime * 1000
        };
      });

    this.innerHTML = `
      <tt-upcoming-events
        events='${JSON.stringify(events).replace(/'/g, '\\"')}'
      ></tt-upcoming-events>

      <tt-youtube-playlist></tt-youtube-playlist>

      <tt-spotify-playlist></tt-spotify-playlist>

      <tt-cast-crew></tt-cast-crew>
    `;
  }
}