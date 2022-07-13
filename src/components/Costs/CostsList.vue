<template>
  <div class="field">
    <transition-group name="list" tag="div" class="item">
      <CostsListItem
        v-for="(item, i) in items"
        :key="item.itemId"
        :obj="item"
        :order="i"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import CostsListItem from "@/components/Costs/CostsListItem";
import { useStore } from "@/store";
import { computed } from "vue";
import { FormObj } from "@/model/costs";
import { ComputedRef } from "vue";

const store = useStore();

const items: ComputedRef<Array<FormObj>> = computed(
  (): Array<FormObj> => store.getters.getPayments
);
</script>

<style scoped>
.field {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 50%;
  position: relative;
  justify-self: flex-end;
}
.item {
  min-width: 100px;
  width: 100%;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(90px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
}
.list-leave-active {
  position: absolute;
}
</style>
