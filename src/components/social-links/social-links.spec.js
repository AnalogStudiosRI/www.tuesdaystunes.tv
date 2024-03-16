import { expect } from '@esm-bundle/chai';
import './social-links.js';

describe('Components/Social Links', () => {
  let socialLinks;

  before(async () => {
    socialLinks = document.createElement('tt-social-links');

    document.body.appendChild(socialLinks);

    await socialLinks.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(socialLinks).not.equal(undefined);
      expect(socialLinks.querySelectorAll('div.social-links').length).equal(1);
    });
  });

  describe('Social Links', () => {
    let links = [];
    let logos = [];

    before(async () => {
      links = socialLinks.querySelectorAll('div a.social-link');
      logos = socialLinks.querySelectorAll('div a.social-link svg');
    });

    it('should have the expected social links and logos in the container', () => {
      expect(links.length).to.equal(3);
      expect(logos.length).to.equal(3);
    });

    it('should have the expected Facebook link and logo in the footer', () => {
      const name = 'Facebook';
      const facebookLink = Array.from(links).find(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const facebookLogo = facebookLink.querySelectorAll('svg');

      expect(facebookLink).to.not.equal(undefined);
      expect(facebookLink.getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(facebookLogo.length).to.equal(1);
      expect(facebookLogo[0].getAttribute('width')).to.equal('100%');
    });

    it('should have the expected YouTube link and logo in the footer', () => {
      const name = 'YouTube';
      const youtubeLink = Array.from(links).find(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const youtubeLogo = youtubeLink.querySelectorAll('svg');

      expect(youtubeLink).to.not.equal(undefined);
      expect(youtubeLink.getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(youtubeLogo.length).to.equal(1);
      expect(youtubeLogo[0].getAttribute('width')).to.equal('100%');
    });

    it('should have the expected Spotify link and logo in the footer', () => {
      const name = 'Spotify';
      const spotifyLink = Array.from(links).find(link => link.getAttribute('href').indexOf(`${name.toLowerCase()}.com`) >= 0);
      const spotifyLogo = spotifyLink.querySelectorAll('svg');

      expect(spotifyLink).to.not.equal(undefined);
      expect(spotifyLink.getAttribute('title')).to.equal(`Visit our ${name} page`);

      expect(spotifyLogo.length).to.equal(1);
      expect(spotifyLogo[0].getAttribute('width')).to.equal('100%');
    });

    after(async () => {
      links = [];
      logos = [];
    });
  });

  after(() => {
    socialLinks.remove();
    socialLinks = null;
  });

});