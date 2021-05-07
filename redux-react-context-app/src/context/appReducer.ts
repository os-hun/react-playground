export interface IApp {
  is_logged_in: boolean;
}

const initialState: IApp = {
  is_logged_in: false,
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  initialState,
  reducer,
};
