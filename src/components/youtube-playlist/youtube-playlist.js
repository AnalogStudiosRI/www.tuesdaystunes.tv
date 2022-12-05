import fetch from 'node-fetch';

export default class YouTubePlaylist extends HTMLElement {
  async connectedCallback() {
    // https://developers.google.com/youtube/v3/docs/playlistItems
    const playlistItems = (await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${process.env.API_KEY_YOUTUBE}&playlistId=PLrY8SmqJ5XZ_UvVurEvGg8i10g-cxMudZ&maxResults=50&part=snippet`) // eslint-disable-line max-len
      .then(resp => resp.json()))
      .items.map(item => item.snippet)
      .reverse();
    
    this.innerHTML = `
      <h2
        class="text-3xl text-center font-extrabold"
        style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
      >
        Past Episodes
      </h2>

      ${
        playlistItems.map((item) => {
          return `
            <div class="p-4 youtube-container">
              <iframe
                style="border-radius:12px"
                src="https://www.youtube.com/embed/${item.resourceId.videoId}"
                width="100%"
                height="500px"
                title="Spotify Playlist"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
              </iframe>
            </div>
          `;
        }).join('')
      }
    `;
  }
}

customElements.define('tt-youtube-playlist', YouTubePlaylist);