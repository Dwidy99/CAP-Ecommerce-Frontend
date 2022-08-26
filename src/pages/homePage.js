import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { useFetchProducts } from "../hooks/useFetchProducts";
import TopProduct from "../components/TopProduct";

const HomePage = () => {
  const data = useFetchProducts();
  const products = data.products;
  const loading = data.loading;
  const error = data.error;

  let topProducts = products.filter((p) => p.top_sale === true);
  return (
    <>
      <Hero />
      {loading && <Loading />}
      {error && <Error />}
      {topProducts.length > 0 && <TopProduct topProducts={topProducts} />}
      <Slider />
      {products.length > 0 && <Products productsData={products} />}
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
