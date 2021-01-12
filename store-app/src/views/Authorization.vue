<template>
  <div class="authorization">
    <div class="authorization__logo">
      Store-<span class="authorization__app">app</span>
    </div>

    <transition name="auth-slide" appear>
      <Auth
        @letShowModal="showHideModal"
        @SignIn="loginInStore"
        class="authorization__auth"
      />
    </transition>

    <Modal v-if="showModal" class="modal" @close="showHideModal">
      <template v-slot:header>
        <span>Регистрация</span>
      </template>

      <template v-slot:content>
        <form class="modal__content">
          <div class="modal__field">
            <label>Логин:</label>
            <input type="text" v-model="userData.login" />
          </div>

          <div class="modal__field">
            <label>Пароль:</label>
            <input type="password" v-model="userData.password" />
          </div>

          <div class="modal__field">
            <label>E-mail:</label>
            <input type="email" v-model="userData.email" />
          </div>
        </form>
      </template>

      <template v-slot:footer>
        <button
          class="pure-material-button-contained"
          @click="registrationUser"
        >
          Зарегестрироваться
        </button>
      </template>
    </Modal>

    <Alert v-if="showAlert">{{ errorText }}</Alert>
  </div>
</template>

<script>
import Auth from "@/components/AuthorizationComp.vue";
import Modal from "@/components/common/Modal.vue";
import modalMixins from "@/mixins/modal.js";
import Alert from "@/components/common/Alert.vue";
import alertMixins from "@/mixins/alert.js";
import authRequests from "@/mixins/authRequests.js";

export default {
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    loginInStore(userData) {
      if (userData.login && userData.password) {
        this.userData = userData;
        this.authorizationUserRequest();
      } else {
        this.newError("Пожалуйста, заполните все поля!");
      }
    },
    registrationUser() {
      if (
        this.userData.login &&
        this.userData.password &&
        this.userData.email
      ) {
        this.registrationUserRequest();
      } else {
        this.newError("Пожалуйста, заполните все поля!");
      }
    },
  },
  components: {
    Auth,
    Modal,
    Alert,
  },
  mixins: [modalMixins, alertMixins, authRequests],
};
</script>

<style lang="scss" scoped>
.authorization {
  &__logo {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    margin-top: 20px;
  }

  &__auth {
    margin: 50vh auto 0;
    transform: translateY(-50%);
  }

  &__app {
    font-weight: 500;
    color: $mainColor;
  }
}

.modal {
  &__content {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__field {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
  }

  &__field > label {
    padding: 5px;
    flex: 1;
  }

  &__field > input {
    border-radius: 3px;
    border: 1px solid $secondLight;
    flex: 2;

    &:focus {
      outline: 0;
    }
  }

  & button {
    @include main-button;
    min-width: 35%;
  }
}

@media (max-height: 400px) {
  .authorization {
    &__logo {
      display: none;
    }

    &__auth {
      margin: 0 auto;
      transform: none;
    }
  }
}

// Animation

.auth-slide-enter-active,
.auth-slide-leave-active {
  transition: 0.5s;
}

.auth-slide-enter,
.auth-slide-leave-to {
  transform: translate(100%, -50%);
  opacity: 0;
}
</style>