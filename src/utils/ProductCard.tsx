import { FC } from "react";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

type ProductCardProps = {
  image: string;
  name: string;
  company: string;
  price: Number;
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
        className="relative group bg-[#d2e6fd] rounded-xl shadow-lg overflow-hidden h-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }} // Add smooth scaling on hover
        transition={{ duration: 0.3 }}
      >
        {/* Image Section */}
        <div className="relative w-full h-60 bg-[#d2e6fd] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <CardContent className="p-6 flex flex-col h-full">
          {/* Product Name */}
          <div
            className="font-semibold text-xl text-gray-800 group-hover:text-[#f57c00] transition-colors duration-300 ease-in-out overflow-hidden text-ellipsis whitespace-nowrap"
            title={name} // Tooltip to show full name on hover
          >
            {name}
          </div>

          {/* Company Name */}
          <div className="text-sm text-gray-500">{company}</div>

          {/* Price */}
          <div className="text-lg text-gray-900 font-bold mt-2">${price}</div>

          {/* Description with Ellipsis */}
          <p
            className="text-sm text-gray-600 mt-2 overflow-hidden text-ellipsis line-clamp-3 group-hover:text-gray-800 transition-colors duration-300 ease-in-out"
            title={description} // Tooltip to show full description on hover
          >
            {description}
          </p>
        </CardContent>
      </motion.div>
    </NavLink>
  );
};
