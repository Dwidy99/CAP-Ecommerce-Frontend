import styles from "./Products.module.css";
import Cart from "../../assets/images/icons/cart-48.png";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContentProduct = ({ productsData }) => {
  return (
    <section className={styles.products}>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">PRODUCTS</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {productsData.map((data, index) => (
            <Col
              key={index}
              className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4"
            >
              <Card className={styles.card}>
                <Link to={`/detail/${data.id}`}>
                  <Card.Img
                    className={styles.imgProduct}
                    variant="top"
                    src={data.image}
                  />
                </Link>
                <Card.Body>
                  <Row>
                    <Col className="col col-md-12">
                      <Card.Title>{data.name}</Card.Title>
                    </Col>
                  </Row>
                  <Row className={styles.desc}>
                    <Col>
                      <Card.Text>${data.price}</Card.Text>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <img src={Cart} alt="cart" width="30" height="30" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContentProduct;
