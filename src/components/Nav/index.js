import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import CartLink from "../../assets/images/icons/buy.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h2>D Store</h2>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/login">Signin</Link>
        </li>
        <li className={styles.cart}>
          <a href="cart.html">
            <img className="i-cart" src={CartLink} alt="" />
          </a>
        </li>
      </ul>

      <div className="menu-toggle">
        <input type="checkbox" className="input" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
