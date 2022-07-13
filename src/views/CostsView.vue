<template>
  <div class="app">
    <CostsHeader />
    <button-component @click="show = !show" class="header-button"
      >Show +</button-component
    >
    <button-component :color="'grey'" :width="'200px'" @send-action="clearAll"
      >Clear All</button-component
    >

    <div class="main">
      <CostsForm v-show="show" @send-action="show = !show" />
      <CostsList />
    </div>
  </div>
  <Transition>
    <CostsPag v-if="paymentsLengthTrue" />
  </Transition>
</template>

<script setup lang="ts">
import CostsHeader from "@/components/Costs/CostsHeader";
import CostsForm from "@/components/Costs/CostsForm";
import CostsList from "@/components/Costs/CostsList";
import CostsPag from "@/components/Costs/CostsPag";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { ref, computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const show = ref(false);

const paymentsLengthTrue = computed(() => store.getters.getPaymentsLength);
const clearAll = () => store.commit("clearPayments");
</script>

<style scoped>
.app {
  height: 100vh;
  padding: 10px;
}
.main {
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
}
.header-button {
  max-width: 100px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
