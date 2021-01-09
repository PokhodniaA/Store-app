<template>
  <div class="sort">
    <button class="sort__button" @click="isSortItems">{{ ascendOrNot }}</button>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      sort: {},
    };
  },
  methods: {
    isSortItems() {
      if (!this.sort.sorted) {
        this.ascendSort();
        this.sort.sorted = true;
      } else {
        this.sortItems();
      }
      console.log("isSort");
      this.$store.commit("setData", { key: "sort", data: this.sort });
    },
    sortItems() {
      if (!this.sort.isAscend) {
        this.ascendSort();
      } else {
        this.descendSort();
      }
    },
    descendSort() {
      this.sort.isAscend = false;
      this.items.sort((a, b) => {
        return b.price - a.price;
      });
    },
    ascendSort() {
      this.sort.isAscend = true;
      this.items.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
  computed: {
    ascendOrNot() {
      return this.sort.isAscend
        ? "Сортировать по убыванию"
        : "Сортировать по возростанию";
    },
  },
  created() {
    this.sort = this.$store.state.sort || { sorted: false, isAscend: false };
  },
};
</script>

<style lang="scss" scoped>
.sort {
  width: 100%;
  display: flex;
  align-self: start;
  border-bottom: 1px solid $secondLight;

  &__button {
    margin: 10px 0;
    padding: 5px 10px;
    min-width: 10%;

    border: 1px solid $secondLight;
    border-radius: 5px;
    outline: none;
    transition: 0.2s;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      background: $backgroundLight;
      cursor: pointer;
    }
  }
}
</style>