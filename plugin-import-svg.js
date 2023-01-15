/*
 * 
 * Enables using JavaScript to import SVG files, using ESM syntax.
 *
 */
import fs from 'fs';
import { ResourceInterface } from '@greenwood/cli/src/lib/resource-interface.js';

class ImportSvgResource extends ResourceInterface {
  constructor(compilation, options) {
    super(compilation, options);
    this.extensions = ['.svg'];
    this.contentType = 'text/javascript';
  }

  // TODO resolve as part of https://github.com/ProjectEvergreen/greenwood/issues/952
  async shouldServe() {
    return false;
  }

  async shouldResolve() {
    return false;
  }

  async shouldIntercept(url, body, headers = { request: {} }) {
    const isSVG = url.split('.').pop() === 'svg';
    const { originalUrl = '' } = headers.request;

    return Promise.resolve(isSVG && originalUrl.startsWith('file://') && originalUrl.endsWith('?type=svg'));
  }

  async intercept(url) {
    const svg = await fs.promises.readFile(url, 'utf-8');
    const body = `const svg = '${svg.replace(/\n/g, '')}';\nexport default svg;`;

    return {
      body,
      contentType: this.contentType
    };
  }
}

const greenwoodPluginImportSvg = (options = {}) => {
  return [{
    type: 'resource',
    name: 'plugin-import-svg:resource',
    provider: (compilation) => new ImportSvgResource(compilation, options)
  }];
};

export { greenwoodPluginImportSvg };