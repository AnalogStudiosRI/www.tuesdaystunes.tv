import imgPlaylist from './youtube-playlist-sample.json';
import iframePlaylist from './youtube-playlist-sample2.json';

// const fetchVideoPlaylist = async () => {
//   const API_KEY = '';
//   let playlists = await fetch(
//     `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCxs5mxoDpmmR0hRbwsxU7Sg&key=${API_KEY}`
//   )
//     .then((result) => result.json())
//     .then((ytPlaylists) => ytPlaylists.items);
//   return playlists;
// };

export default class YouTubePlaylist extends HTMLElement {
  connectedCallback() {
    // let ytplaylists = fetchVideoPlaylist();
    let ytImgPlaylists = imgPlaylist.items;
    let ytIframePlaylists = iframePlaylist.items;

    this.innerHTML = `
            <h2 class='font-bold text-lg mb-2'>Youtube Videos with iframe</h2>
            <div class='flex flex-wrap'>
              ${ytIframePlaylists.map((playlist) => {
      return `
                  <div class='p-2 mb-4 mr-2'>
                    ${playlist.player.embedHtml}
                  </div>
                `;
    })}
              </div>
    
              <h2 class='font-bold text-lg mb-2'>Youtube Img Playlist with Title and Date</h2>
              <div class='flex flex-wrap'>
                  ${ytImgPlaylists.map(playlist => {
      return `
                    <div class='border-2 border-yellow-500 text-center rounded-md w-80 p-2 mb-4 mr-2'>
                    <img src='${playlist.snippet.thumbnails.medium.url}' alt='${playlist.snippet.title}' />
                    <p>${playlist.snippet.title} - ${new Date(playlist.snippet.publishedAt).toLocaleDateString('en-UK')}</p>
                  </div>
                    `;
    })}

            </div>
          `;
  }
}

customElements.define('tt-youtube-playlist', YouTubePlaylist);
