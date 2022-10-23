export default class YouTubePlaylist extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="p-4 youtube-container">
        <iframe
          style="border-radius:12px"
          src="https://www.youtube.com/embed?listType=playlist&list=PLrY8SmqJ5XZ_UvVurEvGg8i10g-cxMudZ"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    `;
  }
}

customElements.define('tt-youtube-playlist', YouTubePlaylist);