export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.socialLinks = [{
      name: 'YouTube',
      url: 'https://www.youtube.com/user/analogstudios'
    }, {
      name: 'Facebook',
      url: 'https://www.facebook.com/Tuesdays-Tunes-111968014950570'
    }, {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/1jOFrovuxCGulkGdUhR5f7'
    }];
  }

  connectedCallback() {
    const { socialLinks } = this;

    this.innerHTML = `
      <footer>
        <div class="grid grid-cols-3">
          ${
            socialLinks.map((link) => {
              const { name, url } = link;

              return `
                <a
                  href="${url}"
                  title="Visit our ${name} page"
                >
                  <img
                    class="w-6"
                    src="/assets/icons/${name.toLowerCase()}.svg"
                    alt="${name} Logo"
                  />
                </a>
              `;
            }).join('')
          }
        </div>

        <p id="copyright" class="block text-xs text-center text-gray-500">
          Copyright &copy${new Date().getFullYear()} Analog Studios / TuesdaysTunes.tv
        </p>

        <span class="text-center text-xs block">
          &lt;
            <a target="_blank" href="https://icons8.com/">Icons</a> by
            <a target="_blank" href="https://icons8.com">Icons8</a>
          &gt;
        <span>
      </footer>
    `;
  }
}

customElements.define('tt-footer', Footer);