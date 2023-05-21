import React from "react";
import { Grid } from "@mui/material";
import { MDBCard } from "mdb-react-ui-kit";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { FiMoreHorizontal } from "react-icons/fi";
import image1 from "./why.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});
function HeroSection() {
  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-duration="1000">
        <p style={{ textAlign: "center", color: "#000" }}>
          {" "}
          <HorizontalRuleIcon className="dividerh" /> What we do
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="hero-text" style={{ textAlign: "center" }}>
          First-Class Art With a Backstory & A Plan For Future
        </h1>
      </div>
      <br />
      <div data-aos="fade-up" data-aos-duration="1000">
        <p className="about-top">
          {" "}
          At the AMC, we are committed to creating breathtaking artwork that not
          only delights our community but also
          <br /> enhances the character and value of your collection. Our top
          priority is to consistently produce beautiful and stunning art
          <br /> pieces for your enjoyment.
        </p>
      </div>{" "}
      <br />
      <br />
      <Grid container spacing={7}>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          {" "}
         
         
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <p className="about-topu">
              {" "}
              The Ape Mansionaire Club brand will grow alongside our unique and
              powerful apes, guided by our passionate team with extensive
              experience in art creation, metaverse integration, and digital
              gaming.
              <br />
              <br />
              With a strong interest in creating unforgettable digital
              experiences, we are working on many avenues in the background,
              where you can have many other ways to care for your own digital
              apes.
              <br />
              <br />
              Together with our community, we aim to build a meaningful and
              engaging space for all AMC owners even before the big mint. As a
              valued member, you'll have exclusive access to our upcoming shop,
              digital events, competitions, beta game testing, and much more.
              <br />
              <br />
              Our objectives also include expanding our reach through
              multi-chain launches and collaborations with other NFT projects.
              We want to showcase the unique and powerful nature of our AMC and
              demonstrate the value of being part of our community.
            </p>
          </div>
          
        
        
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          xs={12}
          sm={12}
          style={{ textAlign: "center" }}
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src={image1}
              alt="Avatar"
              style={{
                width: "100%",
                
                borderRadius: "20px",
                border: "10px Solid #141414d5 ",
              }}
            />{" "}
            <br />
          </div>
        </Grid>
      </Grid>
      <div className="center_what">
       
        <div data-aos="fade-up" data-aos-duration="1000">
          {" "}
          <p className="about-topu">
            <FiMoreHorizontal />
            &nbsp; Curating high-quality artwork for our community's portfolios
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="about-topu">
            <FiMoreHorizontal />
            &nbsp; Cultivating a thriving, global community of like-minded
            individuals
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="about-topu">
            <FiMoreHorizontal />
            &nbsp; Collaborating with esteemed projects to advance the NFT space
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="about-topu">
            <FiMoreHorizontal />
            &nbsp; Cross-chain launch to reach a wider audience
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="about-topu">
            <FiMoreHorizontal />
            &nbsp; Granting exclusive access to unique Mansions to all Ape
            Mansionaire Club holders
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
