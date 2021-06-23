<template>
  <div class="home">
    <Banner />
    <Features />
    <div class="content">
      <h2 class="content__title">生态周边</h2>
      <table class="content__table">
        <tr>
          <th>组件</th>
          <th>下载量</th>
          <th>版本</th>
        </tr>
        <tr>
          <td>@qingui/qingui</td>
          <td>
            <img src="https://img.shields.io/npm/dw/@qingui/qingui.svg" alt="" />
          </td>
          <td>
            <img
              src="https://img.shields.io/npm/v/@qingui/qingui.svg?style=flat-square?style=flat-square"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td>@qingui/cli</td>
          <td>
            <img src="https://img.shields.io/npm/dw/@qingui/cli.svg" alt="" />
          </td>
          <td>
            <img
              src="https://img.shields.io/npm/v/@qingui/cli.svg?style=flat-square?style=flat-square"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td>@qingui/var</td>
          <td>
            <img src="https://img.shields.io/npm/dw/@qingui/var.svg" alt="" />
          </td>
          <td>
            <img
              src="https://img.shields.io/npm/v/@qingui/var.svg?style=flat-square?style=flat-square"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="content">
      <h2 class="content__title">兼容版本</h2>
      <p class="content__desc">现代浏览器和 Internet Explorer 11</p>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Banner from './components/banner.vue'
import Features from './components/features.vue'
import Footer from './components/footer.vue'

export default defineComponent({
  name: 'home',
  components: {
    Banner,
    Features,
    Footer,
  },
})
</script>

<style lang="scss" scoped>
.content {
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;

  &__title {
    margin: 42px 0 18px;
    color: #454d64;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.40625;
  }

  &__desc {
    color: #454d64;
    font-size: 15px;
  }

  &__table {
    width: 100%;

    td,
    th {
      padding: 10px 24px;
      color: #666;
      border: 1px solid #ebedf1;
    }

    th {
      background-color: #f9fafb;
    }
  }
}
</style>
