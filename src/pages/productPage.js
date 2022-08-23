import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
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
      {loading && <h1 className="text-center">Loading...</h1>}
      {error && <h1 className="text-center">Error!</h1>}
      {products.length > 0 && <Products productsData={products} />}
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
