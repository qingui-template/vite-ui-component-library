<template>
  <div class="features">
    <div class="features-item">
      <img
        class="features-item__pic"
        src="../../../assets/svg/icon-fuyong.svg"
        alt=""
      />
      <h2 class="features-item__title">可复用性</h2>
      <p class="features-item__desc">
        完整的组件控件，方便设计师和前端反复使用，提高工作效率，减少开发成本，
        加快迭代速度
      </p>
    </div>
    <div class="features-item">
      <img
        class="features-item__pic"
        src="../../../assets/svg/icon-tongyi.svg"
        alt=""
      />
      <h2 class="features-item__title">统一性</h2>
      <p class="features-item__desc">
        统一的设计规范、组件化的形式，可避免设计师自我创造组件控件，
        保持团队产品体验的统一性，减少各方的沟通成本
      </p>
    </div>
    <div class="features-item">
      <img
        class="features-item__pic"
        src="../../../assets/svg/icon-shengzhang.svg"
        alt=""
      />
      <h2 class="features-item__title">生长性</h2>
      <p class="features-item__desc">
        有更多的时间思考设计和业务背后的逻辑，从而提升设计思维能力，规范的系统性
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "features",
});
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;

  &-item {
    flex: 1 1;
    margin: 0;
    padding-left: 60px;
    text-align: center;

    &:first-of-type {
      padding-left: 0;
    }

    &__pic {
      margin-bottom: 20px;
      width: 66px;
    }

    &__title {
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 1;
      color: #454d64;
    }

    &__desc {
      color: #717484;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
