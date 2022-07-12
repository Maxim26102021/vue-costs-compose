<template>
  <div class="item sc" ref="item" @mousemove="parallax" @mouseleave="unPar">
    <div class="item__id parallaxed">{{ obj.itemId }}</div>
    <div class="item__amount parallaxed">{{ obj.amount }}</div>
    <div class="item__descr parallaxed">{{ obj.description }}</div>
    <div class="item__date parallaxed">{{ obj.date }}</div>
  </div>
</template>

<script setup lang="ts">
import { FormObj } from "@/model/costs";
import { defineProps, ref, Ref } from "vue";
import { parallaxed, unParallax } from "@/components/Costs/api/parallaxed";

const props = defineProps<{ obj: FormObj }>();
console.log(props);
const item: Ref<HTMLDivElement> | Ref<null> = ref(null);

const parallax = (e: MouseEvent) => parallaxed(item.value, e);
const unPar = () => unParallax(item);
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid black;
  border-radius: 5px;
  width: 60vw;
  min-height: 100px;
  margin-bottom: 5px;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
  }
}
</style>
