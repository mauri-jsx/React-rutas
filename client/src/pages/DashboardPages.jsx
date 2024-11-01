import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white px-4 text-center">
      <motion.h1
        className="text-6xl font-extrabold mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bienvenido al Dashboard
      </motion.h1>
      <motion.p
        className="text-lg max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Administra tus eventos, consulta estadísticas y accede a herramientas
        personalizadas para gestionar tus experiencias y mantenerte organizado.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, staggerChildren: 0.2 },
          },
        }}
      >
        <DashboardCard
          title="Eventos"
          description="Crea y organiza tus eventos."
          color="bg-blue-600"
        />
        <DashboardCard
          title="Estadísticas"
          description="Consulta métricas y análisis."
          color="bg-purple-600"
        />
        <DashboardCard
          title="Perfil"
          description="Actualiza tus datos y preferencias."
          color="bg-green-600"
        />
        <DashboardCard
          title="Configuración"
          description="Personaliza tu experiencia."
          color="bg-yellow-500"
        />
      </motion.div>
    </div>
  );
}

function DashboardCard({ title, description, color }) {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg ${color} text-white transform transition duration-300 hover:scale-105`}
      whileHover={{ y: -5 }}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </motion.div>
  );
}
