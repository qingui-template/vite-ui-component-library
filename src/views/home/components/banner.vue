<template>
  <div class="banner">
    <h1 class="banner__title">QingUi</h1>
    <p class="banner__desc">
      一套针对UI设计、产品设计和前端开发准备的基于 Vue 3.0
      的桌面端组件库，以保证交互视觉体验的统一性和合理性
    </p>
    <router-link class="banner__btn" to="/page">快速开始 → </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "name",
});
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 370px;
  background: #1890ff url("../../../assets/banner.png") no-repeat;
  background-size: 500px;
  background-position: 90% -10px;

  &__title {
    margin: 0 0 16px;
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    color: #fff;
  }

  &__desc {
    color: #fff;
    margin: 16px 0;
  }

  &__btn {
    margin-top: 16px;
    padding: 0 32px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background: #4569d4;
    font-size: 16px;
    border: 1px solid #4569d4;
    border-radius: 22px;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
