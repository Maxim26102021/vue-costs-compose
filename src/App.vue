<template>
  <div>
    <NavigationComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "@/components/Navigation/NavigationComponent.vue";

export default defineComponent({
  setup() {
    const go = "hello";
  },
  components: {
    NavigationComponent,
  },
});
</script>

<style lang="scss"></style>
