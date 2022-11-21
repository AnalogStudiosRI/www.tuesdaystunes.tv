import { expect } from '@esm-bundle/chai';
import './youtube-playlist.js';

describe('Components/YouTube Playlist', () => {
  let playlist;

  before(async () => {
    playlist = document.createElement('tt-youtube-playlist');

    document.body.appendChild(playlist);

    await playlist.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(playlist).not.equal(undefined);
      expect(Array.from(document.getElementsByTagName('div')).length).equal(1);
    });

    it('should display the top level heading text', () => {
      const headings = playlist.querySelectorAll('h2');

      expect(headings.length).to.equal(1);
      expect(headings[0].textContent).to.contain('Past Episodes');
    });

    it('has the expected src attribute for the <iframe>', () => {
      expect(playlist.querySelectorAll('iframe')[0].getAttribute('src')).to.equal('https://www.youtube.com/embed?listType=playlist&list=PLrY8SmqJ5XZ_UvVurEvGg8i10g-cxMudZ');
    });
  });

  after(() => {
    playlist.remove();
    playlist = null;
  });

});