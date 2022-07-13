<!-- eslint-disable -->
<template>
  <button @click="$emit('send-action')" :class="['btn']" type="submit">
    <span> <slot></slot> </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: false,
    default: "green",
  },
  width: {
    type: String,
    required: false,
    default: "45%",
  },
});
</script>

<style lang="scss" scoped>
$btnHeight: 25px;
$borderRadius: 5px;
@mixin btn {
  margin-top: 10px;
  position: relative;
  min-width: 20px;
  width: 45%;
  height: $btnHeight;
  color: white;
  border: none;
  border-radius: $borderRadius;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes buttonAnimation {
  0% {
    width: 0px;
    border-radius: 0;
  }
  80% {
    width: 0px;
    border-radius: 0;
    opacity: 1;
  }
  90% {
    width: 100%;
    border-radius: $borderRadius;
  }
  100% {
    opacity: 0;
  }
}
span {
  z-index: 4;
}
.btn {
  @include btn;
  width: v-bind("props.width");
  background-color: v-bind("props.color");
  &:before {
    content: "";
    transition: 3s;
    top: 0;
    position: absolute;
    height: $btnHeight;
    background-color: rgba(255, 255, 255, 0.121);
    animation: buttonAnimation 7s infinite;
  }
}
</style>
