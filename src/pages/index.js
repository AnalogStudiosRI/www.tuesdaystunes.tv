import fetch from 'node-fetch';
import '../components/cast-and-crew/cast-and-crew.js';
import '../components/upcoming-events/upcoming-events.js';
import '../components/spotify-playlist/spotify-playlist.js';
import '../components/youtube-playlist/youtube-playlist.js';

export default class Home extends HTMLElement {
  async connectedCallback() {
    // TODO figure out how to filter for events (none of the suggestions seem to work?)
    // https://github.com/node-fetch/node-fetch/issues/189#issuecomment-412213145
    const events = (await fetch('https://www.analogstudios.net/api/v2/events')
      .then(resp => resp.json()))
      .map(event => {
        return {
          ...event,
          startTime: event.startTime * 1000
        };
      });

    this.innerHTML = `
      <div id="container" class="bg-white rounded-lg drop-shadow-lg xs:p-2 mb-4 mt-2 m:p-12">

        <div id="greeting">
          <div class="w-3/6 p-4 inline-block">
            <img src="/assets/tuesdays-tunes.webp" class="w-2/5 block" style="margin: 0 auto"/>

            <tt-upcoming-events
              events='${JSON.stringify(events).replace(/'/g, '\\"')}'
            ></tt-upcoming-events>
          </div>

          <div class="inline">
            <h1 class="font-extrabold">Welcome!  Tune into our live stream every other Tuesday.</h1>
            <p>Join us every other Tuesday and enjoy selected songs sung by Dave Flamand himself.
            We are looking forward to seeing you at our next live stream on Facebook.  Stay tuned
            for any further details!</p>
            <span>- Tunesy</span>
          </div>
        </div>

        <tt-youtube-playlist></tt-youtube-playlist>

        <tt-spotify-playlist></tt-spotify-playlist>

        <tt-cast-crew></tt-cast-crew>

      </div>
    `;
  }
}