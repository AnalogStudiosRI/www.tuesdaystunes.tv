export default class Nav extends HTMLElement {
  constructor() {
    super();
    this.navLinks = [
      {
        name: 'Home',
        url: '/'
      }, {
        name: 'Events',
        url: '/events'
      }, {
        name: 'Media',
        url: '/media'
      },
      {
        name: 'Merchendise',
        url: '/merchendise'
      },
      {
        name: 'The Crew',
        url: '/the_crew'
      }
    ];
  }

  connectedCallback() {
    const { navLinks } = this;

    this.innerHTML = `
      <nav class="flex justify-center p-4">
        ${
          navLinks.map((link, index) => {
            const { name, url } = link;
            const isLast = index + 1 === navLinks.length;
            const activePath = window.location.path === `/${name}`;

            return `
              <a
                class="nav-link text-2xl text-${activePath ? 'red' : 'black'}"
                href="${url}"
                title="Visit our ${name} page"
              >
              ${name}
              <span class="pr-${ isLast ? 0 : 2 }">${ isLast ? '' : '|' }</span>
              </a>
            `;
          }).join('')
        }
      </nav>
    `;
  }
}

customElements.define('tt-nav', Nav);
