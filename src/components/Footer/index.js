import React from "react";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <section className={styles.megaFooter}>
        <Container>
          <Row className="d-flex justify-content-between row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <Col>
              <h2>ABOUT US</h2>
              <p className={styles.about}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                recusandae eveniet sed quasi quia inventore accusantium quae
                dignissimos delectus commodi pariatur necessitatibus, nobis hic
                ipsam laboriosam totam? In, magni voluptatem?
              </p>
            </Col>
            <Col>
              <h2>SITEMAP</h2>
              <ul>
                <li>
                  <a href="/#">HOME</a>
                </li>
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li>
                  <a href="/#">Jobs</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>GET IN TOUCH</h2>
              <p>
                Jl. Melon kaliurang No. 7. Kab. Tangerang, BANTEN (02151)
                12345678 cs@dwi'scompany.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <footer>
        <Container>
          <Row className="row">
            <Col>
              <p className={styles.copyright}>
                All Right Reserved Dwi's Company 2021
              </p>
            </Col>
            <Col>
              <p className={styles.top}>
                <a href="/#">Top</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
