import styles from "./Testimonial.module.css";
import Testi1 from "../../assets/images/testi1.jpg";
import Testi2 from "../../assets/images/testi2.jpg";

import { Container, Col, Row } from "react-bootstrap";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <Container className="text-white">
        <Row className="d-flex justify-content-center row row-cols-12 row-cols-sm-12 row-cols-md-4">
          <Col>
            <h3>OUR TESTIMONIAL</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ms-3">
              <h5>Pactric Star</h5>
            </div>
            <Row>
              <Col>
                <img src={Testi1} className={styles.avatar} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quae cum vitae iusto sunt reiciendis quibusdam temporibus
                  quisquam ut blanditiis vel totam porro perferendis officiis,
                  dolores saepe neque.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ms-3">
              <h5>Mr. Crab</h5>
            </div>
            <Row>
              <Col>
                <img src={Testi2} className={styles.avatar} alt="" />
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quae cum vitae iusto sunt reiciendis quibusdam temporibus
                  quisquam ut blanditiis vel totam porro perferendis officiis,
                  dolores saepe neque.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
