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
    <div class="btn-group">
      <button-component>ADD</button-component>
      <button-component @send-action="$emit('send-action')"
        >CLOSE</button-component
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent";
import { FormObj } from "@/model/costs";
import { ref } from "vue";
import { addToStore } from "@/components/Costs/api/addPayment";

const addPayment = (): void => {
  addToStore(formObj.value);
};

const formObj = ref<FormObj>({
  description: "",
  amount: 0,
  date: "",
});
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  max-width: 500px;
  background-color: #fff;
  padding: 15px;
  margin-top: 10px;
  position: sticky;
  top: 20px;
  max-height: 200px;
  &__input {
    margin-bottom: 5px;
    display: inline-block;
    height: 30px;
    width: 100%;
    padding-left: 10px;
    outline: none;
    border: 1px solid rgba(169, 167, 167, 0.271);
    &::placeholder {
      text-transform: uppercase;
      opacity: 0.5;
    }
  }
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
</style>
