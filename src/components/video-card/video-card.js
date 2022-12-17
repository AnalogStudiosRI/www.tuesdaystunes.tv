export default class VideoCard extends HTMLElement {
  connectedCallback() {
    const thumbnail = this.getAttribute('thumbnail');
    const title = this.getAttribute('title');

    this.innerHTML = `
      <div class="p-4 youtube-container">
        <h1>${title}</h1> 
        <img src="${thumbnail}" loading="lazy">
        <button>View Broadcast</button>
        <hr/>
      </div>
    `;
  }
}

customElements.define('tt-video-card', VideoCard);