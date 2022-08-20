import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url(${bg}) `,
};
const verticalCenter = {};
const frontImg = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 450,
  height: 300,
  margin: 100,
};
const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box style={verticalCenter}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, fontSize: 48, color: "#FFFFFF" }}
            >
              Your New Smile Starts Here
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: 16, color: "#FFFFFF" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              unde laborum error minus dolorum temporibus culpa rerum
              consequuntur incidunt quam?
            </Typography>
            <Link
              style={{
                position: "absolute",
                width: 150,
                height: 40,
                textDecoration: "none",
                backgroundImage:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                borderRadius: 7,
                color: "white",
                textAlign: "justify",
                marginRight:40
              }}
              to="/appointment"
            >
              <Button color="inherit">Get Appointment</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <img style={frontImg} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
