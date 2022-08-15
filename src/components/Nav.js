const Nav = () => {
  return (
    <nav>
      <a href="index.html">
        <h2>D Store</h2>
      </a>

      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="product.html">Product</a>
        </li>
        <li>
          <a href="login.html">Signin</a>
        </li>
        <li className="cart">
          <a href="cart.html">
            <img
              className="i-cart"
              src="./assets/images/icons/buy.png"
              alt=""
            />
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
