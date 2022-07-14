<template>
  <div>
    <NavigationComponent />
    <router-view class="router" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "@/components/Navigation/NavigationComponent.vue";

export default defineComponent({
  components: {
    NavigationComponent,
  },
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(90px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-90px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
