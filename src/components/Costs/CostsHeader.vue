<template>
  <div class="header">{{ text }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("My personal costs");
</script>

<style scoped>
.header {
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 10px;
}
</style>
