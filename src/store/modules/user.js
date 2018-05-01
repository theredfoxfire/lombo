import Vue from 'vue';
import axios from 'axios';
import { USER_REQUEST, USER_SUCCESS } from '../actions/user';
import { AUTH_LOGOUT } from '../actions/auth';
import { MAKE_REQUEST, FINISH_REQUEST, ERROR_REQUEST } from '../actions/request';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

const state = { status: '', profile: {} };

const getters = {
  getProfile: () => state.profile,
  isProfileLoaded: () => !!state.profile.name,
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, payload) => {
    dispatch(MAKE_REQUEST);
    axios.post('http://localhost/lombo/public/api/get-details', {},
      { headers: {
        Authorization: `Bearer ${payload.token}`,
      } })
      .then(({ data }) => {
        commit(USER_SUCCESS, data.success);
        dispatch(FINISH_REQUEST);
      })
      .catch((e) => {
        dispatch(ERROR_REQUEST, { error: e.response.data.error });
        dispatch(FINISH_REQUEST);
      });
  },
};

/* eslint-disable */
const mutations = {
  [USER_SUCCESS]: (state, resp) => {
    Vue.set(state, 'profile', resp);
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
