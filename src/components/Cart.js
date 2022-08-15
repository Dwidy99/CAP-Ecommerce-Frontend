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
                  <img src="images/produk1.jpg" alt="Package Mackbook" />
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
                  <img src="images/produk2.jpg" alt="Package Mackbook" />
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
                  <img src="images/produk3.jpg" alt="Package Mackbook" />
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
                  <img
                    src="images/product/Cannon-EOS7D.jpg"
                    alt="Package Mackbook"
                  />
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
                  <img
                    src="images/product/Sony-CV.jpg"
                    alt="Package Mackbook"
                  />
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
            <i className="fa fa-dollar"></i> Checkout
          </a>
          <a href="#" className="shopping">
            <i className="fa fa-angle-left"></i> Belanja lagi
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
