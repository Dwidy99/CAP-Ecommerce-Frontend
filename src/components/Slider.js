const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <div className="slide first">
          <img src="images/banner2.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="images/banner3.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="images/banner1.jpg" alt="" />
        </div>
      </div>
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
      </div>
    </div>
  );
};

export default Slider;
