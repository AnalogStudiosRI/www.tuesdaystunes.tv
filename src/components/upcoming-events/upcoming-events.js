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
    const now = new Date();
    now.setDate(1); // set to be the beginning of the current month
    const startOfCurrentMonthTime = now.getTime();
    const eventsByMonth = {};
    const events = (this.getAttribute('events') ? JSON.parse(this.getAttribute('events')) : [])
      .filter((event) => event.startTime >= startOfCurrentMonthTime) // filter out old events except ones that are also in the current month
      .sort((a, b) => a.startTime < b.startTime ? -1 : 1); // sort newest to latest
    const nextUpcomingEventIdx = events.findIndex(e => e?.startTime && e?.startTime > Date.now());
    const noEvents = events.length === 0
      ? '<h2 class="text-center">No Upcoming Events</h2>'
      : '';

    // group events by month
    events.forEach((event, eventIdx) => {
      const time = new Date(event.startTime);
      const month = time.getMonth();
      const monthKey = MONTH_INDEX_MAPPER[month];

      if (!eventsByMonth[monthKey]) {
        eventsByMonth[monthKey] = [];
      }

      eventsByMonth[monthKey].push({
        ...event,
        isNext: eventIdx === nextUpcomingEventIdx
      });
    });

    this.innerHTML = `
      <div class="upcoming-events">
        <h2
          class="text-3xl text-center font-extrabold"
          style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
        >
          Episode Schedule
        </h2>
        ${noEvents}

        ${
          Object.keys(eventsByMonth).map(month => {

            return `
              <div class="mb-6">
                <h3
                  style="background-color:var(--color-secondary);color:var(--color-white);font-family:var(--font-secondary)"
                  class="text-center p-2 mb-4 text-3xl font-bold"
                >
                  ${month}
                </h3>

                ${eventsByMonth[month].map(event => {
                  const { startTime, title, link, isNext } = event;
                  const time = new Date(startTime);
                  const hours = time.getHours();
                  const date = time.getDate();
                  const hour = hours > 12 ? hours - 12 : hours; // here we assume an 8pm (e.g. afternoon) start time
                  const formattedTitle = `${title.replace(/"/g, '\'')} @ ${hour}pm`; // TODO https://github.com/AnalogStudiosRI/www.tuesdaystunes.tv/issues/47
                  const eventLink = link
                    ? `<a title="${title.replace(/"/g, '\'')}" href="${link}" class="underline">${formattedTitle}</a>`
                    : formattedTitle;

                  return `
                    <div>
                      <h4
                        style="color:var(--color-white); margin: .5rem auto;"
                        class="sm:w-11/12 w-full pl-1 sm:pl-0 flex"
                      >
                        <span
                          class="inline-block w-8 h-[1.6rem] text-center mr-2"
                          style="background-color:var(--color-accent);"
                        >
                          ${date}
                        </span>
                        <span
                          style="color:var(--color-secondary);"
                        >
                          ${eventLink} ${isNext ? '👈' : ''}
                        </span>
                      </h4>
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