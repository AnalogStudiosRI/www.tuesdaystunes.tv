import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginPostCss({
      extendConfig: true
    })
  ]
};