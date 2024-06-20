import React from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

export const App = () => {
  console.log(routes);

  const element = useRoutes(routes);
  return element;
};
