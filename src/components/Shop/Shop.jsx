import Products from "../Products/Products";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const context = useOutletContext();

  return <Products handleAddToCart={context.addToCart}></Products>;
}

export default Shop;
