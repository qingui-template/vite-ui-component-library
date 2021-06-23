import type { App } from 'vue'
// @ts-ignore
import Button from './src/button.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
