import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import CartLink from "../../assets/images/icons/buy.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../config/firebase";

const Nav = () => {
  const [user] = useAuthState(auth);
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
          <Link to="/product">Product</Link>
        </li>
        {user ? (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        ) : (
          <li>
            <Link to="/login">Signin</Link>
          </li>
        )}
        {user && (
          <li className={styles.cart}>
            <Link to="/cart">
              <img className="i-cart" src={CartLink} alt="" />
            </Link>
          </li>
        )}
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
