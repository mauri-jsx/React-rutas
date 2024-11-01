import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-center">
      <motion.h1
        className="text-9xl font-extrabold text-red-600 mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ¡Oops! La página que buscas no fue encontrada.
      </motion.p>
      <Link
        to="/"
        className="px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Volver a la página principal
      </Link>
      <motion.div
        className="mt-10 text-gray-500"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-sm">Parece que te has perdido...</p>
      </motion.div>
    </div>
  );
}
