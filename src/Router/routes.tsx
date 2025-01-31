import { createHashRouter } from "react-router-dom";

import { gameRoutes } from "./gameRoutes";

import Home from "@/Views/Home";

export const router = createHashRouter([
  ...gameRoutes,
  {
    path: "/",
    element: <Home />,
  },
]);
