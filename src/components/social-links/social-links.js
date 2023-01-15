import { default as facebookSvg } from '../../assets/icons/facebook.svg';
import { default as spotifySvg } from '../../assets/icons/spotify.svg';
import { default as youtubeSvg } from '../../assets/icons/youtube.svg';

export default class SocialLinks extends HTMLElement {
  constructor() {
    super();
    this.socialLinks = [{
      name: 'Facebook',
      url: 'https://www.facebook.com/Tuesdays-Tunes-111968014950570',
      logo: facebookSvg
    }, {
      name: 'YouTube',
      url: 'https://www.youtube.com/user/analogstudios',
      logo: youtubeSvg
    }, {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/1jOFrovuxCGulkGdUhR5f7',
      logo: spotifySvg
    }];
  }

  connectedCallback() {
    const { socialLinks } = this;

    this.innerHTML = `
      <div class="text-center social-links">
      ${
        socialLinks.map((link) => {
          const { logo, name, url } = link;

          return `
            <a
              class="social-link"
              href="${url}"
              title="Visit our ${name} page"
            >
              <span class="inline-block mx-5 my-2 w-8 h-8 text-center">
                ${logo}
              </span>
            </a>
          `;
        }).join('')
      }
      </div>
    `;
  }
}

customElements.define('tt-social-links', SocialLinks);