import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProducts = (productId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);

      try {
        let res;

        if (productId) {
          res = await axios.get(
            `https://63044b8f761a3bce77e56ce0.mockapi.io/api/v1/electro/${productId}`
          );
        } else {
          res = await axios.get(
            "https://63044b8f761a3bce77e56ce0.mockapi.io/api/v1/electro"
          );
        }

        // console.log("Hasil AXIOS", response);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [productId]);

  return { products, loading, error };
};
