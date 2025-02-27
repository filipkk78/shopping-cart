import PropTypes from "prop-types";
import styles from "./StoreItem.module.css";

function StoreItem({ product, handleAddToCart }) {
  return (
    <div className={styles.product}>
      <h4>{product.title}</h4>
      <img src={product.images[0]} />
      <div className={styles.footer}>
        <p>{product.price}$</p>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}

StoreItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default StoreItem;
