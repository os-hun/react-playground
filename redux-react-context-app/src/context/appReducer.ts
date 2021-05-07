type User = {
  name: string;
  email: string;
}

export interface IApp {
  user?: User;
  loading: boolean;
  is_logged_in: boolean;
}

const initialState: IApp = {
  user: undefined,
  loading: false,
  is_logged_in: false,
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.payload, is_logged_in: true };
    default:
      return state;
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  initialState,
  reducer,
};
