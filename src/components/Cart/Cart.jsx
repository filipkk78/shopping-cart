import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { ChevronRight } from "lucide-react";
import { Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const context = useOutletContext();
  const cart = context.cart.items;
  const total = context.cart.total;

  if (cart.length === 0) {
    return (
      <section className={styles.emptyCartWrapper}>
        <ShoppingCart></ShoppingCart>
        <h2>Your cart is empty</h2>
        <div className={styles.navButtons}>
          <Link to="/">Visit our homepage</Link>
          <Link to="/shop">View our products</Link>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.cartHeader}>
        <div className={styles.cartInfo}>
          <h2>Cart</h2>
          <p>
            (
            {cart.length === 0
              ? "empty"
              : `${cart.length} ${cart.length === 1 ? "product" : "products"}`}
            )
          </p>
        </div>
        <button className={styles.clearCart} onClick={context.clearCart}>
          <Trash2></Trash2>
          Clear cart
        </button>
      </div>
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
