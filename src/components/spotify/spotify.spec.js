import { expect } from '@esm-bundle/chai';
import './spotify.js';

describe('Components/Spotify', () => {
  let spotify;

  before(async () => {
    spotify = document.createElement('tt-spotify');

    document.body.appendChild(spotify);

    await spotify.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(spotify).not.equal(undefined);
      expect(Array.from(document.getElementsByClassName('spotify-container')).length).equal(1);
    });
  });

  after(() => {
    spotify.remove();
    spotify = null;
  });

});
