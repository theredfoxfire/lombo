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
          v-bind="{ [`xs6`]: true }"
          v-for="i in 4"
          :key="i"
        >
          <v-card class="card-menus">
            <v-card-media
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWfOhgfD3VVPgIZUpDZthfYsG0cwgN_heIz_yYPdp4gry4nhLlA"
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
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'token', 'getProfile']),
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
  },
  mounted() {
    this.getUserData();
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
