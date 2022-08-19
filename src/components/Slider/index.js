import styles from "./Slider.module.css";

import Slide1 from "../../assets/images/banner2.jpg";
import Slide2 from "../../assets/images/banner1.jpg";
import Slide3 from "../../assets/images/banner3.jpg";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <input type="radio" className={styles.radioBtn} id="radio1" />
        <input type="radio" className={styles.radioBtn} id="radio2" />
        <input type="radio" className={styles.radioBtn} id="radio3" />
        <input type="radio" className={styles.radioBtn} id="radio4" />
        <div className={(styles.slide, styles.first)}>
          <img src={Slide1} alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Slide2} alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Slide3} alt="" />
        </div>
      </div>
      <div className={styles.navigationManual}>
        <label htmlFor="radio1" className={styles.manualBtn}></label>
        <label htmlFor="radio2" className={styles.manualBtn}></label>
        <label htmlFor="radio3" className={styles.manualBtn}></label>
      </div>
    </div>
  );
};

export default Slider;
