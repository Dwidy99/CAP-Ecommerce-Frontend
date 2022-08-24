import styles from "./ProductDetail.module.css";
import { image } from "../../image";

import { numberFormat } from "../../utils/idr";

import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import { useEffect } from "react";

const ProductDetail = ({ productId }) => {
  const price = numberFormat(productId.products.price);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col className="col col-md-5 col-12 flex-column">
            <Row>
              <img
                src={image[productId.products.image]}
                className={styles.imgProduct}
                alt=""
              />
              <h3>Add to Action :</h3>
            </Row>
            <Row>
              <Col className="col col-md-3">
                <InputGroup>
                  <Form.Control type="number" min="0" defaultValue={0} />
                </InputGroup>
              </Col>
              <Col className="col col-md-9 d-grid">
                <Button variant="success" size="md">
                  Add to Cart
                </Button>
              </Col>
            </Row>
            <Row className="my-1">
              <Col className="d-grid gap-2">
                <Button variant="info" size="lg">
                  Add to Wishlist
                </Button>
                <Button variant="danger" size="lg">
                  Report this Product
                </Button>
                <Button variant="primary" size="lg">
                  Share this Product
                </Button>
              </Col>
            </Row>
          </Col>

          <Col className="col col-md-5 col-12 desc">
            <h2>{productId.products.name}</h2>
            <h3 className="mb-5">{price}</h3>
            <h3>Product Description :</h3>
            <p>{productId.products.desc}</p>
            <hr />
            <h3>Review:</h3>
            <div className={styles.contentReview}>
              <h4 className={styles.buyer}>Dwi, CEO Learn.com</h4>
              <p className={styles.comment}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa
                dolore incidunt a repellendus voluptatibus, sit ipsam voluptates
                vitae in possimus aperiam.
              </p>
            </div>
            <div className={styles.contentReview}>
              <h4 className={styles.buyer}>Yulianto, CEO Gadang.com</h4>
              <p className={styles.comment}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                mollitia? Expedita ipsa iste eveniet illo. Nisi dicta ipsa
                dolore incidunt a repellendus voluptatibus, sit ipsam voluptates
                vitae in possimus aperiam.
              </p>
            </div>
            <h3>Beri Review :</h3>
            <Row>
              <Col>
                <Form className="d-grid gap-2" action="">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name.."
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      name="name"
                      placeholder="Email.."
                      required
                    />
                  </Form.Group>
                  <FloatingLabel>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </Form.Select>
                  <Button type="submit">Kirim</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;
