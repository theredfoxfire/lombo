<template>
  <div class="hello">
    <h1>{{ msg }}, {{ helper().jsUcfirst(this.getProfile.name) }}</h1>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
