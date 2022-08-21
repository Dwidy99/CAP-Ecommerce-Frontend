import styles from "./Products.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

import Cart from "../../assets/images/icons/cart-48.png";
import Product1 from "../../assets/images/product/Cannon-EF.jpg";
import Product2 from "../../assets/images/product/NIKON-EM.jpg";
import Product3 from "../../assets/images/product/Cannon-EOS7D.jpg";

const ContentProduct = () => {
  return (
    <section className={styles.products}>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">PRODUCTS</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product1}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product3}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product2}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product3}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product1}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product3}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product2}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4">
            <Card className={styles.card}>
              <Card.Img
                className={styles.imgProduct}
                variant="top"
                src={Product3}
              />
              <Card.Body>
                <Row>
                  <Col className="col col-md-12">
                    <Card.Title>Cannon Camera</Card.Title>
                  </Col>
                </Row>
                <Row className={styles.desc}>
                  <Col>
                    <Card.Text>Rp. 8.500.000,-</Card.Text>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <img src={Cart} alt="cart" width="30" height="30" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentProduct;
