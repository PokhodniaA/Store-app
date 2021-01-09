<template>
  <div class="main">
    <div class="container">
      <Header />
      <transition name="main-content" appear>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.main-content-enter-active {
  transition: 0.5s;
}
.main-content-leave-active {
  transition: 0.3s;
  position: absolute;
  z-index: -100;
}

.main-content-enter {
  transform: translateX(100%);
}
.main-content-leave-to {
  transform: scale(0.7);
  opacity: 0;
}
</style>