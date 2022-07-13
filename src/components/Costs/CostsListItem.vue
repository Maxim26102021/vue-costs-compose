<template>
  <div class="wrapper" ref="item">
    <div class="item">
      <div class="item__id parallaxed">Order: {{ props.order + 1 }}</div>
      <div class="item__amount parallaxed">Amount: {{ props.obj.amount }}</div>
      <div class="item__descr parallaxed">
        Description: {{ props.obj.description }}
      </div>
      <div class="item__date parallaxed">Date: {{ props.obj.date }}</div>
    </div>
    <button class="btn-delete" @click="deleteItem(props.order)">del</button>
  </div>
</template>

<script setup lang="ts">
import { FormObj } from "@/model/costs";
import { defineProps, ref, Ref, PropType } from "vue";
import { parallaxed, unParallax } from "@/components/Costs/api/parallaxed";
import { deleteAnimation } from "@/components/Costs/api/deletingItem";
import { useStore } from "@/store";

const props = defineProps({
  obj: {
    type: Object as PropType<FormObj>,
    required: true,
  },
  order: Number,
});

const item: Ref<HTMLDivElement> | Ref<null> = ref(null);

// const parallax = (e: MouseEvent) => parallaxed(item.value, e);
// const unPar = () => unParallax(item);

function deleteItem(ind: number) {
  const store = useStore();
  store.commit("deleteItemFromList", ind);
}
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid rgba(169, 169, 169, 0.378);
  transition: 2s;
  border-radius: 5px;
  min-height: 100px;
  min-width: 140px;
  margin-bottom: 5px;
  transition: 0.5s;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #fff;
  }
}
.btn-delete {
  height: 20%;
  padding: 3px;
  border: none;
  width: 50px;
  background-color: rgba(128, 128, 128, 0.207);
  &:hover {
    background-color: rgb(255, 120, 120);
  }
}

.animation {
  animation: deleting 1s;
}
</style>
