import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
    console.log(cart);
  }

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <Outlet></Outlet>
        {/* <Products handleAddToCart={addToCart}></Products> */}
      </main>
      <footer>filipkk78</footer>
    </>
  );
}

export default App;
