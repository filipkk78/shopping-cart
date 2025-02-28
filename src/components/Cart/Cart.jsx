import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const context = useOutletContext();
  const cart = context.cart.items;
  const total = context.cart.total;

  return (
    <section className={styles.wrapper}>
      <h2>
        Cart (
        {cart.length === 0
          ? "empty"
          : `${cart.length} ${cart.length === 1 ? "product" : "products"}`}
        )
      </h2>
      <div className={styles.cartWrapper}>
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <CartItem
              item={item}
              handleChangeAmount={context.handleChangeAmount}
              key={item.product.id}
            ></CartItem>
          ))}
        </div>
        <aside className={styles.cartTotal}>
          <div className={styles.totalHeader}>{total}$</div>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
