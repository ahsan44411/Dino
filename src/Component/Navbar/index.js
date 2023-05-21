import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "./logo.png";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} className="logo_nav" />
            &nbsp; &nbsp;
          </Typography>

          <span className="logo_text">
            {" "}
            APE <br />
            MANSIONAIRE <br />
            CLUB
          </span>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
