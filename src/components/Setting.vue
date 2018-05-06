<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Profile photo</v-list-tile-title>
              <v-list-tile-sub-title>Change your Google+ profile photo</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Show your status</v-list-tile-title>
              <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Hangout notifications</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Video sounds</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="invites"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Invites</v-list-tile-title>
              <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-switch
                v-model="switch1"
              ></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Direct messages</v-list-tile-title>
              <v-list-tile-sub-title>Allow direct messages</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      notifications: false,
      sound: false,
      video: false,
      invites: false,
      switch1: true,
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
