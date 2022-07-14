<template>
  <div class="pagination">
    <a @click="goTo">page</a>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import { useRouter } from "@/router";
import { computed } from "vue";

const itemsOnPage = 5;

const store = useStore();
const router = useRouter();
const paymentsLen = computed(() => store.getters.getPaymentsLength);

const goTo = () => router.push({ path: "/" });
</script>

<style scoped>
.pagination {
  padding: 10px;
  height: 50px;
  width: 100%;
  background-color: #90eb6c;
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  display: flex;
  min-width: 50px;
}
.pagination:hover {
  opacity: 1;
}
</style>
