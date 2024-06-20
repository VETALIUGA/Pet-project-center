import React from "react";
import type { RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { Next } from "../pages/next";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/next",
    element: <Next />,
  },
];
