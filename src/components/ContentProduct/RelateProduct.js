import styles from "./ContentProduct.module.css";

import Cart from "../../assets/images/icons/cart-48.png";
import Product1 from "../../assets/images/product/Cannon-EF.jpg";
import Product2 from "../../assets/images/product/NIKON-EM.jpg";
import Product3 from "../../assets/images/product/Cannon-EOS7D.jpg";

const RelateProduct = () => {
  return (
    <React.Fragment>
      <h2 className="header-title">RECOMMENDED PRODUCT</h2>

      <div className={styles.contentProduct}>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src={Product1} alt="" />
            </div>
            <div className={styles.text}>
              <a href="detail.html">
                <h3>Package Mackbook</h3>
              </a>
              <p>Rp. 280.000.000</p>
              <a href="#" className={styles.cart}>
                <img src={Cart} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src={Product1} alt="" />
            </div>
            <div className={styles.text}>
              <a href="detail.html">
                <h3>Package Mackbook</h3>
              </a>
              <p>Rp. 280.000.000</p>
              <a href="#" className={styles.cart}>
                <img src={Cart} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src={Product2} alt="" />
            </div>
            <div className={styles.text}>
              <a href="detail.html">
                <h3>Package Mackbook</h3>
              </a>
              <p>Rp. 280.000.000</p>
              <a href="#" className={styles.cart}>
                <img src={Cart} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src={Product3} alt="" />
            </div>
            <div className={styles.text}>
              <a href="detail.html">
                <h3>Package Mackbook</h3>
              </a>
              <p>Rp. 280.000.000</p>
              <a href="#" className={styles.cart}>
                <img src={Cart} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelateProduct;
