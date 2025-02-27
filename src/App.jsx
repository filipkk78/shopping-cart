import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  function addToCart(item) {
    setCart({
      items: [...cart.items, { product: item, amount: 1 }],
      total: cart.total + item.price,
    });
    console.log(cart.total);
  }

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <Outlet context={{ cart, setCart, addToCart }}></Outlet>
      </main>
      <footer>filipkk78</footer>
    </>
  );
}

export default App;
