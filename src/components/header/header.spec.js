import { expect } from '@esm-bundle/chai';
import './header.js';

describe('Components/Header', () => {
  let header;
  let logos = [];

  before(async () => {
    header = document.createElement('tt-header');
    logos = document.getElementsByClassName('header-logo');
    document.body.appendChild(header);

    await header.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(header).not.equal(undefined);
      expect(header.querySelectorAll('header').length).equal(1);
    });

    it('should have proper image attributes', () => {
      const headerLogo = Array.from(logos)[0];
      expect(headerLogo.getAttribute('src')).to.equal('/assets/tuesdays-tunes.webp');
      expect(headerLogo.getAttribute('alt')).to.equal('Tuesdays Tunes');
    });
  });

  after(() => {
    header.remove();
    header = null;
  });

});
