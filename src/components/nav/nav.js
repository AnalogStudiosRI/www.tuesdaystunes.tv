export default class Nav extends HTMLElement {
  constructor() {
    super();
    this.navLinks = [
      {
        name: 'Home',
        url: '/'
      }, {
        name: 'Contact',
        url: '/contact/'
      }
    ];
  }

  connectedCallback() {
    const { navLinks } = this;

    if (this.innerHTML !== '') {
      // if already server-rendered, all we need to do is highlight the active link
      Array.from(this.querySelectorAll('a')).forEach(link => {
        const path = globalThis.location.pathname;
        const isCurrentLink = link.getAttribute('href').replace(window.location.origin, '') === path;

        link.style.color = isCurrentLink ? 'var(--color-accent)' : 'var(--color-black)';
      });
    } else {
      this.innerHTML = `
        <nav>
        <ul class="flex justify-center p-4 font-title text-2xl text-black-tt">
          ${
            navLinks.map((link, index) => {
              const { name, url } = link;
              const isLast = index + 1 === navLinks.length;
              const path = typeof globalThis.location === 'undefined' ? null : globalThis.location.pathname;
              const activePath = path === url;

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
}

customElements.define('tt-nav', Nav);