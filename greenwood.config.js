import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodApiRoutesPlugin } from './api-routes-plugin.js';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginPostCss({
      extendConfig: true
    }),
    greenwoodApiRoutesPlugin()
  ]
};