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
      <nav>
      <ul class="flex justify-center p-4 font-title text-2xl text-black-tt">
        ${
          navLinks.map((link, index) => {
            const { name, url } = link;
            const isLast = index + 1 === navLinks.length;
            const path = window !== undefined ? window.location.pathname : null;
            const activePath = path === `/${name}`;

            return `
              <li>
                <a
                  class="nav-link ${activePath ? 'text-orange-tt' : 'text-black-tt'} hover:text-gray-tt"
                  href="${url}"
                  title="Visit our ${name} page"
                >
                ${name}
                </a>
                <span style="margin: 0 ${isLast ? 0 : '1rem' };">${ isLast ? '' : '|'}</span>
              </li>
            `;
          }).join('')
        }
        </ul>
      </nav>
    `;
  }
}

customElements.define('tt-nav', Nav);
