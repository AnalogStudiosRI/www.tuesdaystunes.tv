export default class SpotifyPlaylist extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="p-4 spotify-container">
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/1jOFrovuxCGulkGdUhR5f7?utm_source=generator&theme=0"
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

customElements.define('tt-spotify-playlist', SpotifyPlaylist);
