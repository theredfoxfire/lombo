/* eslint-disable promise/param-names */
import axios from 'axios';
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false,
  errorMessage: '',
};

const getters = {
  isAuthenticated: () => !!state.token,
  authStatus: () => state.status,
  token: () => state.token,
  errorMessage: () => state.errorMessage,
};

const actions = {
  [AUTH_REQUEST]: ({ commit }, payload) => {
    commit(AUTH_REQUEST);
    const dataAuth = new FormData();
    dataAuth.set('email', payload.email);
    dataAuth.set('password', payload.password);
    /* eslint-disable */
    axios.post(`http://localhost/lombo/public/api/login`, dataAuth,
    {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(({ data }) => {
        localStorage.setItem('user-token', data.success.token);
        commit(AUTH_SUCCESS, { token:  data.success.token });
      })
      .then(() => {
        payload.router.push({ path: '/hello' });
      })
      .catch((e) => {
        commit(AUTH_ERROR, e.response.data.error);
      });
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
  [AUTH_ERROR]: (state, e) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
    state.errorMessage = e;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
    state.status = '';
    state.hasLoadedOnce = false;
    state.errorMessage = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
