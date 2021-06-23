<template>
  <GlobalHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GlobalHeader from "./views/components/global-header.vue";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
  },
});
</script>
