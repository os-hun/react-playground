import { ACTIONS } from './actions';

export type LoginUser = {
  name: string;
  email: string;
  screen_name: string;
  description: string | null;
  image: string | null;
}

export type Toast = {
  status: 'success' | 'error';
  message: string;
}

export type IApp = {
  loading: boolean;
  login_user: LoginUser | null;
  toast: Toast | null;
}

export type Action = {
  type: keyof typeof ACTIONS;
  payload?: any;
};
