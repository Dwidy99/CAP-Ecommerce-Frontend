import HeroImg from "../../assets/images/hero-img.svg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <h1>Welcome to D Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in,
            dolore minus laborum consequuntur facilis.
          </p>
        </div>

        <div className={styles.logo}>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
