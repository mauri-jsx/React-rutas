import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionProvider";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useSession();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const resp = await fetch("http://localhost:4000/auth/sign-in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!resp.ok) {
      setErrorMessage("Error en el inicio de sesión. Intente nuevamente.");
      return;
    }

    const data = await resp.json();
    setUser(data.user);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4">
      <motion.h1
        className="text-5xl font-extrabold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bienvenido de Nuevo
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <motion.button
          type="submit"
          className="w-full py-3 mt-4 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar Sesión
        </motion.button>
      </motion.form>
      {errorMessage && (
        <motion.p
          className="mt-6 text-red-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {errorMessage}
        </motion.p>
      )}
    </div>
  );
}
