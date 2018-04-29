/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false };

const getters = {
  isAuthenticated: () => !!state.token,
  authStatus: () => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit }, payload) => {
    commit(AUTH_REQUEST);
    localStorage.setItem('user-token', '12ewyuw672hjds78e');
    commit(AUTH_SUCCESS, { token: '12ewyuw672hjds78e' });
    payload.router.push({ path: '/hello' });
  },
  [AUTH_LOGOUT]: ({ commit }, payload) => {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
    payload.router.push({ path: '/' });
  },
};

/* eslint-disable */
const mutations = {
  [AUTH_REQUEST]: (state) => { state.status = 'loading'; },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => { state.token = ''; },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
