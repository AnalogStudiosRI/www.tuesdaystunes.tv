import { handler as fragment } from '../../src/api/fragment';

export async function handler (event, context) {
  const { rawUrl, headers } = event;
  const request = new Request(rawUrl, { headers });
  const response = await fragment(request);

  return {
    statusCode: response.status,
    body: await response.text()
  };
};