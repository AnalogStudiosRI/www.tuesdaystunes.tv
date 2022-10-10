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
    const eventsByMonth = {};
    const events = (JSON.parse(this.getAttribute('events')) || [])
      .filter((event) => {
        // filter out old events except ones that are also in the current month
        const { timestamp } = event;
        const now = new Date();

        // set to be the beginning of the current month
        now.setDate(1);
        now.setFullYear(now.getFullYear());
        now.setMonth(now.getMonth());

        const isInCurrentMonth = timestamp >= now.getTime();

        return event.timestamp >= now.getTime() || isInCurrentMonth;
      })
      .sort((a, b) => a.timestamp < b.timestamp ? -1 : 1); // sort newest to latest
    const noEvents = events.length === 0
      ? '<h2 class="text-center">No Upcoming Events</h2>'
      : '';

    // group events by month
    events.forEach((event) => {
      const time = new Date(event.timestamp);
      const month = time.getMonth();
      const monthKey = MONTH_INDEX_MAPPER[month];

      if (!eventsByMonth[monthKey]) {
        eventsByMonth[monthKey] = [];
      }

      eventsByMonth[monthKey].push(event);
    });

    /* eslint-disable indent */
    this.innerHTML = `
      <div>
        ${noEvents}
  
        ${
          Object.keys(eventsByMonth).map((month) => {
            return `
              <div class="mb-6">
                <h2 
                  style="background-color:var(--color-secondary);color:#efefef"
                  class="text-center p-2 mb-4 text-3xl font-bold"
                >
                  ${month}
                </h2>

                ${eventsByMonth[month].map((event) => {
                  const { link, timestamp, title } = event;
                  const time = new Date(timestamp);
                  const date = time.getDate();
                  const hour = time.getHours() - 12; // here we assume an 8pm (e.g. afternoon) start time
          
                  return `
                    <div>
                      <h3 
                        style="color:#efefef; margin: .5rem auto;"
                        class="sm:w-1/2 md:w-1/3"
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
                            class="underline"
                            style="color:var(--color-secondary);"
                          >
                            ${title} @ ${hour}pm
                          </span>
                        </a>
                      </h3>
                    </div>
                  `;
                }).join('')}
              </div>
            `;
          }).join('')
        }      
      </div>
    `;
  }
}

customElements.define('tt-upcoming-events', UpcomingEvents);