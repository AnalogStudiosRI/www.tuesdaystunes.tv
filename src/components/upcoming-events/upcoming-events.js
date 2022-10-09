const MONTH_INDEX_MAPPER = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class UpcomingEvents extends HTMLElement {
  connectedCallback() {
    const events = (JSON.parse(this.getAttribute('events')) || [])
      .filter(event => event.timestamp >= Date.now());

    console.debug({ events });

    /* eslint-disable indent */
    this.innerHTML = `
      <div>
      ${events.map((event) => {
        const { link, timestamp, title } = event;
        const time = new Date(timestamp);
        const month = time.getMonth();
        const date = time.getDate();
        const hour = time.getHours() - 12; // here we assume an 8pm (e.g. afternoon) start time

        return `
          <div>
            <h2 
              style="background-color:var(--color-secondary);color:#efefef"
              class="text-center p-2 mb-2 text-3xl font-bold"
            >
              ${MONTH_INDEX_MAPPER[month]}
            </h2>
            <h3 
              style="color:#efefef"
              class="text-center"
            >
              <a 
                href="${link}"
                alt="${title}"
              >
                <span
                  class="inline-block w-8 text-center"
                  style="background-color:var(--color-accent);"
                >
                  ${date}
                </span>
                <span
                  style="color:var(--color-secondary);"
                >${title} @ ${hour}pm</span>
              </a>
            </h3>
          </div>
        `;
      })}
      </div>
    `;
  }
}

customElements.define('tt-upcoming-events', UpcomingEvents);