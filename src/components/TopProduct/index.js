import styles from "./TopProduct.module.css";
import star1 from "../../assets/images/icons/star1.png";
import star2 from "../../assets/images/icons/star2.png";
import { image } from "../../image";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/idr";
import PropTypes from "prop-types";

const TopProduct = ({ topProducts }) => {
  return (
    <section className={styles.products}>
      <Container>
        <Row>
          <Col>
            <h2>TOP PRODUCTS</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {topProducts.map((data, index) => (
            <Col
              key={index}
              className="col col col-lg-3 col-md-4 col-sm-5 col-6 mb-4 mt-4"
            >
              <Card className={styles.card}>
                <Link to={`/detail/${data.id}`}>
                  <Card.Img
                    className={styles.imgProduct}
                    variant="top"
                    src={image[data.image]}
                  />

                  <Card.Body>
                    <Row>
                      <Col className="col col-md-12 text-center">
                        <Card.Title className={styles.cardTitle}>
                          {data.name}
                        </Card.Title>
                      </Col>
                    </Row>
                    <Row className="text-center">
                      <Col>
                        <Card.Text className="price">
                          {numberFormat(data.price)}
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-center">
                        <img src={star1} alt="cart" width="15" height="15" />
                        <img src={star1} alt="cart" width="15" height="15" />
                        <img src={star1} alt="cart" width="15" height="15" />
                        <img src={star1} alt="cart" width="15" height="15" />
                        <img src={star2} alt="cart" width="15" height="15" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

TopProduct.protoType = {
  productsData: PropTypes.array,
};

export default TopProduct;
