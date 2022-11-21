export default class SpotifyPlaylist extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2
        class="text-3xl text-center font-extrabold"
        style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
      >
        Spotify Playlist
      </h2>

      <div class="p-4 spotify-container">
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/1jOFrovuxCGulkGdUhR5f7?utm_source=generator&theme=0"
          width="100%"
          height="380px"
          title="Spotify Playlist"
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
