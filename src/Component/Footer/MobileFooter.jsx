import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../Navbar/log.png";
import discord from "./image/discord.png";
import facebook from "./image/facebook.png";
import insta from "./image/insta.png";
import twit from "./image/twit.png";
import tik from "./image/tik.png";
import you from "./image/you.png";
import pin from "./image/pin.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MDBFooter className="text-center text-lg-start text-muted footer_bg">
      <section className="">
        <br />

        <MDBContainer className="text-center text-md-start mt-1">
          <MDBRow className="mt-1">
            <MDBCol md="12" lg="12" xl="12" className="mx-auto mb-">
              <h6 className="text-uppercase fw-bold mb- text-center">
                <img src={logo} style={{ width: "25%" }} />
              </h6>
              <br />
              <p className="text-center about-top">
                Our Ape Mansionaire Club is a gathering of individuals
                passionate about digital art, innovation, and collaboration. We
                bring together creators, entrepreneurs, artists and innovators
                to build a global community. Our focus is on creating
                high-quality digital artworks while providing a platform for
                experimentation and collaboration.
              </p>
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <hr className="solid" />
      <div className="text-center about-top">
        © 2023 Copyright : Ape Mansionaire Club
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"></a>
      </div>
      <br />
      <div class="icon-bar">
        <a
          href="https://discord.gg/cb26JgRhzw"
          class="facebook am"
          target="_blank"
        >
          <FaDiscord style={{ fontSize: "14px" }} />
        </a>
        <a
          href="https://twitter.com/apeordinals/"
          class="twitter am"
          target="_blank"
        >
          <FaTwitter style={{ fontSize: "14px" }} />
        </a>
        <a
         
          class="google am"
          style={{ fontStyle: "italic", color: "#fff" }}
          target="_blank"
          onClick={handleOpen}
        >
          MP
        </a>
      </div>

      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal_bg">
        <Typography id="modal-modal-title" variant="h5" component="h2">
        Marketplaces
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <a href="https://ordinals.market/" target="_blank">
            <Button
              className="myButton effect7"
              style={{
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Ordinals
            </Button>
          </a>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <a href="https://gamma.io/" target="_blank">
            <Button
              className="myButton effect7"
              style={{
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Gamma
            </Button>
          </a>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <a href="https://magiceden.io/ordinals" target="_blank">
            <Button
              className="myButton effect7"
              style={{
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Magiceden
            </Button>
          </a>
        </Typography>
      </Box>
    </Modal>
    </MDBFooter>
  );
}
