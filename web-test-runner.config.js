import { defaultReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';
import path from 'path';

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