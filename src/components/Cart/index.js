import styles from "./Cart.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { image } from "../../image";

import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { removeProductToCart } from "../../config/redux/cart-product/action";
import { numberFormat } from "../../utils/idr";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);

  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = ((15 / 100) * subTotalPrice).toFixed(2);
  const totalPrice = (subTotalPrice + parseFloat(tax)).toFixed(2);
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
                        <td>{numberFormat(item.price * item.quantity)}</td>
                        <td className="col col-md-2">
                          <Form.Control
                            type="number"
                            min={1}
                            defaultValue={item.quantity}
                            onChange={(e) =>
                              dispatch({
                                type: "CHANGE_QUANTITY_ITEM",
                                value: e.target.value,
                                id: item.id,
                              })
                            }
                          />
                        </td>
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

            <Row className="d-flex justify-content-end">
              <Col className="col col-md-6 text-end my-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <td>SubTotal</td>
                      <td>{numberFormat(subTotalPrice)}</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>{numberFormat(tax)}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{numberFormat(totalPrice)}</td>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
