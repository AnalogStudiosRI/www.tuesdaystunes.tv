import '../video-card/video-card.js';
import { getVideos } from '../../services/youtube.js';

export default class YouTubePlaylist extends HTMLElement {
  async connectedCallback() {
    const offset = 0;
    const videos = await getVideos(offset);
    
    this.innerHTML = `
      <h2
        class="text-3xl text-center font-extrabold"
        style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
      >
        Past Episodes
      </h2>

      ${
        // https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/videos
        videos.map((item, idx) => {
          return `
            <tt-video-card
              title="${offset + idx + 1}) ${item.title}"
              thumbnail="${item.thumbnails.standard.url}"
            ></tt-video-card>
          `;
        }).join('')
      }
    `;
  }
}

customElements.define('tt-youtube-playlist', YouTubePlaylist);