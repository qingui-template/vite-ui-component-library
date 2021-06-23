import type { App } from 'vue'

import Button from './button'

const plugins = [Button]

const install = (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin as any)
  })
}

export default {
  install,
}
