import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/small-logo.png";
import SearchIcon from "../../assets/search-icon.svg";
import User from "../../assets/user-icon.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <nav className={styles.navbar}>
      <div className={styles.top_nav}>
        <select>
          <option value="USD">USD $</option>
          <option value="NGN">NGN ₦</option>
          <option value="GBP">GBP £</option>
          <option value="EUR">EUR €</option>
        </select>
        <span>Free Shipping on Orders over $80</span>
        <span className={styles.account}>
          <a href="http://">Create an account</a>{" "}
          <div className={styles.divider}> </div> <a href="http://">Sign In</a>
        </span>
      </div>
      <div className={styles.bottom_nav}>
        <div id={styles.logo}>
          <img src={Logo} alt="logo" /> <div id={styles.gaming}>Gaming CO.</div>
        </div>
        <ul id={styles.links}>
          <li>Home</li>
          <li>Store</li>
          <li>Wholesale</li>
          <li>Partner</li>
        </ul>
        <div className={styles.search}>
          <div></div>
          <div></div>
          <div> </div>
          <div></div>
          <div>{cartCount}</div>
        </div>
      </div>
    </nav>
  );
};
