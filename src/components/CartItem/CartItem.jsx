import { Trash2, Plus, Minus } from "lucide-react";
import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({
  item,
  handleChangeAmount,
  incrementAmount,
  decrementAmount,
}) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <img src={item.product.images[0]} />
        <p>{item.product.title}</p>
      </div>
      <div className={styles.cartItemRight}>
        <p>{item.product.price}$</p>
        <Minus onClick={() => decrementAmount(item)}></Minus>
        <input
          type="number"
          onChange={handleChangeAmount}
          value={item.amount}
          name={item.product.title}
        />
        <Plus onClick={() => incrementAmount(item)}></Plus>
        <Trash2></Trash2>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  handleChangeAmount: PropTypes.func,
  incrementAmount: PropTypes.func,
  decrementAmount: PropTypes.func,
};

export default CartItem;
