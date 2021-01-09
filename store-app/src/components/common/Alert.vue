<template>
  <transition name="alertBlock" appear>
    <div class="alert">
      <div class="animate__animated alert__text animate__bounce">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 50px;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);

  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background: #fff;
  font-weight: 700;
  color: $errorColor;
}

// Animation

.alertBlock-enter-active,
.alertBlock-leave-active {
  transition: 0.5s;
}

.alertBlock-enter,
.alertBlock-leave-to {
  transform: translate(-50%, -100%);
  opacity: 0;
}
</style>

