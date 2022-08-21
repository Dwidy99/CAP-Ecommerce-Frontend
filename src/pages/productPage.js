import Slider from "../components/Slider";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";
import React from "react";

const ProductPage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Search />
      <Products />
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
