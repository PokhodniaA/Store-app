<template>
  <div class="auth">
    <h2>Авторизация</h2>
    <input
      type="text"
      name="login"
      placeholder="Username"
      v-model="loginData.login"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="loginData.password"
    />
    <button class="mainButton" @click="signIn">Войти</button>

    <div class="auth__registrationText">
      <label
        >Если у Вас нет аккаунта, можете
        <span class="auth__registrationButton" @click="showModal"
          >зарегестрироваться</span
        >!
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {},
    };
  },
  methods: {
    showModal() {
      this.$emit("letShowModal", true);
    },
    signIn() {
      this.$emit("SignIn", this.loginData);
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  width: 50%;
  padding: 15px;

  box-shadow: $ShadowVar1;
  z-index: 10;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid $secondLight;
  border-radius: 10px;

  & input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid $secondLight;
    outline: none;
    transition: 0.2s;
    width: 100%;

    &:focus {
      background: $backgroundLight;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }

  & .mainButton {
    @include main-button;
    min-width: 30%;
  }

  &__registrationText {
    margin-top: 40px;
  }

  &__registrationButton {
    color: $mainColor;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      color: $mainLightColor;
    }
  }
}

@media (max-width: 930px) {
  .auth {
    width: 70%;
  }
}

@media (max-width: 500px) {
  .auth {
    width: 100%;
  }
}
</style>