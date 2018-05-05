/* eslint-disable promise/param-names */
import axios from 'axios';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from '../actions/auth';
import ENDPOINT from '../actions/endpoint';
import {
  MAKE_REQUEST,
  FINISH_REQUEST,
  ERROR_REQUEST,
  CLEAR_REQUEST,
} from '../actions/request';

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
  token: () => state.token,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, payload) => {
    dispatch(MAKE_REQUEST);
    const dataAuth = new FormData();
    dataAuth.set('email', payload.email);
    dataAuth.set('password', payload.password);

    axios.post(`${ENDPOINT}api/login`, dataAuth,
      { headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      } })
      .then(({ data }) => {
        localStorage.setItem('user-token', data.success.token);
        commit(AUTH_SUCCESS, { token: data.success.token });
        dispatch(FINISH_REQUEST);
      })
      .then(() => {
        payload.router.push({ path: '/hello' });
      })
      .catch((e) => {
        dispatch(FINISH_REQUEST);
        dispatch(ERROR_REQUEST, { error: e.response.data.error });
      });
  },
  [AUTH_LOGOUT]: ({ commit, dispatch }, payload) => {
    commit(AUTH_LOGOUT);
    commit(CLEAR_REQUEST);
    // dispatch(MAKE_REQUEST);
    axios.post(`${ENDPOINT}api/logout`, {},
      { headers: {
        Authorization: `Bearer ${payload.token}`,
      } })
      // .then(() => {
      //   dispatch(FINISH_REQUEST);
      // })
      .catch((e) => {
        dispatch(ERROR_REQUEST, { error: e });
        // dispatch(FINISH_REQUEST);
      });
    localStorage.removeItem('user-token');
    payload.router.push({ path: '/' });
  },
};

/* eslint-disable */
const mutations = {
  [AUTH_SUCCESS]: (state, resp) => {
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
    state.hasLoadedOnce = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
