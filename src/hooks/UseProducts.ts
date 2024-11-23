import { fetchAllProducts } from "@/api";
import useAuth from "@/store";
import { useQuery } from "@tanstack/react-query";

const UseProducts = (userName: string) => {
  const accessToken = useAuth((state) => state.accessToken);
  const response = useQuery({
    queryKey: ["products", userName],
    queryFn: () => fetchAllProducts(userName, accessToken),
  });

  return response;
};
export default UseProducts;
