import { defaultReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';
import { greenwoodPluginImportRaw } from "@greenwood/plugin-import-raw";
import { readAndMergeConfig } from "@greenwood/cli/src/lifecycles/config.js";
import { initContext } from "@greenwood/cli/src/lifecycles/context.js";
import fs from 'fs/promises';
import path from 'path';

// bootstrap custom plugin transforms from Greenwood
const config = await readAndMergeConfig();
const context = await initContext({ config });
const compilation = { context, config };
const rawResource = greenwoodPluginImportRaw()[0].provider(compilation);

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
    name: "import-raw",
    async transform(context) {
      const { url } = context.request;

      if (url.endsWith("?type=raw")) {
        const contents = await fs.readFile(new URL(`.${url}`, import.meta.url), "utf-8");
        const response = await rawResource.intercept(null, null, new Response(contents));
        const body = await response.text();

        return {
          body,
          headers: { "Content-Type": "application/javascript" },
        };
      }
    },
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