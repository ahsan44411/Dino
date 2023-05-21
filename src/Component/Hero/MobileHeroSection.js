import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Slider from "./Slider";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});
function HeroSection() {
  return (
    <div>
      <div className="hero-section ">
        <div className="container">
          <Grid container>
            <Grid item md={6} lg={6} xs={12} sm={12}>
              {" "}
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                <Slider />
              </div>
              <br />
            </Grid>
            <Grid md={6} lg={6} xs={12} sm={12}>
              {" "}
              <div data-aos="fade-up" data-aos-duration="1000">
                <p
                  className="hero-top"
                  style={{ textAlign: "center", fontSize: "13px" }}
                >
                  Making Collecting Enjoyable
                </p>{" "}
                <h1
                  className="hero-text"
                  style={{ textAlign: "center", fontSize: "28px" }}
                >
                  Ape Mansionaire
                  <br /> Club
                </h1>
              </div>
              <br />
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <a href="https://www.subber.xyz/amc" target="_blank">
                  <Button
                    className="myButton effect7"
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    REGISTER FOR WHITELIST
                  </Button>
                </a>

                <br />
                <br />
                <a href="https://discord.gg/cb26JgRhzw" target="_blank">
                  {" "}
                  <Button className="myButton">JOIN DISCORD</Button>
                </a>
                <br />
                <br />
                <Button className="myButton">EXPLORER</Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <br />
      </div>
      <div data-aos="fade-up" data-aos-duration="1">
        <section class="spikes"></section>
      </div>
    </div>
  );
}

export default HeroSection;
