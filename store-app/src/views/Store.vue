<template>
  <div class="store">
    <SortButton :items="data" />
    <transition-group tag="div" class="store__items" name="items">
      <StoreItem v-for="item in data" :key="item.id" :item="item" />
    </transition-group>

    <Alert v-if="showAlert">{{ errorText }}</Alert>
  </div>
</template>

<script>
import StoreItem from "@/components/StoreItem.vue";
import Alert from "@/components/common/Alert.vue";
import alertMixins from "@/mixins/alert.js";
import SortButton from "@/components/SortButton.vue";

export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    try {
      let data;
      if (this.$store.state.data) {
        data = this.$store.state.data;
      } else {
        data = await (await fetch("http://localhost:3003/store")).json();
        this.$store.commit("setData", {
          key: "data",
          data: data,
        });
      }
      this.data = data;
    } catch {
      this.newError("Невозможно подключиться к серверу!");
    }
  },
  components: {
    StoreItem,
    Alert,
    SortButton,
  },
  mixins: [alertMixins],
};
</script>

<style scoped lang="scss">
.store {
  width: 100%;
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
  }
}

// Animation

.items-move {
  transition: 0.2s ease-in-out;
  opacity: 0.8;
}
</style>