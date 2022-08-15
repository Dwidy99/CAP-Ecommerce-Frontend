const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="container">
        <div className="left">
          <img src="images/produk1.jpg" alt="" />
          <h3>Add to Action :</h3>
          <a href="#">
            <div className="cart">
              <i className="fa fa-shopping-cart fa-lg"></i> Add to Cart
            </div>
          </a>
          <a href="#">
            <div className="wishlist">
              <i className="fa fa-save fa-lg"></i> Add to Wishlist
            </div>
          </a>
          <a href="#">
            <div className="report">
              <i className="fa fa-close fa-lg"></i> Report this Product
            </div>
          </a>
          <a href="#">
            <div className="share">
              <i className="fa fa-share-alt fa-lg"></i> Share this Product
            </div>
          </a>
        </div>
        <div className="right">
          <h2>Package Mackbook Pro Air 4K</h2>
          <h3 className="price">Rp. 28.000.000,-</h3>
          <h3>Deskripsi Product :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nemo, perspiciatis sit, repudiandae dolor minima vero similique a
            nostrum eius sapiente. Sapiente beatae accusantium dolorum
            voluptate? Veniam consectetur sit exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            praesentium ea. Facere, iusto ullam nisi repellendus laudantium
            corporis libero, ducimus minus exercitationem ex, at amet
            perferendis necessitatibus distinctio officiis molestias? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            praesentium ea. Facere, iusto ullam nisi repellendus laudantium
            corporis libero, ducimus minus exercitationem ex, at amet
            perferendis necessitatibus distinctio officiis molestias?
          </p>
          <h3>Review</h3>
          <div className="content-review">
            <p className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </p>
            <h4 className="buyer">Dwi Yulianto, CEO GadangLearn.com</h4>
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <div className="content-review">
            <p className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <h4 className="buyer">Dwi, CEO Learn.com</h4>
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <div className="content-review">
            <p className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <h4 className="buyer">Yulianto, CEO Gadang.com</h4>
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <h3>Beri Review :</h3>
          <div className="content-review">
            <form action="">
              <input type="text" name="name" placeholder="Name.." required />
              <input type="email" name="name" placeholder="Email.." required />
              <textarea name="" required></textarea>
              <select name="" id="">
                <option value="">-- Rate This Product --</option>
                <option value="">1 Star</option>
                <option value="">2 Star</option>
                <option value="">3 Star</option>
                <option value="">4 Star</option>
                <option value="">5 Star</option>
              </select>
              <button type="submit">
                <i className="fa fa-send-o"></i> Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
