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

    it('has expecte source for iframe', () => {
      expect(playlist.querySelectorAll('iframe')[0].getAttribute('src')).to.equal('https://www.youtube.com/embed?listType=playlist&list=PLrY8SmqJ5XZ_UvVurEvGg8i10g-cxMudZ');
    });
  });

  after(() => {
    playlist.remove();
    playlist = null;
  });

});