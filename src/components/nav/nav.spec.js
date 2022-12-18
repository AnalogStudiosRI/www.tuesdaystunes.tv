import { expect } from '@esm-bundle/chai';
import './nav.js';

describe('Components/Nav', () => {
  let nav;

  before(async () => {
    nav = document.createElement('tt-nav');

    document.body.appendChild(nav);

    await nav.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(nav).not.equal(undefined);
      expect(nav.querySelectorAll('nav').length).equal(1);
    });
  });

  describe('Nav Links', () => {
    let links = [];

    before(async () => {
      links = nav.querySelectorAll('nav a.nav-link');
    });

    it('should have the expected of links in the nav', () => {
      expect(links.length).to.equal(2);
      const navLinks = Array.from(links).map(link => link.getAttribute('href'));

      expect(navLinks.includes('/'));
      expect(navLinks.includes('/contact/'));
    });

    it('should have the expected of link labels in the correct order', () => {
      expect(links.length).to.equal(2);
      const navText = Array.from(links).map(link => link.innerText.trim());

      expect(navText[0]).to.equal('Home');
      expect(navText[1]).to.equal('Contact');
    });

    after(async () => {
      links = [];
    });
  });

  after(() => {
    nav.remove();
    nav = null;
  });

});
