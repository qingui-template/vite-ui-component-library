<template>
  <div class="header">
    <!-- logo -->
    <router-link class="logo" to="/">
      <img class="logo__pic" src="../../assets/logo.svg" alt="qingui" />
      <span class="logo__name">QingUi</span>
    </router-link>

    <!-- menu -->
    <ul class="menu">
      <li class="menu__item">
        <router-link to="/page">组件</router-link>
      </li>
      <li class="menu__item">
        <a href="https://gitee.com/qingui/qingui" target="_blank"
          >Gitee(推荐)</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "name",
});
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  padding: 0 1.5rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    align-items: center;

    &__pic {
      height: 40px;
    }

    &__name {
      color: #080e29;
      font-size: 1.3rem;
      font-weight: 600;
      margin-left: 8px;
    }
  }

  .menu {
    display: flex;

    &__item {
      padding-left: 20px;

      &:first-of-type {
        padding-left: 0;
      }

      a {
        color: #4d5164;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
}
</style>
