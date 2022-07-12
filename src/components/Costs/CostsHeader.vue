<template>
  <div class="header">{{ htext }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  htext?: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.header {
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  margin: 10px;
}
</style>
