import { products } from "@/utils/MockData";
import { ProductCard } from "@/utils/ProductCard";

export const Profile = () => {

  return (
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
  );
};
