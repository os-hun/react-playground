import React from 'react';
import LoginUserContext, { useLoginUserContext } from './context/loginUser.context';
import { useLoginUser } from './hooks/useLoginUser';
import './App.css';

// React.memo を使う理由
/**
 * - パフォーマンス最適化に使う
 * - 子コンポーネントの再レンダーを防ぐ
 * - props等価性をチェックして必要な時だけ再レンダーするようにする
 * 
 * @see https://ja.reactjs.org/docs/react-api.html#reactmemo
 */

function App() {
  const [parent, set_parent] = React.useState(1);
  const [count, set_count] = React.useState(0);
  const { state, dispatch } = useLoginUser();
  
  console.log("parent component");
  
  return (
    <div className="App">
      <LoginUserContext.Provider value={{ ...state, dispatch }}>
        <header className="App-header">
          <h1>React Memo</h1>
          {parent}
          <ShowCount count={count} />
          <button onClick={() => set_parent(parent + 1)}>
            +1 parent
          </button>
          <button onClick={() => set_count(count + 1)}>
            +1 child
          </button>
          <button onClick={() => dispatch({
            type: 'FETCH_LOGIN_USER',
            payload: {
              uid: '11',
              email: 'test@example.com'
            }
          })}>
            add login user
          </button>
        </header>
      </LoginUserContext.Provider>
    </div>
  );
}

// use React.memo
const ShowCount = React.memo(({ count }: { count: number }) => {
  const { uid, email, dispatch } = useLoginUserContext()
  console.log("child component");
  
  return (
    <div>
      {uid && (
        <>
          <p>{count}</p>
          <p>{uid}</p>
          <p>{email}</p>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>logout</button>
        </>
      )}
    </div>
  )
});

// is not use React.memo
// const NotUseMemo = ({count}: {count: number}) => {
//   console.log("child component");

//   return (
//     <div>
//       <p>{count}</p>
//     </div>
//   )
// }

export default App;
