import styles from "./Cart.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { image } from "../../image";

import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { removeProductToCart } from "../../config/redux/cart-product/action";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);
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
                            src={image[item.image]}
                            width="75"
                            height="55"
                            alt={item.name}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>Rp. {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Button
                            variant="dark"
                            size="sm"
                            onClick={() => dispatch(removeProductToCart(item))}
                          >
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
              <Col className="d-flex justify-content-end my-4">
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
