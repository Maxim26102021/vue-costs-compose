<template>
  <div>
    <CostsListItem v-for="item in store" :key="item.itemId" :obj="item" />
  </div>
</template>

<script setup lang="ts">
import CostsListItem from "@/components/Costs/CostsListItem";
import { useStore } from "@/store";
import { computed } from "vue";

const store = computed(() => useStore().getters.getPayments);
</script>

<style scoped></style>
