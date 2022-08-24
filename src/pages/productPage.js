import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import React from "react";

import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductPage = () => {
  const data = useFetchProducts();
  const products = data.products;
  const loading = data.loading;
  const error = data.error;

  return (
    <React.Fragment>
      <Slider />
      {loading && <Loading />}
      {error && <Error />}
      {products.length > 0 && <Products productsData={products} />}
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
