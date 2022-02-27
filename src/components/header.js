import { css, html, LitElement } from 'lit';

class HeaderComponent extends LitElement {

  static styles = css`
    h1 {
      width: 90%;
      margin: 30px auto;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
       <h1>Coming Soon!</h1>
      </header>
    `;
  }
}

customElements.define('tt-header', HeaderComponent);