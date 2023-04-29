import { handler as greeting } from '../../src/api/greeting.js';

export async function handler (event, context) {
  const { rawUrl, headers } = event;
  const request = new Request(rawUrl, { headers });
  const response = await greeting(request);

  return {
    statusCode: response.status,
    body: await response.text()
  };
};