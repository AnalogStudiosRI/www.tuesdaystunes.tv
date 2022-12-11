export default class YouTubePlaylist extends HTMLElement {
  async connectedCallback() {
    // https://developers.google.com/youtube/v3/docs/playlistItems
    const offset = 0;
    const limit = 10;
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
        // https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/videos
        playlistItems.slice(offset, limit).map((item, idx) => {
          return `
            <div class="p-4 youtube-container">
              <h1>${offset + idx + 1}) ${item.title}</h1> 
              <img src="${item.thumbnails.standard.url}">
              <hr/>
            </div>
          `;
        }).join('')
      }
    `;
  }
}

customElements.define('tt-youtube-playlist', YouTubePlaylist);