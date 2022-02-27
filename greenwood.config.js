import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';

export default {
  plugins: [
    greenwoodPluginRendererLit({
      prerender: true
    })
  ]
}