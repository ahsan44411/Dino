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
            <Grid md={6} lg={6} xs={12} sm={12}>
              {" "}
              <br />
              <br />
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="hero-top">Making Collecting Enjoyable</p>{" "}
                <h1 className="hero-text">
                  Ape Mansionaire
                  <br /> Club
                </h1>
                <br />
              </div>
              <br />
              <br />
              <a href='https://www.subber.xyz/amc' target="_blank">
              <Button className="myButton effect7">
              REGISTER FOR WHITELIST
            </Button>
              </a>
             
              &nbsp; &nbsp;
              <a href="https://discord.gg/cb26JgRhzw" target="_blank">
                <Button className="myButton effect7">JOIN DISCORD</Button>
              </a>
              &nbsp; &nbsp;
              <Button className="myButton ">EXPLORER</Button>
            </Grid>
            <Grid item md={6} lg={6} xs={6} sm={6}>
              {" "}
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                <Slider />
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
