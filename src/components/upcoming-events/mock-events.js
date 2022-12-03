const SINGLE_EVENT = [{
  title: 'Tuesday\'s Tunes Season 3 - Teaser Trailer!',
  startTime: Date.now() + 300000,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite.'
}];

// includes testing for multiple months, events list "overflow", and out of order events
const MULTIPLE_EVENTS = [{
  title: 'Tuesday\'s Tunes Season 3 - Episode 1',
  startTime: SINGLE_EVENT[0].startTime + (86400000 * 15),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite.',
  link: 'http://www.facebook.com/'
}, {
  ...SINGLE_EVENT[0],
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesday\'s Tunes Season 3 - Episode 2',
  startTime: SINGLE_EVENT[0].startTime + (86400000 * 30),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite.',
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesday\'s Tunes Season 3 - Premier',
  startTime: SINGLE_EVENT[0].startTime + (86400000 * 5),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite.',
  link: 'http://www.facebook.com/'
}, {
  title: 'Tuesday\'s Tunes Season 3 - Episode 3',
  startTime: SINGLE_EVENT[0].startTime + (86400000 * 45),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite.',
  link: 'http://www.facebook.com/'
}];

const NO_EVENTS = [];

export { SINGLE_EVENT, MULTIPLE_EVENTS, NO_EVENTS };