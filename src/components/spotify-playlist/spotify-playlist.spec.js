import { expect } from '@esm-bundle/chai';
import './spotify-playlist.js';

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

    it('should display the top level heading banner text', () => {
      const headings = spotify.querySelectorAll('h2');

      expect(headings.length).to.equal(1);
      expect(headings[0].textContent).to.contain('Spotify Playlist');
    });

    it('has the expected src attribute for the <iframe>', () => {
      expect(spotify.querySelectorAll('iframe')[0].getAttribute('src')).to.equal('https://open.spotify.com/embed/playlist/1jOFrovuxCGulkGdUhR5f7?utm_source=generator&theme=0');
    });
  });

  after(() => {
    spotify.remove();
    spotify = null;
  });

});
