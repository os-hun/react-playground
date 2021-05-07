import { ACTIONS } from './index';

type LoginUser = {
  name: string;
  email: string;
  screen_name: string;
  description: string;
  image: string;
}

type Toast = {
  status: 'success' | 'error';
  message: string;
}

type IApp = {
  loading: boolean;
  login_user: LoginUser | null;
  toast: Toast | null;
}

type Action = {
  type: keyof typeof ACTIONS;
  payload: any;
};

export type {
  IApp,
  LoginUser,
  Toast,
  Action,
}
