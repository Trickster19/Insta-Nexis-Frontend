import { fetchProduct } from "@/api/fetchProduct";
import useAuth from "@/store";
import { useQuery } from "@tanstack/react-query";

const UseProduct = (productId: string | undefined) => {
  const accessToken = useAuth((state) => state.accessToken);
  const response = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(accessToken, productId),
  });

  return response;
};
export default UseProduct;
