import { css, html, LitElement } from 'lit';

class FooterComponent extends LitElement {

  static styles = css`
    footer {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      color: white;
    }
  `;

  render() {
    const year = new Date().getFullYear();

    return html`
      <footer>
        <slot></slot>
        <h5>&copy; ${year} - Tuesday's Tunes / Analog Studios</h5>
      </footer>
    `;
  }
}

customElements.define('tt-footer', FooterComponent);