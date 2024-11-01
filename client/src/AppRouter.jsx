import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePages, LoginPages, DashboardPages, NotFoundPage } from "./pages";
import { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import Loader from "./components/LoadingSpinner";
import { PrivateRoutes } from "./components/PrivateRouter";

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<DashboardPages />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
