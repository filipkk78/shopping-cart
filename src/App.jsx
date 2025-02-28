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
  }

  function handleChangeAmount(e) {
    if (e.target.value === "") return;
    const nextCartItems = [...cart.items];
    const item = nextCartItems.find(
      (prod) => prod.product.title === e.target.name
    );
    console.log(item);
    item.amount = e.target.value;
    let nextTotal = 0;
    nextCartItems.forEach(
      (prod) => (nextTotal += prod.product.price * prod.amount)
    );
    setCart({
      items: nextCartItems,
      total: nextTotal,
    });
  }

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <Outlet
          context={{ cart, setCart, addToCart, handleChangeAmount }}
        ></Outlet>
      </main>
      <footer>filipkk78</footer>
    </>
  );
}

export default App;
