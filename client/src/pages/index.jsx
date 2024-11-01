import { lazy } from "react";

export const HomePages = lazy(() => import("./HomePages"));
export const LoginPages = lazy(() => import("./LoginPages"));
export const DashboardPages = lazy(() => import("./DashboardPages"));
export const NotFoundPage = lazy(() => import("./NotFoundPage"));
