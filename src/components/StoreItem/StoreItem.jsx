import PropTypes from "prop-types";
import styles from "./StoreItem.module.css";

function StoreItem({ product }) {
  return (
    <div className={styles.product}>
      <h4>{product.title}</h4>
      <img src={product.images[0]} />
      <div className={styles.footer}>
        <p>{product.price}$</p>
        <p>Add to cart</p>
      </div>
    </div>
  );
}

StoreItem.propTypes = {
  product: PropTypes.object,
};

export default StoreItem;
