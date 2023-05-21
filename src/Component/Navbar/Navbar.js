import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "./ape.png";
export default function ButtonAppBar() {
  return (
    <Box className="centerNav">
      <div className="container centerNav">
        <img src={logo} className="logo_nav" />
      </div>
    </Box>
  );
}
