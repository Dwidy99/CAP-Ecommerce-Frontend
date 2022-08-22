import styles from "./Cart.module.css";
import Img1 from "../../assets/images/product/Cannon-EOS7D.jpg";
import Img2 from "../../assets/images/product/Go-Pro-Hero9-Black.jpg";
import Img3 from "../../assets/images/product/LUMIX-GH5.jpg";
import React from "react";

import { Container, Row, Col, Table, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col className={styles.tableTitle}>
            <h3 className="text-center">Your Orders</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="col col-md-8">
            <Row>
              <Col>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <td>No.</td>
                      <td>Image</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={Img1}
                          width="75"
                          height="55"
                          alt="Package Mackbook"
                        />
                      </td>
                      <td>Package Mackbook</td>
                      <td>Rp. 28.000.000,-</td>
                      <td>
                        <Button variant="dark" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={Img3}
                          width="75"
                          height="55"
                          alt="Package Mackbook"
                        />
                      </td>
                      <td>Package Mackbook</td>
                      <td>Rp. 28.000.000,-</td>
                      <td>
                        <Button variant="dark" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={Img2}
                          width="75"
                          height="55"
                          alt="Package Mackbook"
                        />
                      </td>
                      <td>Package Mackbook</td>
                      <td>Rp. 28.000.000,-</td>
                      <td>
                        <Button variant="dark" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={Img3}
                          width="75"
                          height="55"
                          alt="Package Mackbook"
                        />
                      </td>
                      <td>Package Mackbook</td>
                      <td>Rp. 28.000.000,-</td>
                      <td>
                        <Button variant="dark" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={Img1}
                          width="75"
                          height="55"
                          alt="Package Mackbook"
                        />
                      </td>
                      <td>Package Mackbook</td>
                      <td>Rp. 28.000.000,-</td>
                      <td>
                        <Button variant="dark" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-end my-4 d-grid gap-2">
                <Button variant="secondary">Belanja lagi</Button>
                <Button className={styles.success}>Checkout</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
