import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../context/SessionProvider";

export const PrivateRoutes = () => {
  const { user } = useSession();

  if (user === undefined) {
    return <p>Loading...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};
