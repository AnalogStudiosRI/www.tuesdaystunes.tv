import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginImportSvg } from './plugin-import-svg.js';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginPostCss({
      extendConfig: true
    }),
    greenwoodPluginImportSvg()
  ]
};