import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 text-center">
      <motion.h1
        className="text-6xl font-extrabold mb-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bienvenido a la Home
      </motion.h1>
      <motion.p
        className="text-lg max-w-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Explora un mundo de posibilidades con nuestras publicaciones de eventos.
        Encuentra, organiza y participa en experiencias culturales, sociales y
        caritativas que te interesen.
      </motion.p>
      <motion.button
        className="px-8 py-3 text-lg font-semibold bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-600 shadow-lg transition duration-300 transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Explorar Eventos
      </motion.button>
    </div>
  );
}
