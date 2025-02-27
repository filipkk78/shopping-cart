import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const context = useOutletContext();
  const cart = context.cart;
  return (
    <>
      <p>This is your shopping cart</p>
      {cart.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default Cart;
