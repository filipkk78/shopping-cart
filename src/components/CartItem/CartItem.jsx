import { Trash2 } from "lucide-react";
import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({ item }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <img src={item.product.images[0]} />
        <p>{item.product.title}</p>
      </div>
      <div className={styles.cartItemRight}>
        <p>{item.product.price}$</p>
        <input type="number" value={item.amount} />
        <Trash2></Trash2>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
