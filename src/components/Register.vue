<template>
  <v-layout row wrap style="form-container">
    <v-alert outline color="error" v-if="errorMessage" icon="warning" :value="true">
      Register failed.
    </v-alert>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Register</h1>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Full name"
          v-model="name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Cell phone"
          v-model="phone"
          :rules="phoneRules"
          required
          class=".cell-phone"
        ></v-text-field>
        <v-text-field
          label="Enter your password"
          v-model="password"
          :rules="passwordRules"
          :append-icon="e2 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e2 = !e2)"
          :type="e2 ? 'password' : 'text'"
          required
        ></v-text-field>
        <v-text-field
          label="Confirm your password"
          v-model="c_password"
          :rules="cpasswordRules"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          required
        ></v-text-field>

        <v-btn
          @click="submit"
          :disabled="!valid"
          color="teal white--text"
        >
          Register
        </v-btn>
        <v-btn @click="signin" outline color="teal">Sign in</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { USER_REGISTER } from '../store/actions/user';

  export default {
    data: () => ({
      valid: true,
      e1: true,
      e2: true,
      password: '',
      passwordRules: [
        (v) => {
          this.password = v;
          return !!v || 'Password is required';
        },
      ],
      c_password: '',
      cpasswordRules: [
        v => !!v || 'Password confirm is required',
        v => v === this.password || 'Password confirm not equals with your password',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Full name is required',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required',
        v => !isNaN(v) || 'Phone number is not valid',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
    }),
    computed: {
      ...mapGetters(['isAuthenticated', 'authStatus', 'errorMessage']),
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          const payload = {
            router: this.$router,
            email: this.email,
            password: this.password,
            phone: this.phone,
            c_password: this.c_password,
            name: this.name,
          };
          this.$store.dispatch(USER_REGISTER, payload);
        }
      },
      signin() {
        this.$router.push({ path: '/' });
      },
    },
  };
</script>
<style>
.form-container {
  margin-top: 25%;
}
</style>
