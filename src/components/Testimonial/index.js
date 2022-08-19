import styles from "./Testimonial.module.css";
import Testi1 from "../../assets/images/testi1.jpg";
import Testi2 from "../../assets/images/testi2.jpg";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <h3 className={styles.headerTitle}>OUR TESTIMONIAL</h3>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nama}>Pactric Star</div>
          <div className={styles.testi}>
            <img src={Testi1} className={styles.avatar} alt="" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
              cum vitae iusto sunt reiciendis quibusdam temporibus quisquam ut
              blanditiis vel totam porro perferendis officiis, dolores saepe
              neque.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.nama}>Mr. Crab</div>
          <div className={styles.testi}>
            <img src={Testi2} className={styles.avatar} alt="" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
              cum vitae iusto sunt reiciendis quibusdam temporibus quisquam ut
              blanditiis vel totam porro perferendis officiis, dolores saepe
              neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
