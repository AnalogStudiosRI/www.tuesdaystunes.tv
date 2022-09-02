import { expect } from '@esm-bundle/chai';
import './footer.js';

describe('Components/Footer', () => {
  let footer;

  beforeEach(async () => {
    footer = document.createElement('tt-footer');

    document.body.appendChild(footer);

    await footer.updateComplete;
  });

  afterEach(() => {
    footer.remove();
    footer = null;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(footer).not.equal(undefined);
      expect(footer.querySelectorAll('footer').length).equal(1);
    });
  
    it('should display copyright text', () => {
      const copyright = footer.querySelectorAll('#copyright')[0];

      // TODO actually get this match against a regex, e.g. to.match(/^Tuesday's Tunes @\d{4}$/)
      expect(copyright.textContent).to.contain('Tuesday\'s Tunes');
    });
  });

});