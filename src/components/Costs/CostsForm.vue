<template>
  <form class="form" @submit.prevent="addPayment">
    <input
      class="form__input parallaxed"
      type="text"
      v-model="formObj.description"
      placeholder="Payment description"
    />
    <input
      class="form__input parallaxed"
      type="text"
      v-model.number="formObj.amount"
      placeholder="Payment amount"
    />
    <input
      class="form__input parallaxed"
      type="date"
      v-model="formObj.date"
      placeholder="Payment date"
    />
    <button-component>ADD</button-component>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent";
import { FormObj } from "@/model/costs";
import { reactive } from "vue";
import { addToStore } from "@/components/Costs/api/addPayment";
import { useStore } from "@/store";

const store = useStore();

const addPayment = () => {
  formObj.itemId = store.getters.getPayments.length + 1;
  store.commit("setPayment", formObj);
};

const formObj = reactive<FormObj>({
  description: "",
  amount: 0,
  date: "",
  itemId: 0,
});
</script>

<style lang="scss" scoped>
.form {
  max-width: 50%;
  background-color: #fff;
  padding: 15px;
  &__input {
    margin-bottom: 5px;
    display: inline-block;
    height: 30px;
    width: 100%;
  }
}
</style>
