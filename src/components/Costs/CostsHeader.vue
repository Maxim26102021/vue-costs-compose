<template>
  <div>{{ htext }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  htext?: string;
}

const props = defineProps<Props>();
</script>
