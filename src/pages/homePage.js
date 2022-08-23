import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import { useFetchProducts } from "../hooks/useFetchProducts";

const HomePage = () => {
  const data = useFetchProducts();
  const products = data.products;
  const loading = data.loading;
  const error = data.error;
  return (
    <>
      <Hero />
      <Slider />
      {loading && <h1 className="text-center">Loading...</h1>}
      {error && <h1 className="text-center">Error!</h1>}
      {products.length > 0 && <Products productsData={products} />}
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
