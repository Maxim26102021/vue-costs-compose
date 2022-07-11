<template>
  <button @send-action="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["send-action"]);
</script>

<style scoped></style>
