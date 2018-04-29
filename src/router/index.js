import Vue from 'vue';
import Router from 'vue-router';
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';
// import colors from 'vuetify/es5/util/colors';
import Hello from '@/components/Hello';
import Greeting from '@/components/Greeting';
import Login from '@/components/Login';

Vue.use(Router);

Vue.use(Vuetify, {
  theme: {
    primary: '#009688',
    secondary: '#80CBC4',
    accent: '#009688',
    error: '#EC407A',
    warning: '#FFB74D',
    info: '#4FC3F7',
    success: '#66BB6A',
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent', 'error', 'warning', 'info', 'success'],
  },
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/greeting',
      name: 'Greeting',
      component: Greeting,
    },
  ],
});
