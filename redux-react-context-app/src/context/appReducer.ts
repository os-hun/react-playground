type User = {
  name: string;
  email: string;
}

export interface IApp {
  user?: User;
  is_logged_in: boolean;
  check_login: () => boolean;
}

const initialState: IApp = {
  is_logged_in: false,
  check_login: () => {
    console.log('hello world');
    return true;
  },
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.payload, is_logged_in: true };
    case 'check_login_status':
      const payload = action.payload;
      return { ...state, is_logged_in: payload };
    default:
      return state;
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  initialState,
  reducer,
};
