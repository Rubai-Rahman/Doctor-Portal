import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";
const bannerBg = {
  background: `url(${bg})`,
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
            <Typography>
              <h1>Your New Smile Starts Here</h1>
            </Typography>
            <Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                unde laborum error minus dolorum temporibus culpa rerum
                consequuntur incidunt quam?
              </p>
            </Typography>
            <Link to="/appointment">
              <Button variant="contained">GET APPOINTMENT</Button>
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
