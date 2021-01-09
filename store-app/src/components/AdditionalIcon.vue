<template>
  <div class="additionalItems">
    <div class="additionalItems__bestSale" v-if="bestSale">ТОП</div>
    <div class="additionalItems__discount" v-if="showDiscount">
      {{ calcDiscount }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bestSale: Boolean,
    discount: Number,
  },
  computed: {
    showDiscount() {
      return this.discount > 0 ? true : false;
    },
    calcDiscount() {
      return `-${this.discount}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.additionalItems {
  position: absolute;
  top: 5px;
  left: 5px;
  color: $mainColor;

  &__bestSale {
    background: $mainColor;
    color: $lightTextColor;
    border-radius: 3px;
    padding: 0 1px;
  }
}
</style>