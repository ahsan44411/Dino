import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import div from "./div.png";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import MobileFooter from "../Component/Footer/MobileFooter";
import HeroSection from "../Component/Hero/HeroSection";
import MobileHeroSection from "../Component/Hero/MobileHeroSection";
import About from "../Component/About/About";
import MobileAbout from "../Component/About/MobileAbout";
import What from "../Component/What/What";
import Lore from "../Component/What/Lore";
import MobileLore from "../Component/What/MobileLore";
import Team from "../Component/Team/Team";
import MobileTeam from "../Component/Team/MobileTeam";
import WhatMobile from "../Component/What/WhatMobile";
import "./Cursor.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Garden() {
  const theme = useTheme();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div className="garden">
      {/* THIS JAVASCRIPT CODE IS FOR Header of the Park Page*/}

      {/* <Slider /> */}
      {!smallScreen && (
        <div className="div">
          <Navbar />

          <HeroSection />
          <br />
          <br />
          <About />
          <br />
          <img src={div} style={{ width: "100%" }} />
          <br />
          <What />
          <img src={div} style={{ width: "100%" }} />
          <br />
          <Lore />
          <br />
          <img src={div} style={{ width: "100%" }} />
          <br />
          <Team />
          <br />
          <Footer />
        </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
      {smallScreen && (
        <div className="div">
          <Navbar />

          <MobileHeroSection />
          <br />
          <br />
          <MobileAbout />
          <br />
          <img src={div} style={{ width: "100%" }} />
          <br />
          <WhatMobile />
          <br />
          <img src={div} style={{ width: "100%" }} />
          <br />
          <MobileLore />
          <br />
          <img src={div} style={{ width: "100%" }} />

          <MobileTeam />
          <MobileFooter />
        </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}
    </div>
  );
}

export default Garden;
