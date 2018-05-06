<template>
  <!-- <div id="app"> -->
    <v-app>
      <v-navigation-drawer
       fixed
       clipped
       app
       v-model="naviBar"
      >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ helper().jsUcfirst(this.getProfile.name) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="teal">power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn flat color="teal" @click="logout" value="logout">
              <span class="margin--icon">Logout</span>
            </v-btn>
          </v-list-tile-content>
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
       <!-- <v-btn icon><v-icon color="white">search</v-icon></v-btn> -->
     </v-toolbar>
     <v-container class="vertical--scroll">
        <div  v-if="requestStatus === 'loading'">
          <v-dialog v-model="loader" persistent fullscreen content-class="loading">
            <v-container fill-height>
              <v-layout row justify-center align-center>
                <v-progress-circular indeterminate :size="70" :width="7" color="teal"></v-progress-circular>
              </v-layout>
            </v-container>
          </v-dialog>
        </div>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      <!-- </v-container> -->
     </v-container>
     <v-bottom-nav
      v-if="isAuthenticated"
      absolute :value="true"
      :active.sync="e1"
      class="fixed-bottom">
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
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { AUTH_LOGOUT } from './store/actions/auth';

export default {
  name: 'app',
  data() {
    return {
      links: ['Home', 'About Us', 'Services'],
      naviBar: false,
      e1: 'home',
      loader: true,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'requestStatus', 'token', 'getProfile']),
  },
  mounted: () => {
  },
  destroyed: () => {
  },
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT, { router: this.$router, token: this.token });
      this.naviBar = false;
    },
    hello() {
      this.$router.push({ path: '/hello' });
      this.naviBar = false;
    },
    greeting() {
      this.$router.push({ path: '/greeting' });
      this.naviBar = false;
    },
  },
};
</script>

<style>
.loading {
  background-color: rgba(208, 204, 204, 0.39);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin--icon {
  margin-top: -8px;
  margin-left: -30px;
}
.w-break {
  word-break: break-all;
}
.font-color-shamrock { color: #2FCDB4; }
.vertical--scroll {
  overflow-y: scroll;
}
.vertical--scroll {
  margin-bottom: 54px;
}
.fixed-bottom {
  position: fixed !important;
}
</style>
