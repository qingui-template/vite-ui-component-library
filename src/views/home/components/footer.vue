<template>
  <div class="footer">Open-source MIT Licensed | © 2021-present</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "name",
});
</script>

<style lang="scss" scoped>
.footer {
  max-width: 960px;
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 0;
  color: #b0b1ba;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #ebedf1;
}
</style>
