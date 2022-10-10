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
      expect(links.length).to.equal(5);
      const navLinks = Array.from(links).map(link => link.getAttribute('href'));

      expect(navLinks.includes('/'));
      expect(navLinks.includes('/events'));
      expect(navLinks.includes('/media'));
      expect(navLinks.includes('/merchandise'));
      expect(navLinks.includes('/the_crew'));
    });

    it('should have the expected of links in the correct order', () => {
      expect(links.length).to.equal(5);
      const navText = Array.from(links).map(link => link.innerText);

      expect(navText[0].split(' ').some(word => word.includes('Home')));
      expect(navText[1].split(' ').some(word => word.includes('Events')));
      expect(navText[2].split(' ').some(word => word.includes('Media')));
      expect(navText[3].split(' ').some(word => word.includes('Merchendise')));
      expect(navText[4].trim().includes('The Crew'));
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
