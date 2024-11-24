import UseProducts from "@/hooks/UseProducts";
import useAuth from "@/store";
import { Product } from "@/utils/Interfaces";
import { ProductCard } from "@/utils/ProductCard";
import { Loader2 } from "lucide-react";
import ServerDownSvg from "@/assets/server_down.svg";
import NoDataSvg from "@/assets/no_data.svg";
import { toast } from "sonner";

export const Profile = () => {
  const userName = useAuth((state) => state.userName);
  const { data, isLoading, isError } = UseProducts(userName);
  if (isError) toast.error("Please Refresh The Page");
  return (
    <>
      <div className="h-[100vh] py-20 px-12 w-full relative">
        {isLoading ? (
          <div className="flex h-full items-center justify-center ">
            <Loader2
              className="w-28 h-28 animate-spin "
              style={{
                color: "#f57c00",
              }}
            />
          </div>
        ) : isError ? (
          <div className="h-full flex flex-col justify-center items-center">
            <img
              src={ServerDownSvg}
              alt="Server Down"
              className="w-1/2 max-w-md my-4"
            />
            <p className="text-2xl font-semibold text-orange-600">
              Oops! Error Occurred
            </p>
          </div>
        ) : data.length === 0 ? (
          <div className="h-full flex flex-col justify-center items-center">
            <img
              src={NoDataSvg}
              alt="Server Down"
              className="w-1/2 max-w-md my-4"
            />
            <p className="text-2xl font-semibold text-orange-600">
              No Products Added Yet !!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                image={product.image[0]}
                name={product.name}
                company={product.company}
                price={Number(product.price)}
                description={product.description}
                productId={String(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
