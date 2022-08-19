import Slider from "../components/Slider";
import Search from "../components/Search";
import Product from "../components/ContentProduct";
import Footer from "../components/Footer";
import React from "react";

const ProductPage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Search />
      <Product />
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
