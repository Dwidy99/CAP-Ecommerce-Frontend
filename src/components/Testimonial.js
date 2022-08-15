const Testimonial = () => {
  return (
    <section className="testimonial">
      <h3 className="header-title">OUR TESTIMONIAL</h3>
      <div className="container">
        <div className="content">
          <div className="nama">Pactric Star</div>
          <div className="testi">
            <img src="images/testi1.jpg" className="avatar" alt="" />
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
              cum vitae iusto sunt reiciendis quibusdam temporibus quisquam ut
              blanditiis vel totam porro perferendis officiis, dolores saepe
              neque.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="nama">Mr. Crab</div>
          <div className="testi">
            <img src="images/testi2.jpg" className="avatar" alt="" />
            <p className="text">
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
