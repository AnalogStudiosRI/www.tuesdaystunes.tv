import { css, html, LitElement } from 'lit';

class BannerComponent extends LitElement {

  static styles = css`
    img {
      display: block;
      width: 50%;
      margin: 0 auto 20px;
    }
  `;
  
  render() {
    return html`
      <div>
        <img src="/assets/tuesdays-tunes.jpg"/>
      </div>
    `;
  }
}

customElements.define('tt-banner', BannerComponent);