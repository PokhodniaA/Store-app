<template>
  <button
    class="buy animate__animated"
    :class="{
      buy__active: this.bought,
      animate__bounce: this.bounce,
    }"
    @animationend="deleteBounce"
    @click.stop="basketMove"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    item: Object,
    reqToSend: Boolean,
  },
  data() {
    return {
      items: this.$store.state.basket,
      bought: this.item.bought,
      bounce: false,
    };
  },
  computed: {},
  methods: {
    basketMove() {
      if (!this.bought) {
        this.addToBasket();
      } else {
        this.removeFromBasket();
      }
      this.addBounce();
      this.sendBought();
    },
    addToBasket() {
      this.item.bought = this.bought = true;
      this.items.push(this.item);
    },
    removeFromBasket() {
      const indexToDelete = this.items.indexOf(this.item); // оптимизировать покупку, костылей много.  Нужно придумать что сделать с индексом.
      this.item.bought = this.bought = false;
      this.items.splice(indexToDelete, 1);
    },
    sendBought() {
      if (this.reqToSend) {
        this.$emit("sendBought", this.bought);
      }
    },
    addBounce() {
      this.bounce = true;
    },
    deleteBounce() {
      this.bounce = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.buy {
  @include toDoButton;

  &:hover,
  &__active {
    background-color: $mainColor;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
}
</style>