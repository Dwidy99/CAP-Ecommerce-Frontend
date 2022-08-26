import styles from "./Register.module.css";
import React, { useEffect, useState } from "react";
import {
  auth,
  logout,
  registerWithEmailAndPassword,
} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";

import swal from "sweetalert";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // State for the form
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e, params) => {
    e.preventDefault();

    if (params === "register") {
      const isRegistered = await registerWithEmailAndPassword(
        dataRegister.name,
        dataRegister.email,
        dataRegister.password
      );
      if (isRegistered) {
        swal("Good job!", "User created successfully!", "success");
      }
      console.log(isRegistered);
      return;
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/login");
      logout();
      swal("Good job!", "User created successfully!. please login", "success");
    }
    if (error) alert("Error");
  }, [loading, user, error, navigate]);

  return (
    <section className={styles.formRegister}>
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
                    <h4>Create an Account</h4>
                    <span className={styles.textSmall}>
                      Enter your username & password to login
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form action="" method="">
                      <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          onChange={(e) =>
                            setDataRegister({
                              ...dataRegister,
                              name: e.target.value,
                            })
                          }
                          required
                          placeholder="Username.."
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={(e) =>
                            setDataRegister({
                              ...dataRegister,
                              email: e.target.value,
                            })
                          }
                          required
                          placeholder="Email.."
                        />
                      </Form.Group>
                      <Form.Group className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={(e) =>
                            setDataRegister({
                              ...dataRegister,
                              password: e.target.value,
                            })
                          }
                          required
                          placeholder="Password.."
                        />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button
                          className={styles.btnSuccess}
                          type="submit"
                          onClick={(e) => handleSubmit(e, "register")}
                        >
                          Create Account
                        </Button>
                        <span className="mb-5">
                          Already have an account?{" "}
                          <Link to="/login" className={styles.register}>
                            Login
                          </Link>
                        </span>
                      </div>
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

export default Register;
