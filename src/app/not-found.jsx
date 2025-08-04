'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.h1
        className="text-7xl font-bold text-red-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        404
      </motion.h1>

      <motion.p
        className="mt-4 text-xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oops! Page not found.
      </motion.p>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
}
