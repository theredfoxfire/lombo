<template>
  <div>
    <v-list-tile>
      <v-list-tile-avatar>
        <img src="https://randomuser.me/api/portraits/men/85.jpg">
      </v-list-tile-avatar>
      <v-list-tile-content class="welcome--container">
        <v-list-tile-title>Welcome Jeff!</v-list-tile-title>
        <v-list-tile-sub-title class="subtitle">Try cashless payments with us once <br>you have ballance from your change</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-container fluid grid-list-xs>
      <v-text-field
        name="search"
        placeholder="Search..."
        hint="Type a keyword"
        append-icon="search"
        type="text"
      ></v-text-field>
    </v-container>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex
          v-bind="{ [`xs6`]: true }"
          v-for="i in 6"
          :key="i"
        >
          <v-card>
            <v-card-media
              src="https://www.jumblebee.co.uk/site/wp-content/uploads/2014/06/JB-FE-Shop_10.png"
              height="150"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline background white--text">Shop {{ i }}</span>
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
  height: 100px;
}
.subtitle {
  text-overflow:clip;
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
</style>
