const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <div className="slide first">
          <img src="./assets/images/banner2.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="./assets/images/banner3.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="./assets/images/banner1.jpg" alt="" />
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </div>
  );
};

export default Slider;
