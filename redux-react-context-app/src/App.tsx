import { useEffect } from 'react';
import { Wrapper } from './components/Wrapper';
import { AppContext } from './context/appContext';
import { useCustomReducer } from './hooks/useCustomReducer';

function App() {
  const { state, setUser } = useCustomReducer();

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <AppContext.Provider value={state}>
      <h1>Context Test</h1>
      <Wrapper />
    </AppContext.Provider>
  );
}

export default App;
