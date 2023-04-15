export async function handler(request) { // <-- new Request
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const name = params.has('name') ? params.get('name') : 'Greenwood';
  const body = { message: `Hello ${name}!!!` };
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  return new Response(JSON.stringify(body), {
    headers
  });
}