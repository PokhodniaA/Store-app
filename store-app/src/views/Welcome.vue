<template>
  <div class="greeting__container">
    <h1 class="greeting">Добро Пожаловать, {{ getName }}!</h1>
  </div>
</template>

<script>
export default {
  computed: {
    getName() {
      return this.$store.state.login;
    },
  },
  mounted() {
    setTimeout(() => this.$router.push("/store"), 1500);
  },
};
</script>

<style lang="scss" scoped>
.greeting__container {
  width: 100%;
}
.greeting {
  font-size: 4rem;
  margin: 40vh auto;
  transform: translateY(-50%);
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>