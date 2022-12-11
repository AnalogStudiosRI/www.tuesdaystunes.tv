import { renderToString } from 'wc-compiler';

export async function handler(request) {
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const offset = params.has('offset') ? params.get('offset') : null;
  console.debug({ offset });
  const { html } = await renderToString(new URL('../components/youtube-playlist/youtube-playlist.js', import.meta.url));
  const headers = new Headers();

  headers.append('Content-Type', 'text/html');

  return new Response(html, {
    headers
  });
}