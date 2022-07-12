<template>
  <CostsHeader :htext="text" />
  <CostsForm />
  <CostsList />
  <CostsPag />
</template>

<script setup lang="ts">
import CostsHeader from "@/components/Costs/CostsHeader";
import CostsForm from "@/components/Costs/CostsForm";
import CostsList from "@/components/Costs/CostsList";
import CostsPag from "@/components/Costs/CostsPag";
import { ref } from "vue";

const text = ref("My personal costs");
</script>
