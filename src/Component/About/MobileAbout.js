import React from "react";
import { Grid } from "@mui/material";
import { MDBCard } from "mdb-react-ui-kit";
import { RxDividerHorizontal } from "react-icons/rx";
import image1 from "./mo1.png";
import image2 from "./mo2.png";
import image3 from "./mo3.png";
import image4 from "./mo4.png";
import AOS from "aos";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});
function HeroSection() {
  return (
    <div className="container">
      <>
        <p style={{ textAlign: "center", color: "#000" }}>
          <HorizontalRuleIcon className="dividerh" />
          About us
        </p>
      </>
      <>
        <h1
          className="hero-text"
          style={{ textAlign: "center", fontSize: "30px" }}
        >
          Ape Mansionaire Club
        </h1>
      </>

      <br />
      <div data-aos="fade-up" data-aos-duration="1000">
        {" "}
        <p className="about-top">
          {" "}
          We welcome you to the Ape Mansionaire Club, a unique NFT collection of
          1000 brave and powerful Apes who have stood the test of time,
          destruction and the post-apocalyptic ruins of Ordinals City. These
          Apes have taken over the Mansions of the city, becoming the
          Mansionaires,
           a fearsome group of apes who command respect and loyalty from
          all who cross their path.
        </p>{" "}
      </div>

      <Grid container spacing={7}>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <Grid container spacing={0}>
            <Grid item md={6} lg={6} xs={6} sm={6}>
              {" "}
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                {" "}
                <>
                  <div class="img cardz">
                    <img src={image1} className="imageho" />

                    <img src={image2} className="hover_img imageho" />
                  </div>
                </>
              </div>
            </Grid>
            <Grid item md={6} lg={6} xs={6} sm={6}>
              {" "}
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                {" "}
                <>
                  <div class="img cardx">
                    <img src={image3} className="imageho" />

                    <img src={image4} className="hover_img imageho" />
                  </div>
                </>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <br />
          <br />

          <br />
          <br />

          <br />
          <br />
          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <p className="about-topu">
              {" "}
              As a member of the Ape Mansionaire Club, you'll own a piece of
              this history and become a part of this powerful community. But
              owning an Ape Mansionaire Club NFT is more than just owning a
              digital asset – it's a responsibility. You'll need to love and
              nurture your Ape, and always remain vigilant in the face of
              danger.
              <br />
              <br />
              But fear not, for you'll never be alone in your journey. Your Ape
              will always be by your side, protecting you and guiding you
              through the challenges of the post-apocalyptic world.
              <br />
              <br />
              As part of the Ape Mansionaire Club, you'll have access to many
              thrilling events and festivals, including collaborations with
              other NFT projects, and you'll have the opportunity to help shape
              the future of this growing community. Together, we'll secure our
              position in web3, and continue to evolve and grow the Ape
              Mansionaire Club brand.
              <br />
              <br />
              So join us on our post-apocalyptic adventures, and become a part
              of this powerful and friendly community. Will you be one of only
              1000 lucky AMC owners?
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
