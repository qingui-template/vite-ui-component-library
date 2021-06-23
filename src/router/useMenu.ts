import { reactive } from 'vue'

export const menus = reactive([
  {
    title: '文档',
    children: [
      {
        title: '更新日志',
        path: '/page/changelog',
      },
      {
        title: '介绍',
        path: '/page/intro',
      },
      {
        title: '安装',
        path: '/page/install',
      },
    ],
  },
  {
    title: '组件列表',
    children: [
      {
        title: 'Button 按钮',
        path: '/page/button',
      },
    ],
  },
])
