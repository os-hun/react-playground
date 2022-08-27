import { useAtom } from 'jotai'
import { countAtom } from './store/count'
import './App.css'

function App() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </header>
    </div>
  )
}

export default App
