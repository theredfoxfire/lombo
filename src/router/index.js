import Vue from 'vue';
import Router from 'vue-router';
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Hello from '@/components/Hello';
import Greeting from '@/components/Greeting';

Vue.use(Router);
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: colors.teal.lighten5, // #FFCDD2
    accent: colors.teal.lighten4,
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
  },
});
export default new Router({
  routes: [
    {
      path: '/',
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
