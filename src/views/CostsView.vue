<template>
  <div class="main">
    <CostsHeader />
    <button-component class="header-button">Show</button-component>
    <CostsForm />
    <CostsList />
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

const paymentsLengthTrue = computed(() => store.getters.getPaymentsLength);
</script>

<style>
.main {
  padding: 10px;
  position: relative;
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
