export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        style="min-height:200px"
      >
        <a
          class="flex justify-center p-2"
          href="/"
          title="Tuesdays Tunes Home page"
        >
          <img
            class="w-full h-full max-w-xs header-logo"
            src="/assets/tuesdays-tunes.webp"
            alt="Tuesdays Tunes"
            height="200"
            width="200"
          />
        </a>
      </header>
    `;
  }
}

customElements.define("tt-header", Header);
