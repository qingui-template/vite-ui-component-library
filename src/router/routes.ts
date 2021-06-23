// @ts-ignore
import type { RouteRecordRaw } from 'vue-router'

// @ts-ignore
import { h } from 'vue'

import Markdown from '../docs/utils/Markdown.vue'
const md = (string: any) => h(Markdown, { content: string, key: string })

// @ts-ignore
import changelog from '../docs/changelog.md'
// @ts-ignore
import install from '../docs/install.md'
// @ts-ignore
import intro from '../docs/intro.md'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../views/home/index.vue') },
  {
    path: '/page',
    component: () => import('../views/page/index.vue'),
    children: [
      { path: '', redirect: '/page/install' },
      {
        path: 'changelog',
        component: md(changelog),
      },
      {
        path: 'intro',
        component: md(intro),
      },
      {
        path: 'install',
        component: md(install),
      },
      {
        path: 'button',
        component: () => import('../docs/button/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/home/index.vue'),
  },
]

export default routes
