<template>
  <header class="header">
    <nav class="header__nav">
      <div>Store-<span class="header__app">app</span></div>

      <button class="header__home header__icons" @click="toStore">
        <img src="@/assets/img/icons/home-black.svg" class="header__img" />
      </button>

      <button class="header__icons" @click="toBasket">
        <img src="@/assets/img/icons/shopping-cart.svg" class="header__img" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toBasket() {
      this.$router.push("/basket");
    },
    toStore() {
      this.$router.push("/store");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $secondLight;
  position: relative;
  &__nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 10px;
  }

  &__app {
    font-weight: 500;
    color: $mainColor;
  }

  &__icons {
    @include toDoButton;

    &:hover {
      cursor: pointer;
      background-color: $backgroundLight;
      transform: scale(1.2);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }

  &__home {
    position: absolute;
    left: 100px;
  }

  &__img {
    min-width: 20px;
    min-height: 20px;
  }
}
</style>