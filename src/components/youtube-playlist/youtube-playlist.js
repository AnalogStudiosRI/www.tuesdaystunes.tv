export default class YouTubePlaylist extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2
        class="text-3xl text-center font-extrabold"
        style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
      >
        Past Episodes
      </h2>

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