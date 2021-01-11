<template>
  <button
    class="buy animate__animated"
    :class="{
      buy__active: this.bought,
      animate__bounce: this.bounce,
    }"
    @animationend="deleteBounce"
    @click.stop="addToBasket"
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
      data: this.$store.state.data,
      bought: this.item.bought,
      bounce: false,
    };
  },
  computed: {},
  methods: {
    addToBasket() {
      if (!this.bought) {
        this.item.bought = this.bought = true;
        this.items.push(this.item);
      } else {
        const indexToDelete = this.items.indexOf(this.item); // оптимизировать покупку, костылей много
        this.item.bought = this.bought = false;
        this.items.splice(indexToDelete, 1);
      }
      this.addBounce();
      this.sendBought();
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