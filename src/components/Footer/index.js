import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <section className={styles.megaFooter}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              recusandae eveniet sed quasi quia inventore accusantium quae
              dignissimos delectus commodi pariatur necessitatibus, nobis hic
              ipsam laboriosam totam? In, magni voluptatem?
            </p>
          </div>
          <div className={styles.content}>
            <h2>SITEMAP</h2>
            <ul>
              <li>
                <a href="/#">HOME</a>
              </li>
              <li>
                <a href="/#">Download</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
              <li>
                <a href="/#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <h2>GET IN TOUCH</h2>
            <p>Jl. Melon kaliurang No. 7. Kab. Tangerang, BANTEN</p>
            <p>(02151) 12345678</p>
            <p>cs@dwi'scompany.com</p>
          </div>
        </div>
      </section>
      <footer className={styles.smallFooter}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            All Right Reserved Dwi's Company 2021
          </p>
          <p className={styles.link}>
            <a href="/#">Top</a>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
