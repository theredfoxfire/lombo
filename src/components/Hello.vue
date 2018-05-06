<template>
  <div>
    <v-list-tile>
      <v-list-tile-avatar>
        <img src="https://randomuser.me/api/portraits/men/85.jpg">
      </v-list-tile-avatar>
      <v-list-tile-content class="welcome--container">
        <v-list-tile-title>Welcome {{ helper().jsUcfirst(this.getProfile.name) }}!</v-list-tile-title>
        <div class="sub-desc">Try cashless payments with us once you have ballance from your change.</div>
      </v-list-tile-content>
    </v-list-tile>
    <v-container fluid grid-list-xs>
      <v-divider></v-divider>
      <v-text-field
        name="search"
        placeholder="Search..."
        hint="Type a keyword"
        append-icon="search"
        type="text"
      ></v-text-field>
    </v-container>
    <v-container fluid grid-list-xs class="favorite">
      <v-icon color="yellow darken-1">grade</v-icon>&nbsp;&nbsp;&nbsp;Your favorite places
      <v-divider></v-divider>
    </v-container>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex
          v-bind="{ [`xs${size}`]: true }"
          v-for="i in 6"
          :key="i"
        >
          <v-card class="card-menus">
            <v-card-media
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw"
              height="170"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline background white--text">Market {{ i }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { USER_REQUEST } from '../store/actions/user';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      windowWidth: 0,
      size: 6,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'token', 'getProfile']),
  },
  watch: {
    windowWidth(newWidth) {
      this.getScreenSize(newWidth);
    },
  },
  methods: {
    getUserData() {
      const payload = {
        token: this.token,
      };
      if (JSON.stringify(this.getProfile) === JSON.stringify({})) {
        this.$store.dispatch(USER_REQUEST, payload);
      }
    },
    getScreenSize(width) {
      if (Number(width) >= 900) {
        this.size = 2;
      } else if (Number(width) < 900 && Number(width) > 500) {
        this.size = 3;
      } else {
        this.size = 6;
      }
    },
  },
  beforeMount() {
    this.getScreenSize(window.innerWidth);
  },
  mounted() {
    this.getUserData();
    const that = this;
    this.$nextTick(() => {
      /* eslint-disable */
      window.addEventListener('resize', (e) => {
        that.windowWidth = window.innerWidth;
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome--container {
  height: 120px;
}
.sub-desc {
  font-size: 14px;
}
.divider {
  margin-top: 20px;
}
.search--container {
  background-color: #E0F2F1;
}
.background {
  background-color: rgba(0, 150, 136, 0.5);
}
.card-menus {
  margin-bottom: 5px;
}
.favorite {
  text-align: left;
  padding-left: 5px;
  margin-bottom: 20px;
}
</style>
