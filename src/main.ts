import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import QingUi from '../packages/qing'
import '../packages/theme-chalk/index.scss'

import "./bootstrap";


createApp(App).use(QingUi).use(router).mount("#app");
