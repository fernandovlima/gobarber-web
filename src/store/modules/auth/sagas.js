import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('user is not a provider');
      return;
    }

    // seta o token para todas as reqs feitas para a api
    api.defaults.headers.Authorization = `Beares ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('authentication error, please check your login information.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    toast.error('registration error, plaese check your data.');
    yield put(signFailure());
  }
}

// seta o token para quando o usuario recarregar pagina.
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    // seta o token para todas as reqs feitas para a api
    api.defaults.headers.Authorization = `Beares ${token}`;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
