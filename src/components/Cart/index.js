import styles from "./Cart.module.css";
import Img1 from "../../assets/images/product/Cannon-EOS7D.jpg";
import Img2 from "../../assets/images/product/Go-Pro-Hero9-Black.jpg";
import Img3 from "../../assets/images/product/LUMIX-GH5.jpg";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Table, Button } from "react-bootstrap";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);
  console.log("DATA", data);
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
                      <td>Quantity</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={"./../../assets/images/product/produk9.jpg"}
                            width="75"
                            height="55"
                            alt={item.name}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>Rp. {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Button variant="dark" size="sm">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
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
