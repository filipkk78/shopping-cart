import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { ChevronRight } from "lucide-react";

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
              decrementAmount={context.decrementAmount}
              incrementAmount={context.incrementAmount}
              removeItem={context.removeItem}
              key={item.product.id}
            ></CartItem>
          ))}
        </div>
        <aside className={styles.cartTotal}>
          <div className={styles.totalHeader}>
            <p>Total:</p>
            <p>{total}.00$</p>
          </div>
          <button className={styles.checkoutBtn}>
            Proceed to checkout <ChevronRight></ChevronRight>
          </button>
          <button className={styles.leasingBtn}>
            Calculate installments or leasing
          </button>
          <p className={styles.reserved}>
            Please remember that items added to cart aren't reserved
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
