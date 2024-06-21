import React from "react";
import { routes } from "./routes";
import { useLocation, useRoutes } from "react-router-dom";

export const App = () => {
  console.log(routes);
  const location = useLocation();
  console.log(location);

  const element = useRoutes(routes);
  return element;
};
