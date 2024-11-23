import { fetchAllProducts } from "@/api";
import { useQuery } from "@tanstack/react-query";

const UseProducts = (userName: string, setter: () => void) => {
  const {response = useQuery({
    queryKey: ["products", userName],
    queryFn: () => fetchAllProducts(userName),
  });

  return response;
};
export default UseProducts;
