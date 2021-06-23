# 安装

> 注意：<a href="https://gitee.com/qingui/qingui" target="_blank">QingUI</a> 仅支持 Vue3。


## npm 或 yarn
```sh
npm install @qingui/qingui

#or

yarn add @qingui/qingui
```

## 快速上手

### 完整引入
在main.js中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
import QingUi from '@qingui/qingui'
import '@qingui/qingui/qing.css'

const app = createApp(App)
app.use(QingUi)
app.mount('#app')
```

### 按需引入
在main.js中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from '@qingui/qingui'
import '@qingui/qingui/qing.css'

const app = createApp(App)
app.use(Button)
app.mount('#app')
```

<br>
<br>

下一节: [Button 组件](#/page/button)
