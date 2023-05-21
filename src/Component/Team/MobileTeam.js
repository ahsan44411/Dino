import React from "react";
import { Grid } from "@mui/material";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import flip from "./Kael.png";
import flip2 from "./Mara.png";
import flip3 from "./tarr.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 9500,
});
function HeroSection() {
  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="hero-text" style={{ textAlign: "center" }}>
          TEAM
        </h1>
      </div>

      <Grid container spacing={1}>
        <Grid item md={4} lg={4} xs={6} sm={6} style={{ textAlign: "center" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <MDBCard className="team_card mobcard_team_center">
              <MDBContainer className="my-5 d-flex justify-content-center">
                <img
                  src={flip}
                  className=""
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "200%",
                  }}
                />
              </MDBContainer>
              <div className="mobileteam_names_text">
                {" "}
                <MDBCardTitle
                  style={{ fontSize: "35px" }}
                  className="hero-text"
                >
                  Kael
                </MDBCardTitle>
                <MDBCardText className="about-top">CEO & Developer</MDBCardText>
              </div>
            </MDBCard>
          </div>
        </Grid>
        <Grid item md={4} lg={4} xs={6} sm={6} style={{ textAlign: "center" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <MDBCard className="team_card mobcard_team_center">
              <MDBContainer className="my-5 d-flex justify-content-center">
                <img
                  src={flip3}
                  className=""
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "200%",
                  }}
                />
              </MDBContainer>
              <div className="mobileteam_names_text">
                <MDBCardTitle
                  style={{ fontSize: "35px" }}
                  className="hero-text"
                >
                  Tala
                </MDBCardTitle>
                <MDBCardText className="about-top">SMM</MDBCardText>
              </div>
            </MDBCard>
          </div>
        </Grid>

        <Grid item md={4} lg={4} xs={6} sm={6} style={{ textAlign: "center" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <MDBCard className="team_card mare_card_mobile mobcard_team_center">
              <MDBContainer className="my-5 d-flex justify-content-center">
                <img
                  src={flip2}
                  className=""
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "200%",
                  }}
                />
              </MDBContainer>
              <div className="mobileteam_names_text">
                <MDBCardTitle
                  style={{ fontSize: "35px" }}
                  className="hero-text"
                >
                  Mara
                </MDBCardTitle>
                <MDBCardText className="about-top">Artist & Writer</MDBCardText>
              </div>
            </MDBCard>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
