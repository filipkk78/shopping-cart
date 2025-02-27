import { useEffect, useState } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./Products.module.css";

function Products() {
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
      .then((json) => setProducts(json.slice(0, -7)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error has occured</p>;

  return (
    <section className={styles.products}>
      {products.map((product) => (
        <StoreItem key={product.id} product={product}></StoreItem>
      ))}
    </section>
  );
}

export default Products;
