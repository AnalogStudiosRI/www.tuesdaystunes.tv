/*
 *
 * Enables using JavaScript to import SVG files, using ESM syntax.
 *
 */
import fs from 'fs/promises';
import { ResourceInterface } from '@greenwood/cli/src/lib/resource-interface.js';

class ImportSvgResource extends ResourceInterface {
  constructor(compilation, options) {
    super(compilation, options);
    this.extensions = ['svg'];
    this.contentType = 'text/javascript';
  }

  async shouldIntercept(url) {
    const { pathname, href, searchParams } = url;
    const isSVG = pathname.split('.').pop() === this.extensions[0];

    return isSVG || (href.startsWith('file://') && searchParams.has('type') === this.extensions[0]);
  }

  async intercept(url) {
    const svg = await fs.readFile(url, 'utf-8');
    const body = `const svg = '${svg.replace(/\n/g, '')}';\nexport default svg;`;

    return new Response(body, {
      headers: new Headers({
        'Content-Type': this.contentType
      })
    });
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