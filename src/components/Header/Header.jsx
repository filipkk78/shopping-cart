import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ShoppingCart, Search } from "lucide-react";

function Header() {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.navBar}>
        <h1>
          <Link to="/">Online Store</Link>
        </h1>
        <div className={styles.searchBar}>
          <input
            type="search"
            name="searchBar"
            placeholder="What are you looking for?"
          />
          <Search></Search>
        </div>
        <h2>
          <Link to="/shop">Products</Link>
        </h2>
        <h2 className={styles.cartLink}>
          <Link to="/cart">Cart</Link>
          <ShoppingCart></ShoppingCart>
        </h2>
      </nav>
    </header>
  );
}

export default Header;
