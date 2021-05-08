import { Wrapper } from './components/Wrapper';
import { AppContext } from './context/appContext';
import { useCustomReducer } from './hooks/useCustomReducer';
import { Selectors, Actions } from './duck';

function App() {
  const { state } = useCustomReducer();
  const { loading, login_user, toast } = Selectors();
  const { callback, fetch_login_user } = Actions();

  const onClick = () => callback(fetch_login_user);

  return (
    <AppContext.Provider value={state}>
      <h1>Context Test</h1>
      <Wrapper />

      <p>{loading.toString()}</p>
      <p>{JSON.stringify(login_user)}</p>
      <p>{JSON.stringify(toast)}</p>
      <p>
        <button onClick={onClick}>fetch</button>
      </p>
    </AppContext.Provider>
  );
}

export default App;
