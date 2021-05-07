import { useReducer, useEffect } from 'react';
import { Wrapper } from './components/Wrapper';
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
      <h1>Context Test</h1>
      <Wrapper />
    </AppContext.Provider>
  );
}

export default App;
