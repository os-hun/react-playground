import axios from 'axios';
import aspida from '@aspida/axios';
import api from './api/$api';
import { set_toast_action, set_loading_action } from './duck/app/actions';

export const interceptor = (store: any) => {
  const onSuccess = (response: any) => {
    const { data } = response;

    store.dispatch(set_toast_action({
      status: 'success',
      message: data.message,
      is_open: data.message !== '',
    }));
    store.dispatch(set_loading_action());

    return response
  };

  const onError = (error: any) => {
    const { data } = error.response;

    store.dispatch(set_toast_action({
      status: 'error',
      message: data.message,
      is_open: true,
    }));
    store.dispatch(set_loading_action());

    return Promise.reject(error);
  }

  axios.interceptors.response.use(onSuccess, onError);
}

export const client = api(aspida(axios));
