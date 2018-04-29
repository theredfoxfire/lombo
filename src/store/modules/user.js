import Vue from 'vue';
import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user';
import { AUTH_LOGOUT } from '../actions/auth';

const state = { status: '', profile: {} };

const getters = {
  getProfile: () => state.profile,
  isProfileLoaded: () => !!state.profile.name,
};

const actions = {
  [USER_REQUEST]: ({ commit }) => {
    commit(USER_REQUEST);
    commit(USER_SUCCESS, { name: 'Jaka Juki' });
  },
};

const mutations = {
  [USER_REQUEST]: () => {
    state.status = 'loading';
  },
  [USER_SUCCESS]: (resp) => {
    state.status = 'success';
    Vue.set(state, 'profile', resp);
  },
  [USER_ERROR]: () => {
    state.status = 'error';
  },
  [AUTH_LOGOUT]: () => {
    state.profile = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
