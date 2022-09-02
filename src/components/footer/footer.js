export default class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer><h6 id="copyright">Tuesday's Tunes &copy${new Date().getFullYear()}</h6></footer>
    `;
  }
}

customElements.define('tt-footer', Footer);