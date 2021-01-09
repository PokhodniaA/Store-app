import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Authorization from '@/views/Authorization.vue';
import Main from '@/views/Main.vue';
import Store from '@/views/Store.vue';
import Welcome from '@/views/Welcome.vue';
import Basket from '@/views/Basket.vue';
import Product from '@/views/Product.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/store',
        name: 'Store',
        component: Store
      },
      {
        path: '/basket',
        name: 'Basket',
        component: Basket
      },
      {
        path: '/product',
        name: 'Product',
        component: Product,
      },
    ]
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: Authorization,
    meta: {
      access: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(({ meta }, from, next) => {
  const { isAuth } = store.state,
    acces = meta.access || false;

  if (!isAuth && !acces) {
    next('/auth');
    return
  }
  next();
});

export default router
