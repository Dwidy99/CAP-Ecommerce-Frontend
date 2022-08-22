import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./Login.module.css";

const Signin = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e, param) => {
    e.preventDefault();
    if (param === "login") {
      await logInWithEmailAndPassword(login.email, login.password);
      alert();
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  return (
    <section className={styles.formLogin}>
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">D Store</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="col col-md-5">
            <Card className={styles.card}>
              <Card.Body>
                <Row className="mb-5 mt-4">
                  <Col className="text-center">
                    <h4>Login to Your Account</h4>
                    <span className={styles.textSmall}>
                      Enter your username & password to login
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form action="" method="">
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          required
                          value={login.email}
                          onChange={(e) =>
                            setLogin({ ...login, email: e.target.value })
                          }
                          placeholder="Email.."
                        />
                      </Form.Group>
                      <Form.Group className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          required
                          value={login.password}
                          onChange={(e) =>
                            setLogin({ ...login, password: e.target.value })
                          }
                          placeholder="Password.."
                        />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button
                          className={styles.btnSuccess}
                          type="submit"
                          onClick={(e) => handleLogin(e, "login")}
                        >
                          Login
                        </Button>
                        <span className="mb-5">
                          Don't have account?{" "}
                          <Link to="/register" className={styles.register}>
                            Create an Account
                          </Link>
                        </span>
                      </div>
                      {/* <a href="#" className={styles.forgot}>
              Forgot Password
            </a> */}
                    </Form>
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

export default Signin;
