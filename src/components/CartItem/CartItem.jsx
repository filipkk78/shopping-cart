import { Trash2 } from "lucide-react";
import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({ item, handleChangeAmount }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <img src={item.product.images[0]} />
        <p>{item.product.title}</p>
      </div>
      <div className={styles.cartItemRight}>
        <p>{item.product.price}$</p>
        <input
          type="number"
          onChange={handleChangeAmount}
          defaultValue={item.amount}
          name={item.product.title}
        />
        <Trash2></Trash2>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  handleChangeAmount: PropTypes.func,
};

export default CartItem;
