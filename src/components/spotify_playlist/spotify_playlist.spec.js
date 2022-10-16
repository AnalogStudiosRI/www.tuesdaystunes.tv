import { expect } from '@esm-bundle/chai';
import './spotify_playlist.js';

describe('Components/Spotify', () => {
  let spotify;

  before(async () => {
    spotify = document.createElement('tt-spotify-playlist');

    document.body.appendChild(spotify);

    await spotify.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(spotify).not.equal(undefined);
      expect(Array.from(document.getElementsByClassName('spotify-container')).length).equal(1);
    });

    it('has expecte source for iframe', () => {
      expect(spotify.querySelectorAll('iframe')[0].getAttribute('src')).to.equal('https://open.spotify.com/embed/playlist/1jOFrovuxCGulkGdUhR5f7?utm_source=generator&theme=0');
    });
  });

  after(() => {
    spotify.remove();
    spotify = null;
  });

});
