<template>
  <transition-group tag="div" class="basket__items" name="basket" appear>
    <StoreItem v-for="item in data" :key="item.id" :item="item" />
  </transition-group>
</template>

<script>
import StoreItem from "@/components/StoreItem.vue";

export default {
  components: {
    StoreItem,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.data = this.$store.state.basket;
  },
};
</script>

<style lang="scss" scoped>
.basket {
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px auto 0;
    width: 100%;
  }
}

// Animation

.basket-leave-active {
  transition: 0.4s;
}

.basket-leave-to {
  opacity: 0;
}
</style>