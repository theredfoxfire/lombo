/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import { USER_REQUEST } from '../actions/user';

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false };

const getters = {
  isAuthenticated: () => !!state.token,
  authStatus: () => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }) => {
    commit(AUTH_REQUEST);
    localStorage.setItem('user-token', '12ewyuw672hjds78e');
    // Here set the header of your ajax library to the token value.
    // example with axios
    // axios.defaults.headers.common['Authorization'] = resp.token
    commit(AUTH_SUCCESS, { token: '12ewyuw672hjds78e' });
    dispatch(USER_REQUEST);
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
  },
};

const mutations = {
  [AUTH_REQUEST]: () => { state.status = 'loading'; },
  [AUTH_SUCCESS]: (resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: () => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: () => { state.token = ''; },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
