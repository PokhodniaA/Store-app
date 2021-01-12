<template>
  <div class="product">
    <div class="product__container">
      <section class="product__img">
        <img :src="item.img" />
      </section>

      <section class="product__description">
        <div class="product__title">{{ item.brandName }}</div>
        <div class="product__subTitle">{{ item.modelName }}</div>
        <div class="product__price">{{ price }}</div>
        <buyComp
          class="product__buy"
          :item="item"
          :reqToSend="true"
          @sendBought="showBuyLabel"
          >{{ isBought }}</buyComp
        >
      </section>
    </div>
  </div>
</template>

<script>
import priceMixin from "@/mixins/price.js";
import buyComp from "@/components/BuyComp.vue";

export default {
  data() {
    return {
      item: {},
      bought: null,
    };
  },
  methods: {
    showBuyLabel(bought) {
      this.bought = bought;
    },
  },
  computed: {
    isBought() {
      return this.bought || this.item.bought ? "В корзине" : "Купить";
    },
  },
  created() {
    this.item = this.$route.params.data;
  },
  components: {
    buyComp,
  },
  mixins: [priceMixin],
};
</script>

<style lang="scss" scoped>
.product {
  background: #ffffff;
  &__container {
    width: 100%;
    margin-top: 20px;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;

    border-bottom: 1px solid $secondLight;
  }

  &__img {
    width: 50%;
    overflow: hidden;

    & img {
      width: 100%;
      border-radius: 5px;
    }
  }

  &__description {
    list-style: none;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 1.2rem;
  }

  &__subTitle {
    font-weight: 500;
  }

  &__buy {
    @include main-button;
    min-width: 30%;
    transition: transform 0.2s;

    margin-top: 10px;
  }
}

@media (max-width: 750px) {
  .product {
    &__container {
      flex-direction: column;
    }

    &__img {
      width: 100%;
    }

    &__description {
      width: 100%;
    }
  }
}
</style>