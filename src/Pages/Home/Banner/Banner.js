import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url(${bg}) `,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};

const Banner = () => {
  return (
    <Container style={{ bannerBg }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, color: "#1B2631 " }}
            >
              Your New Smile Starts Here
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#A6ACAF", fontWeight: 300, my: 3 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quas, labore.
            </Typography>
            <Link
              style={{ textDecoration: "none", fontSize: 20, color: "white" }}
              to="/appointment"
            >
              <Button
                variant="contained"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                }}
              >
                GET APPOINTMENT
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} style={{ verticalCenter, marginTop: "90px" }}>
          <img style={{ width: "450px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
