import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import People from './components/People.vue';
import Ultimate from './components/Ultimate.vue';
import Ck from './components/Ck.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/people',
          name: 'people',
          component: People,
        },
        {
          path: '/ultimate',
          name: 'ultimate',
          component: Ultimate,
        },
        {
          path: '',
          name: 'ck',
          component: Ck,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
    {
      path: '/training',
      name: 'training',
      component: () => import(/* webpackChunkName: "about" */ './views/Training.vue'),
    },
  ],
});
