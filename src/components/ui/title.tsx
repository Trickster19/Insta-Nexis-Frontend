import { motion } from "framer-motion";

export function TitleName() {
  return (
    <div className="flex items-center gap-x-4">
      {/* Logo with sharp text, gradient, and shadow */}
      <motion.a
        className="text-2xl  md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#0f2954e6] uppercase drop-shadow-[0px_4px_6px_rgba(0,0,0,0.2)]"
        whileHover={{
          scale: 1.1,
        }}
        href="/"
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Post Nexis
      </motion.a>
    </div>
  );
}
