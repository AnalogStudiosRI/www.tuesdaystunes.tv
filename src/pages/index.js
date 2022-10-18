import fetch from 'node-fetch';
import '../components/upcoming-events/upcoming-events.js';

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
    `;
  }
}