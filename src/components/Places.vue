<template>
  <div>
    <v-list-tile>
      <v-list-tile-avatar>
        <img src="https://randomuser.me/api/portraits/men/85.jpg">
      </v-list-tile-avatar>
      <v-list-tile-content class="welcome--container">
        <div class="sub-desc">{{ helper().jsUcfirst(this.getProfile.name) }} search products or stores near you.</div>
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
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile avatar v-else :key="index" @click="">
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content style="font-size: 11px;">
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title style="margin-top: -10px;">
                    <span class='text--primary' v-for=" i in Number(item.stars)">
                      <v-icon color="yellow darken-1" key="{{ i }}" style="font-size: 10px;">grade</v-icon>
                    </span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
                <div
                  style="margin-left: auto; margin-right: 0; margin-top: -10px; font-size: 11px; display: flex; flex-direction: column;">
                  <div><v-icon style="font-size: 11px;">place</v-icon>20m</div>
                  <router-link to="/map">View in map</router-link>
                </div>
              </v-list-tile>
              <div style="font-size: 11px; text-align: justify; padding-left: 15px; padding-right: 15px;">
                The St. Paul Meat shop is a neighborhood butcher shop and deli on Grand Avenue.
              </div>
              <div v-if="item.stars > 3" style="font-size: 11px; display: flex; flex-direction: row; background-color: #F5F5F5; width: 70%; margin: 0 auto; margin-top: 20px;">
                Your ballance here: $12 USD <v-btn round color="secondary" small dark>Use it</v-btn>
              </div>
              <div v-else style="font-size: 11px; display: flex; flex-direction: row; background-color: #F5F5F5; width: 70%; margin: 0 auto; margin-top: 20px;">
                You don't have check in here <v-btn round color="warning" small dark>Check in</v-btn>
              </div>
              <v-divider :key="index + 'div'"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { USER_REQUEST } from '../store/actions/user';

export default {
  name: 'places',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      items: [
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw', title: 'BBQ Shop', subtitle: 'Ali Connors', stars: '3' },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw', title: 'Meat House Supermarket', subtitle: 'to Alex', stars: '4' },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw', title: 'Urbano Supermarket', subtitle: 'Sandra Adams', stars: '5' },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw', title: 'BBQ Shop', subtitle: 'Trevor Hansen', stars: '4' },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-1Q7xsjtKP_oCzTX-uVq_c4WJS8U_9-FS18ta_fx7_8etjFvw', title: 'Urbano Supermarket', subtitle: 'Britta Holt', stars: '3' },
      ],
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
