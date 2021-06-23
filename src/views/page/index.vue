<template>
  <div class="layout">
    <aside class="aside_menu">
      <template v-for="(item, index) in menus" :key="index">
        <h2>{{ item.title }}</h2>
        <ul>
          <li v-for="(subItem, subIndex) in item.children" :key="subIndex">
            <router-link :to="subItem.path">{{ subItem.title }}</router-link>
          </li>
        </ul>
      </template>
    </aside>
    <main class="document-main"><router-view /></main>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

import { menus } from '../../router/useMenu'

export default {
  setup(props, ctx) {
    console.log(ctx, '123')
    return { menus }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: calc(100% - 58px);

  .aside_menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 260px;
    height: 900px;
    padding-top: 80px;
    overflow-x: hidden;
    border-right: 1px solid #e8e8e8;

    > h2 {
      margin-top: 6px;
      padding: 10px 12px;
      font-size: 16px;
      font-weight: 700;
    }

    > ul {
      > li {
        position: relative;
        width: 100%;
        font-size: 14px;

        > a {
          display: block;
          padding: 12px 20px;
          cursor: pointer;
          color: #333;

          &:hover {
            background: #f1ffff;
            border-bottom: none;
          }
        }

        .router-link-active {
          background-color: #f1ffff;
          border-right: none;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            border-right: 3px solid #00cec9;
          }
        }
      }
    }
  }

  .document-main {
    flex: 1;
    overflow: auto;
    margin-left: 260px;

    & > div,
    & > article {
      width: 800px;
      margin: 50px auto;
    }
  }
}
</style>
