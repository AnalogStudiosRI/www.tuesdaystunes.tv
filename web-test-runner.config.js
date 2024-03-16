import { defaultReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';
import fs from 'fs/promises';
import path from 'path';
import { greenwoodPluginImportSvg } from './plugin-import-svg.js';

// create a direct instance of ImportSvgResource
const importSvgResource = greenwoodPluginImportSvg()[0].provider({});

export default {
  files: './src/**/*.spec.js',
  nodeResolve: true,
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    junitReporter({
      outputPath: './reports/test-results.xml'
    })
  ],
  coverage: true,
  coverageConfig: {
    reportDir: './reports'
  },
  plugins: [{
    name: 'import-svg',
    async transform(context) {
      const url = new URL(`.${context.request.url}`, import.meta.url);
      const request = new Request(url, { headers: new Headers(context.headers) });
      const shouldIntercept = await importSvgResource.shouldIntercept(url, request);

      if (shouldIntercept) {
        const contents = await fs.readFile(url);
        const initResponse = new Response(contents, {
          headers: new Headers(context.headers)
        });
        const response = await importSvgResource.intercept(url, request, initResponse.clone());

        return {
          body: await response.text(),
          headers: {
            'Content-Type': response.headers.get('Content-Type')
          }
        };
      }
    }
  }],
  middleware: [
    function rewriteIndex(context, next) {
      const { url } = context.request;

      if (url.indexOf('/assets') === 0) {
        context.request.url = path.join(process.cwd(), 'src', url);
      }

      return next();
    }
  ]
};