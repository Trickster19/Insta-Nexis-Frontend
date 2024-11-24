import { FC } from "react";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import { Product } from "./Interfaces";
import { Building, Info, TagIcon } from "lucide-react";

export const ProductCard: FC<Product> = ({
  imageUrls,
  title,
  manufacturer,
  price,
  description,
  id,
  productType,
  currencyCode,
}) => {
  return (
    <NavLink to={`/product/${id}`} className="block min-w-[200px]">
      <motion.div
        className="relative group bg-gray-600/20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Two-Column Layout */}
        <div className="grid gap-y-2 p-3 h-full">
          {/* Image Section */}
          <div className="relative w-full h-60 overflow-hidden rounded-t-lg shadow-lg bg-gray-200">
            <img
              src={imageUrls[0]}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out "
            />
          </div>

          {/* Product Details */}
          <CardContent className="flex flex-col flex-wrap justify-between rounded-b-lg shadow-lg py-6 bg-white  hover:shadow-lg transition-shadow duration-300">
            {/* Top Section: Product Name and Price */}
            <div className="grid grid-cols-1 justify-between items-center border-b-2 border-gray-200 pb-3 ">
              {/* Product Name */}
              <div className="flex items-center gap-2 ">
                <TagIcon className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-lg text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
                  {title} |
                  <span className="ml-2 text-base font-extrabold text-blue-600">
                    {manufacturer}
                  </span>
                </span>
              </div>

              {/* Price Button */}
              <div className="absolute top-3 right-3 bg-green-500 text-white font-semibold py-2 px-4 rounded-tr-lg text-sm shadow hover:bg-green-600 transition-colors">
                {price} {currencyCode}
              </div>
            </div>

            {/* Middle Section: Product Type */}
            <div className="mt-3 flex items-center gap-x-4">
              <span className="flex gap-1 text-xs font-bold text-blue-500 uppercase tracking-wide">
                <Info name="info" className="w-4 h-4 text-gray-400" />
                Product Type :
              </span>
              <div className="flex items-center italic justify-center text-sm text-gray-600">
                <span>{productType}</span>
              </div>
            </div>

            {/* Bottom Section: Description */}
            <div className="mt-4">
              <p
                className="text-sm text-gray-700 leading-relaxed overflow-hidden text-ellipsis line-clamp-3 group-hover:text-gray-900 transition-colors duration-300 ease-in-out"
                title={description}
              >
                {description}
              </p>
            </div>
          </CardContent>
        </div>
      </motion.div>
    </NavLink>
  );
};
