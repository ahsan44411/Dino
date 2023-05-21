import React from "react";
import { Grid } from "@mui/material";

function Wallet() {
  return (
    <div className="div container">
      <Grid container spacing={2} justify="center">
        <Grid item md={12} xs={12} sm={12}>
          <br />
          <br />
          <br />
          <div class="form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Wallet Address"
            />
          </div>
          <br />
          <br />
          <br />
          <button className="myButton">Wallet Connect</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Wallet;
