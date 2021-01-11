import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    basket: [],
  },
  mutations: {
    SIGNIN(state, { login, id }) {
      state.isAuth = true;
      state.login = login;
      state.id = id;
    },
    setData(state, { key, data }) {
      state[key] = data
    }
  },
  actions: {
  },
  modules: {
  }
})
