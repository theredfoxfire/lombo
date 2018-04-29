<template>
  <!-- <div id="app"> -->
    <v-app>
      <v-navigation-drawer
       fixed
       clipped
       app
       v-model="naviBar"
      >
      <v-list dense class="pt-0">

        <!--  SEND -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="teal">send</v-icon>
          </v-list-tile-action>
          <router-link to="/hello">
          <v-list-tile-content>
            <v-list-tile-title>Hello</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>

        <!--  Wallet list -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="teal">credit_card</v-icon>
          </v-list-tile-action>
          <router-link to="/greeting">
          <v-list-tile-content>
            <v-list-tile-title>Greeting</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
    </v-list>
   </v-navigation-drawer>

     <v-toolbar
      color="teal"
      clipped-left
      fixed
      app
     >
       <v-toolbar-side-icon v-if="isAuthenticated" color="white--text" @click.stop="naviBar = !naviBar"></v-toolbar-side-icon>
       <v-toolbar-title class="white--text">LomboApp</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn icon><v-icon color="white">search</v-icon></v-btn>
     </v-toolbar>
     <v-content>
      <!-- <v-container fluid fill-height> -->
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
      <!-- </v-container> -->
     </v-content>
     <v-card flat v-if="isAuthenticated">
       <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
         <v-btn flat color="teal" value="home">
           <span>Home</span>
           <v-icon>home</v-icon>
         </v-btn>
         <v-btn flat color="teal" value="store">
           <span>Store</span>
           <v-icon>place</v-icon>
         </v-btn>
         <v-btn flat color="teal" value="history">
           <span>Recent</span>
           <v-icon>history</v-icon>
         </v-btn>
         <v-btn flat color="teal" value="settings">
           <span>Settings</span>
           <v-icon>settings</v-icon>
         </v-btn>
       </v-bottom-nav>
     </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      links: ['Home', 'About Us', 'Services'],
      naviBar: false,
      e1: 'home',
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'authStatus']),
  },
  mounted: () => {
  },
  destroyed: () => {
  },
  methods: {
    tapFooter(link) {
      switch (link) {
        case 'Home':
          this.$router.push({ path: '/' });
          break;
        case 'About Us':
          this.$router.push({ path: '/' });
          break;
        case 'Services':
          this.$router.push({ path: '/' });
          break;
        default:
          this.$router.push({ path: '/' });
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.w-break {
  word-break: break-all;
}
.font-color-shamrock { color: #2FCDB4; }
</style>
