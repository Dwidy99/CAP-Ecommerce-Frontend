import styles from "./Cart.module.css";
import Img1 from "../../assets/images/product/Cannon-EOS7D.jpg";
import Img2 from "../../assets/images/product/Go-Pro-Hero9-Black.jpg";
import Img3 from "../../assets/images/product/LUMIX-GH5.jpg";
import React from "react";

const Cart = () => {
  return (
    <React.Fragment>
      <h2 className="header-title">KERANJANG</h2>
      <div className={styles.keranjangProduct}>
        <div className={styles.container}>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img src={Img1} alt="Package Mackbook" />
                </td>
                <td>Package Mackbook</td>
                <td>Rp. 28.000.000,-</td>
                <td>
                  <button className={styles.action}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img src={Img2} alt="Package Mackbook" />
                </td>
                <td>Package Mackbook</td>
                <td>Rp. 28.000.000,-</td>
                <td>
                  <button className={styles.action}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img src={Img3} alt="Package Mackbook" />
                </td>
                <td>Package Mackbook</td>
                <td>Rp. 28.000.000,-</td>
                <td>
                  <button className={styles.action}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img src={Img3} alt="Package Mackbook" />
                </td>
                <td>Sony Camera</td>
                <td>Rp. 28.000.000,-</td>
                <td>
                  <button className={styles.action}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img src={Img2} alt="Package Mackbook" />
                </td>
                <td>Sony Camera</td>
                <td>Rp. 28.000.000,-</td>
                <td>
                  <button className={styles.action}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <button className={styles.checkout}>Checkout</button>
          <button className={styles.shopping}>Belanja lagi</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
