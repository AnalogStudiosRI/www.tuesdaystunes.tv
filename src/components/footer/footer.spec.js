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
    it('should have the <tt-social-links> component in the footer', () => {
      expect(footer.querySelectorAll('tt-social-links').length).equal(1);
    });
  });

  describe('Copyright', () => {
    it('should display the copyright text', () => {
      const copyright = footer.querySelectorAll('footer p');

      // TODO actually get this match against a regex, e.g. to.match(/^Tuesday's Tunes @\d{4}$/)
      expect(copyright.length).to.equal(1);
      expect(copyright[0].textContent).to.contain('Analog Studios \/ TuesdaysTunes.tv');
    });
  });

  after(() => {
    footer.remove();
    footer = null;
  });

});