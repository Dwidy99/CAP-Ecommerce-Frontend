import DetailProduct from "../components/ProductDetail";
import Testimonial from "../components/Testimonial";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useParams } from "react-router-dom";

const LoginPage = () => {
  const { id } = useParams();
  const productId = useFetchProducts(id);
  const loading = productId.loading;
  const error = productId.error;

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {productId !== "" && <DetailProduct productId={productId} />}
      <Testimonial />
      <Footer />
    </>
  );
};

export default LoginPage;
