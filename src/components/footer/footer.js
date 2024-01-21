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
      name: 'Instagram',
      url: 'https://www.instagram.com/tuesdaystunestvri/'
    }, {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/1jOFrovuxCGulkGdUhR5f7'
    }];
  }

  connectedCallback() {
    const { socialLinks } = this;

    this.innerHTML = `
      <footer>
        <div class="text-center">
          ${
            socialLinks.map((link) => {
              const { name, url } = link;

              return `
                <a
                  class="social-link"
                  href="${url}"
                  title="Visit our ${name} page"
                >
                  <img
                    class="inline-block mx-5 my-2 w-6 h-6 text-center"
                    src="/assets/icons/${name.toLowerCase()}.svg"
                    alt="${name} Logo"
                  />
                </a>
              `;
            }).join('')
          }
        </div>

        <p class="text-xs text-center text-gray-tt">
          Copyright &copy${new Date().getFullYear()} Analog Studios / TuesdaysTunes.tv
        </p>

        <span class="block my-1 text-center text-xs">
          &lt;
            Icons by <a target="_blank" href="https://icons8.com/">Icons8</a>
          &gt;
        <span>
      </footer>
    `;
  }
}

customElements.define('tt-footer', Footer);