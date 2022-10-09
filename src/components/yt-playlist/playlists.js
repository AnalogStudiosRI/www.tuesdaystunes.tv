const fetchVideoPlaylist = async () => {
    const API_KEY = '';
    let playlists = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCxs5mxoDpmmR0hRbwsxU7Sg&key=${API_KEY}`)
        .then( result => result.json())
        .then(ytPlaylists => ytPlaylists.items);
    return playlists
}

export default class Playlists extends HTMLElement  {
    connectedCallback() { 
        let ytplaylists = fetchVideoPlaylist()
        for (playlist of ytplaylists) {
            this.innerHTML = `
                <div class="videos">
                <img src="${playlist.snippet.thumbnails.medium.url}" />
                <p>${playlist.snippet.title} - ${playlist.snippet.publishedAt}</p>
                </div>
            `
        }


    }
}

customElements.define('yt-playlist', Playlists);