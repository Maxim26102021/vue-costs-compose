<template>
  <form @submit.prevent="addPayment">
    <input
      type="text"
      v-model="formObj.description"
      placeholder="Payment description"
    />
    <input
      type="text"
      v-model.number="formObj.amount"
      placeholder="Payment amount"
    />
    <input type="date" v-model="formObj.date" placeholder="Payment date" />
    <button-component @submit.prevent="addPayment">ADD</button-component>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent";
import { FormObj } from "@/model/costs";
import { reactive } from "vue";
import { addToStore } from "@/components/Costs/api/addPayment";

const addPayment = () => addToStore(formObj);

const formObj = reactive<FormObj>({
  description: "",
  amount: 0,
  date: "",
  itemId: 0,
});
</script>

<style scoped></style>
