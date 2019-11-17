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

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('authentication error, please check your login information.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
