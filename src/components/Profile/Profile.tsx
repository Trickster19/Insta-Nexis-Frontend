import { products } from "@/utils/MockData";
import { ProductCard } from "@/utils/ProductCard";

export const Profile = () => {
  return (
    <>
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 via-orange-100 to-blue-100 opacity-70 -z-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mt-20">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            company={product.company}
            price={product.price}
            description={product.description}
            productId={String(index)}
          />
        ))}
      </div>
    </>
  );
};
