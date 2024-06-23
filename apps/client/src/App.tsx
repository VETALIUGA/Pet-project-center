import React from "react";
import { routes } from "./routes";
import { useLocation, useRoutes } from "react-router-dom";
import { Header } from "./components/header";
import { Box } from "@mui/material"

export const App = () => {
  console.log(routes);
  const location = useLocation();
  console.log(location);

  const element = useRoutes(routes);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>{element}</Box>
    </Box>
  )

};
