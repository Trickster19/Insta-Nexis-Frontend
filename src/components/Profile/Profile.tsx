import UseProducts from "@/hooks/UseProducts";
import useAuth from "@/store";
import { Product } from "@/utils/Interfaces";
import { ProductCard } from "@/utils/ProductCard";
import { Loader2 } from "lucide-react";
import ServerDownSvg from "@/assets/server_down.svg";
import { toast } from "sonner";

export const Profile = () => {
  const userName = useAuth((state) => state.userName);
  const { data, isLoading, isError } = UseProducts(userName);
  if (isError) toast.error("Please Refresh The Page");
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 via-orange-100 to-blue-100 opacity-70 -z-10"></div>
      <div className="p-6 mt-20 h-[80vh] relative">
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
            <p className="text-xl font-semibold text-orange-800">
              Oops! Error Occurred
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
