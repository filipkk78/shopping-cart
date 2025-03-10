import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  function addToCart(item) {
    const nextCartItems = [...cart.items];
    const amountCheck = nextCartItems.find(
      (prod) => prod.product.title === item.title
    );
    if (amountCheck !== undefined) {
      amountCheck.amount += 1;
      let nextTotal = 0;
      nextCartItems.forEach(
        (prod) => (nextTotal += prod.product.price * prod.amount)
      );
      setCart({
        items: nextCartItems,
        total: nextTotal,
      });
    } else {
      setCart({
        items: [...cart.items, { product: item, amount: 1 }],
        total: cart.total + item.price,
      });
    }
  }

  function handleChangeAmount(e) {
    if (e.target.value === "" || e.target.value < 1) return;
    const nextCartItems = [...cart.items];
    const item = nextCartItems.find(
      (prod) => prod.product.title === e.target.name
    );
    item.amount = parseInt(e.target.value);
    let nextTotal = 0;
    nextCartItems.forEach(
      (prod) => (nextTotal += prod.product.price * prod.amount)
    );
    setCart({
      items: nextCartItems,
      total: nextTotal,
    });
  }

  function incrementAmount(item) {
    const nextCartItems = [...cart.items];
    const desiredItem = nextCartItems.find(
      (prod) => prod.product.title === item.product.title
    );
    desiredItem.amount = desiredItem.amount + 1;
    let nextTotal = 0;
    nextCartItems.forEach(
      (prod) => (nextTotal += prod.product.price * prod.amount)
    );
    setCart({
      items: nextCartItems,
      total: nextTotal,
    });
  }

  function removeItem(item) {
    const nextItems = cart.items.filter(
      (prod) => prod.product.title !== item.product.title
    );
    let nextTotal = 0;
    nextItems.forEach(
      (prod) => (nextTotal += prod.product.price * prod.amount)
    );
    setCart({
      items: nextItems,
      total: nextTotal,
    });
  }

  function decrementAmount(item) {
    const nextCartItems = [...cart.items];
    const desiredItem = nextCartItems.find(
      (prod) => prod.product.title === item.product.title
    );
    if (desiredItem.amount === 1) {
      removeItem(item);
      return;
    }
    desiredItem.amount = desiredItem.amount - 1;
    let nextTotal = 0;
    nextCartItems.forEach(
      (prod) => (nextTotal += prod.product.price * prod.amount)
    );
    setCart({
      items: nextCartItems,
      total: nextTotal,
    });
  }

  function clearCart() {
    setCart({ items: [], total: 0 });
  }

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.main}>
        <Outlet
          context={{
            cart,
            setCart,
            addToCart,
            handleChangeAmount,
            decrementAmount,
            incrementAmount,
            removeItem,
            clearCart,
          }}
        ></Outlet>
      </main>
      <footer>filipkk78</footer>
    </div>
  );
}

export default App;
