const SINGLE_EVENT = [{
  title: 'Tuesdays Tunes Season 3 - Premier!',
  timestamp: Date.now() + 300000,
  link: 'http://www.facebook.com/'
}];

// includes testing for multiple months, events list "overflow", and out of order events
const MULTIPLE_EVENTS = [{
  title: 'Tuesdays Tunes Season 3 - Episode 1',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 15),
  link: 'http://www.facebook.com/'
}, {
  ...SINGLE_EVENT[0]
}, {
  title: 'Tuesdays Tunes Season 3 - Episode 2',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 30),
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesdays Tunes Season 3 - Teaser Trailer',
  timestamp: SINGLE_EVENT[0].timestamp - (86400000 * 5),
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesdays Tunes Season 3 - Episode 3',
  timestamp: SINGLE_EVENT[0].timestamp + (86400000 * 45),
  link: 'http://www.facebook.com/'
}];

const NO_EVENTS = [];

export { SINGLE_EVENT, MULTIPLE_EVENTS, NO_EVENTS };
