<template>
  <div class="storeItem" @click="showProductPage">
    <section class="storeItem__img">
      <img :src="item.img" />
    </section>
    <section class="storeItem__title">{{ item.brandName }}</section>
    <section class="storeItem__subTitle">{{ item.modelName }}</section>
    <section class="storeItem__price">{{ price }}</section>

    <additionalIcon :bestSale="item.bestSale" :discount="item.discount" />
    <buyComp class="storeItem__buy" :item="item"
      ><img src="@/assets/img/icons/shopping_bag-black-18dp.svg"
    /></buyComp>
  </div>
</template>

<script>
import additionalIcon from "./AdditionalIcon";
import buyComp from "./BuyComp.vue";
import priceMixin from "@/mixins/price.js";

export default {
  props: {
    item: Object,
  },
  methods: {
    showProductPage() {
      this.$router.push({ name: "Product", params: { data: this.item } });
    },
  },
  components: {
    additionalIcon,
    buyComp,
  },
  mixins: [priceMixin],
};
</script>

<style scoped lang="scss">
.storeItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  min-width: 23%;
  margin: 5px;
  padding: 10px;
  cursor: pointer;

  border: 1px solid $secondLight;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    background: $backgroundLight;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: scale(1.05);
  }

  &__img {
    width: 200px;
    height: 150px;
    overflow: hidden;

    & img {
      width: 200px;
      border-radius: 10px;
    }
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
  }

  &__buy {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}

@media (max-width: 750px) {
  .storeItem {
    min-width: 47%;
    &__buy {
      position: static;
      height: 30px;
      width: 50px;
    }
  }
}

@media (max-width: 400px) {
  .storeItem {
    min-width: 100%;
  }
}
</style>
