import Img1 from "./../../public/images/product/Cannon-EOS7D.jpg";
import Img2 from "./../../public/images/product/Go-Pro-Hero9-Black.jpg";
import Img3 from "./../../public/images/product/LUMIX-GH5.jpg";

const Cart = () => {
  return (
    <React.Fragment>
      <h2 className="header-title">KERANJANG</h2>
      <div className="keranjang-product">
        <div className="container">
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
                  <a href="#" className="action">
                    Delete
                  </a>
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
                  <a href="#" className="action">
                    Delete
                  </a>
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
                  <a href="#" className="action">
                    Delete
                  </a>
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
                  <a href="#" className="action">
                    Delete
                  </a>
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
                  <a href="#" className="action">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <a href="#" className="checkout">
            Checkout
          </a>
          <a href="#" className="shopping">
            Belanja lagi
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
