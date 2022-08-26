import DetailProduct from "../components/ProductDetail";
import Testimonial from "../components/Testimonial";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useParams } from "react-router-dom";
import TopProduct from "../components/TopProduct";

const DetailPage = () => {
  const { id } = useParams();
  const productId = useFetchProducts(id);
  const loading = productId.loading;
  const error = productId.error;

  const data = useFetchProducts();
  const products = data.products;
  let topProducts = products.filter((p) => p.top_sale === true);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {productId !== "" && <DetailProduct productId={productId} />}
      <TopProduct topProducts={topProducts} />
      <Testimonial />
      <Footer />
    </>
  );
};

export default DetailPage;
