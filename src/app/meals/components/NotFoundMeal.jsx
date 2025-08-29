"use client"; // Required if using Framer Motion in Next.js app router
import { motion } from "framer-motion";

const NotFoundMeal = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-red-500 mb-4"
        initial={{ y: -50, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        Meal Not Found
      </motion.h1>

      <motion.p
        className="text-gray-600"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Sorry, we could not find the meal you were looking for.
      </motion.p>
    </motion.div>
  );
};

export default NotFoundMeal;
