import fetch from 'node-fetch';
import '../components/cast-and-crew/cast-and-crew.js';
import '../components/upcoming-events/upcoming-events.js';
import '../components/spotify-playlist/spotify-playlist.js';
import '../components/youtube-playlist/youtube-playlist.js';

export default class Home extends HTMLElement {
  async connectedCallback() {
    const events = (await fetch('https://www.analogstudios.net/api/v2/events?tag=tt')
      .then(resp => resp.json()))
      .map(event => {
        return {
          ...event,
          startTime: event.startTime * 1000
        };
      });

    this.innerHTML = `
      <div
        class="bg-white rounded-lg drop-shadow-lg lg:p-8 m-auto mt-4 md:p-1"
      >

        <div id="greeting" class="grid grid-cols-6">
          <div class="col-span-6 md:col-span-3">
            <img
              src="/assets/tunesy.webp"
              alt="Picture of Tunesy"
              class="w-2/5 block ml-auto mr-auto mt-4 lg:mt-0"
              height="300"
              width="285"
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
              Good Evening Folks!<br/>
              Welcome to Tuesday&apos;s Tunes!!
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
              &#8211; Tunesy
            </p>
          </div>
        </div>

        <tt-youtube-playlist class="block mb-12"></tt-youtube-playlist>

        <tt-spotify-playlist class="block mb-12"></tt-spotify-playlist>

        <tt-cast-crew class="block mb-6"></tt-cast-crew>

      </div>
    `;
  }
}