import logo from './logo.svg';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
