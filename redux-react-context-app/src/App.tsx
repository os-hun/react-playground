import { useReducer, useEffect } from 'react';
import { AppContext } from './context/appContext';
import appReducer from './context/appReducer';

function App() {
  const [state, dispatch] = useReducer(appReducer.reducer, appReducer.initialState);

  useEffect(() => {
    dispatch({
      type: 'setUser',
      payload: {
        name: 'test user',
        email: 'test@example.com'
      },
    });
  }, []);

  return (
    <AppContext.Provider value={state}>
      <div>
        <h1>app context</h1>
        {JSON.stringify(state)}
      </div>
    </AppContext.Provider>
  );
}

export default App;
