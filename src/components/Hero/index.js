import styles from "./Hero.module.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.jumbotron}>
        <Row>
          <Col className="text-center pt-5">
            <h1>Welcome to D Store</h1>
            <h2>NEW COLLECTION UP TO 50% OFF</h2>
            <Link to="/product">
              <Button variant="danger">Check it Out</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
