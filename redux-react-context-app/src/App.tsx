import { Wrapper } from './components/Wrapper';
import { AppContext } from './context/appContext';
import { useCustomReducer } from './hooks/useCustomReducer';
import { Selectors, Actions } from './duck';

function App() {
  const { state } = useCustomReducer();
  const { loading } = Selectors();
  const { callback, set_loading } = Actions();

  const onClick = () => callback(set_loading);

  return (
    <AppContext.Provider value={state}>
      <h1>Context Test</h1>
      <Wrapper />

      <p>{loading.toString()}</p>
      <p>
        <button onClick={onClick}>loading</button>
      </p>
    </AppContext.Provider>
  );
}

export default App;
