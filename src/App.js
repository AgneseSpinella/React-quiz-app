import styles from "./App.module.scss"

import Settings from './components/Setting';

function App() {
  return (
    <div className={styles.app}>
      <Settings/>
    </div>
  );
}

export default App;
