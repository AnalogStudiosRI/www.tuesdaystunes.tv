import { expect } from '@esm-bundle/chai';
import './header.js';

describe('Components/Header', () => {
  let header;

  before(async () => {
    header = document.createElement('tt-header');

    document.body.appendChild(header);

    await header.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(header).not.equal(undefined);
      expect(header.querySelectorAll('header').length).equal(1);
    });
  });

  after(() => {
    header.remove();
    header = null;
  });

});
