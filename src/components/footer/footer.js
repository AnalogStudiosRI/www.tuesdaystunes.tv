import '../social-links/social-links.js';

export default class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="m-4">
        <tt-social-links></tt-social-links>

        <p class="text-xs text-center text-gray-tt">
          Copyright &copy${new Date().getFullYear()} Analog Studios / TuesdaysTunes.tv
        </p>
      </footer>
    `;
  }
}

customElements.define('tt-footer', Footer);