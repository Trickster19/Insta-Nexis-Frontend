import { FC } from "react";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";  // Import NavLink for routing

type ProductCardProps = {
  image: string;
  name: string;
  company: string;
  price: string;
  description: string;
  productId: string; // Assuming you have a productId to use for the URL
};

export const ProductCard: FC<ProductCardProps> = ({
  image,
  name,
  company,
  price,
  description,
  productId,
}) => {
  return (
    <NavLink to={`/product/${productId}`} className="block">
      <motion.div
        className="relative group cursor-pointer bg-[#d2e6fd] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <div className="relative w-full h-60 bg-[#d2e6fd] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Product Details */}
        <CardContent className="p-6">
          <div className="font-semibold text-xl text-gray-800 group-hover:text-[#f57c00] transition-all duration-300 ease-in-out">
            {name}
          </div>
          <div className="text-sm text-gray-500">{company}</div>
          <div className="text-lg text-gray-900 font-bold mt-2">${price}</div>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </CardContent>
      </motion.div>
    </NavLink>
  );
};
