import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <p>This is not a real store, you can't buy stuff here.</p>
      </main>
    </>
  );
}

export default App;
