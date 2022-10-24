export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a
          class="flex justify-center p-2"
          href="/"
          title="Tuesdays Tunes Home page"
        >
          <img
            class="w-full max-w-xs header-logo"
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

customElements.define('tt-header', Header);