import { handler as greeting } from './greeting.js';

// https://docs.netlify.com/functions/build/?fn-language=js#code-your-function-2
export async function handler (event, context) {
  console.log({ event, context });
  const request = new Request(event.url);
  console.log(request);
  const response = greeting(request);
  console.log(response);

  // TODO can we just return response.body, or response instead?
  return {
    statusCode: response.status,
    body: await response.text()
  };
};