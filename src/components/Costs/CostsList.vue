<template>
  <div class="field">
    <CostsListItem v-for="item in store" :key="item.itemId" :obj="item" />
  </div>
</template>

<script setup lang="ts">
import CostsListItem from "@/components/Costs/CostsListItem";
import { useStore } from "@/store";
import { computed, onMounted } from "vue";

onMounted(() => console.log(store.value));
const store = computed(() => useStore().getters.getPayments);
</script>

<style scoped>
.field {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
