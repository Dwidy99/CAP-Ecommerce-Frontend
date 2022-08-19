import styles from "./ProductDetail.module.css";
import Product1 from "../../assets/images/produk1.jpg";

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={Product1} alt="" />
          <h3>Add to Action :</h3>
          <button>
            <div className={styles.cart}>Add to Cart</div>
          </button>
          <button>
            <div className={styles.wishlist}>Add to Wishlist</div>
          </button>
          <button>
            <div className={styles.report}>Report this Product</div>
          </button>
          <button>
            <div className={styles.share}>Share this Product</div>
          </button>
        </div>
        <div className={styles.right}>
          <h2>Package Mackbook Pro Air 4K</h2>
          <h3 className={styles.price}>Rp. 28.000.000,-</h3>
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
          <div className={styles.contentReview}>
            <p className={styles.rate}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </p>
            <h4 className={styles.buyer}>Dwi Yulianto, CEO GadangLearn.com</h4>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <div className={styles.contentReview}>
            <p className={styles.rate}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <h4 className={styles.buyer}>Dwi, CEO Learn.com</h4>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <div className={styles.contentReview}>
            <p className={styles.rate}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <h4 className={styles.buyer}>Yulianto, CEO Gadang.com</h4>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa dolore
              incidunt a repellendus voluptatibus, sit ipsam voluptates vitae in
              possimus aperiam.
            </p>
          </div>
          <h3>Beri Review :</h3>
          <div className={styles.contentReview}>
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
              <button type="submit">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
