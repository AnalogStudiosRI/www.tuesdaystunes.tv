import { expect } from '@esm-bundle/chai';
import './footer.js';

describe('Components/Footer', () => {
  let footer;

  before(async () => {
    footer = document.createElement('tt-footer');

    document.body.appendChild(footer);

    await footer.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(footer).not.equal(undefined);
      expect(footer.querySelectorAll('footer').length).equal(1);
    });
  });

  describe('Social Links', () => {
    let links = [];
    let logos = [];

    before(async () => {
      links = footer.querySelectorAll('footer a.social-link');
      logos = document.querySelectorAll('footer a.social-link img');
    });

    it('should have the expected social links and logos in the footer', () => {
      expect(links.length).to.equal(5);
      expect(logos.length).to.equal(5);
    });

    it('should have the expected Facebook link and logo in the footer', () => {
      const name = 'Facebook';
      const facebookLink = Array.from(links).filter(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const facebookLogo = Array.from(logos).filter(logo => logo.getAttribute('src').indexOf(`${name.toLowerCase()}.svg`) >= 0);

      expect(facebookLink.length).to.equal(1);
      expect(facebookLink[0].getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(facebookLogo.length).to.equal(1);
      expect(facebookLogo[0].getAttribute('alt')).to.equal(`${name} Logo`);
    });

    it('should have the expected YouTube link and logo in the footer', () => {
      const name = 'YouTube';
      const youtubeLink = Array.from(links).filter(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const youtubeLogo = Array.from(logos).filter(logo => logo.getAttribute('src').indexOf(`${name.toLowerCase()}.svg`) >= 0);

      expect(youtubeLink.length).to.equal(1);
      expect(youtubeLink[0].getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(youtubeLogo.length).to.equal(1);
      expect(youtubeLogo[0].getAttribute('alt')).to.equal(`${name} Logo`);
    });

    it('should have the expected Instagram link and logo in the footer', () => {
      const name = 'Instagram';
      const instagramLink = Array.from(links).filter(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const youtubeLogo = Array.from(logos).filter(logo => logo.getAttribute('src').indexOf(`${name.toLowerCase()}.svg`) >= 0);

      expect(instagramLink.length).to.equal(1);
      expect(instagramLink[0].getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(youtubeLogo.length).to.equal(1);
      expect(youtubeLogo[0].getAttribute('alt')).to.equal(`${name} Logo`);
    });

    it('should have the expected TikTok link and logo in the footer', () => {
      const name = 'TikTok';
      const tiktokLink = Array.from(links).filter(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const tiktokLogo = Array.from(logos).filter(logo => logo.getAttribute('src').indexOf(`${name.toLowerCase()}.svg`) >= 0);

      expect(tiktokLink.length).to.equal(1);
      expect(tiktokLink[0].getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(tiktokLogo.length).to.equal(1);
      expect(tiktokLogo[0].getAttribute('alt')).to.equal(`${name} Logo`);
    });

    it('should have the expected Spotify link and logo in the footer', () => {
      const name = 'Spotify';
      const spotifyLink = Array.from(links).filter(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const spotifyLogo = Array.from(logos).filter(logo => logo.getAttribute('src').indexOf(`${name.toLowerCase()}.svg`) >= 0);

      expect(spotifyLink.length).to.equal(1);
      expect(spotifyLink[0].getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(spotifyLogo.length).to.equal(1);
      expect(spotifyLogo[0].getAttribute('alt')).to.equal(`${name} Logo`);
    });

    after(async () => {
      links = [];
      logos = [];
    });
  });

  describe('Copyright', () => {
    it('should display the copyright text', () => {
      const copyright = footer.querySelectorAll('footer p');

      // TODO actually get this match against a regex, e.g. to.match(/^Tuesday's Tunes @\d{4}$/)
      expect(copyright.length).to.equal(1);
      expect(copyright[0].textContent).to.contain('Analog Studios / TuesdaysTunes.tv');
    });
  });

  after(() => {
    footer.remove();
    footer = null;
  });

});