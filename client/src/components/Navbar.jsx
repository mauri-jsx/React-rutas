import { NavLink } from "react-router-dom";
import { useSession } from "../context/SessionProvider";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { user, logout } = useSession();

  return (
    <motion.div
      className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 ${
              isActive ? "underline underline-offset-4" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 ${
              isActive ? "underline underline-offset-4" : ""
            }`
          }
        >
          Login
        </NavLink>
        {user && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>
      {user && (
        <motion.button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg shadow-md font-semibold transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      )}
    </motion.div>
  );
};
