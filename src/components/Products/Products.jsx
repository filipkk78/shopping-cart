import { useEffect, useState } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./Products.module.css";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";

function Products({ handleAddToCart }) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading></Loading>;
  if (error) return <p>A network error has occured</p>;

  return (
    <section className={styles.products}>
      {products.map((product) => (
        <StoreItem
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></StoreItem>
      ))}
    </section>
  );
}

Products.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default Products;
