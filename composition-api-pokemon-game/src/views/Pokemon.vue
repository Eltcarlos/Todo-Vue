<template>
  <h1>Pokemon View</h1>
</template>

<script>
import { watch } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    watch(
      () => route.params.id,
      (value, prev) => {}
    );
    onBeforeRouteLeave();
  },
};
</script>

<style></style>
