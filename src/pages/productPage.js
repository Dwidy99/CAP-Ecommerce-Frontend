import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import React from "react";

const ProductPage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Products />
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
