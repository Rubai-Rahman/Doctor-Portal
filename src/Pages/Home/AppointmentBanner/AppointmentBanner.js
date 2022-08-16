import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doc from "../../../assets/images/doctor.png";
import bg from "../../../assets/images/appointment.png";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const appointmentBg = {
  background: `url(${bg})`,
  marginTop: 150,
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img  style={{ width: 400, marginTop: "-120px" }} src={doc} alt="doctor img" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>APPOINTMENT</Typography>
          <Typography>Make an Appointment Today</Typography>
          <Typography>
            <p>
              It is a long established fact that a reader will be distractby the
              readable content of a page when looki;ng at its
            </p>
          </Typography>
          <Link to="/">
            <Button>LEARN MORE</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
