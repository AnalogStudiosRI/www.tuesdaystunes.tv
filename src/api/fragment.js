import { renderFromHTML } from 'wc-compiler';
import { getVideos } from '../services/youtube.js';

export async function handler(request) {
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : null;
  const headers = new Headers();
  const videos = await getVideos(offset);
  const { html } = await renderFromHTML(`
    ${
      videos.map((item, idx) => {
        return `
          <tt-video-card
            title="${offset + idx + 1}) ${item.title}"
            thumbnail="${item.thumbnails.standard.url}"
          ></tt-video-card>
        `;
      }).join('')
    }
  `, [
    new URL('../components/video-card/video-card.js', import.meta.url)
  ]);

  headers.append('Content-Type', 'text/html');

  return new Response(html, {
    headers
  });
}