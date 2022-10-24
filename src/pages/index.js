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
      .filter(event => event.tags.includes('tt'))
      .map(event => {
        return {
          ...event,
          startTime: event.startTime * 1000
        };
      });

    this.innerHTML = `
      <div
        class="bg-white rounded-lg drop-shadow-lg p-6 mb-4 mt-2"
      >

        <div id="greeting" class="grid grid-cols-6">
          <div class="col-span-6 md:col-span-3">
            <img
              src="/assets/tuesdays-tunes.webp"
              alt="Picture of Tunesy"
              class="w-2/5 block m-0 ml-auto mr-auto"
            />

            <tt-upcoming-events
              events='${JSON.stringify(events).replace(/'/g, '\\"')}'
              class="block w-11/12 m-0 ml-auto mr-auto"
            ></tt-upcoming-events>
          </div>

          <div class="col-span-6 md:col-span-3 p-2">
            <h1
              class="font-extrabold uppercase text-3xl lg:text-5xl"
              style="font-family:var(--font-secondary)"
            >
              Welcome!<br/> Tune into our live stream every other Tuesday.
            </h1>

            <p
              class="mt-2 mb-2"
              style="font-family:var(--font-secondary);"
            >
              Join us every other Tuesday and enjoy selected songs sung by Dave Flamand himself.
              We are looking forward to seeing you at our next live stream on Facebook.  Stay tuned
              for any further details!
            </p>

            <p
              class="text-right mr-6"
              style="font-family:var(--font-secondary);"
            >
              - Tunesy
            </p>
          </div>
        </div>

        <tt-youtube-playlist></tt-youtube-playlist>

        <tt-spotify-playlist></tt-spotify-playlist>

        <tt-cast-crew></tt-cast-crew>

      </div>
    `;
  }
}