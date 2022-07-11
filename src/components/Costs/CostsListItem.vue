<template>
  <div class="item">
    <div>{{ obj.amount }}</div>
    <div>{{ obj.itemId }}</div>
    <div>{{ obj.description }}</div>
    <div>{{ obj.date }}</div>
  </div>
</template>

<script setup lang="ts">
import { FormObj } from "@/model/costs";
import { defineProps } from "vue";

const props = defineProps<{ obj: FormObj }>();
</script>

<style scoped></style>
