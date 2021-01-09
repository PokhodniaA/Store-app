<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~animate.css";

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
}

.container {
  max-width: 1200px;
  min-height: 500px;
  margin: auto;
}
</style>
