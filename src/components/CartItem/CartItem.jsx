import { Trash2, Plus, Minus } from "lucide-react";
import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({
  item,
  handleChangeAmount,
  incrementAmount,
  decrementAmount,
  removeItem,
}) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <img src={item.product.images[0]} />
        <p>{item.product.title}</p>
      </div>
      <div className={styles.cartItemRight}>
        <p>{item.product.price}$</p>
        <button>
          <Minus onClick={() => decrementAmount(item)}></Minus>
        </button>
        <input
          type="number"
          onChange={handleChangeAmount}
          value={item.amount}
          name={item.product.title}
        />
        <button>
          <Plus onClick={() => incrementAmount(item)}></Plus>
        </button>
        <button>
          <Trash2 onClick={() => removeItem(item)}></Trash2>
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  handleChangeAmount: PropTypes.func,
  incrementAmount: PropTypes.func,
  decrementAmount: PropTypes.func,
  removeItem: PropTypes.func,
};

export default CartItem;
