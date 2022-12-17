// https://github.com/ProjectEvergreen/greenwood/pull/1017
import { ResourceInterface } from '@greenwood/cli/src/lib/resource-interface.js';

class ApiRoutesResource extends ResourceInterface {
  constructor(compilation, options) {
    super(compilation, options);
  }

  async shouldServe(url) {
    // TODO check it exists first
    return url.startsWith('/api');
  }

  async serve(url, body, headers) {
    let href = new URL(`${this.getBareUrlPath(url).replace('/api/', '')}.js`, `file://${this.compilation.context.userWorkspace}/api/`).href;

    // https://github.com/nodejs/modules/issues/307#issuecomment-1165387383
    if (process.env.__GWD_COMMAND__ === 'develop') { // eslint-disable-line no-underscore-dangle
      href = `${href}?t=${Date.now()}`;
    }

    const { handler } = await import(href);

    // TODO can we assume localhost?
    // TODO get port
    const req = new Request(new URL(`https://localhost:1984${url}`), {
      headers
    });
    const resp = await handler(req);
    const contents = resp.headers.get('content-type').indexOf('application/json') >= 0
      ? await resp.json()
      : await resp.text();

    return {
      body: contents
    };
  }
}

const greenwoodApiRoutesPlugin = () => {
  return {
    type: 'resource',
    name: 'plugin-api-routes',
    provider: (compilation, options) => new ApiRoutesResource(compilation, options)
  };
};

export { greenwoodApiRoutesPlugin };