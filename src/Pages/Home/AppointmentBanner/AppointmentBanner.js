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
          <img
            style={{ width: 400, marginTop: "-120px" }}
            src={doc}
            alt="doctor img"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              fontSize: "20",
              fontWeight: 700,
              color: "#19D3AE",
              alignItems: "start",
              
            }}
          >
            APPOINTMENT
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              fontWeight: 400,
              color: "#FFFF",
              marginBottom: 10,
            }}
          >
            Make an Appointment Today
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              color: "#FFFFFF",
              marginBottom: 10,
              textAlign: "start",
            }}
          >
            It is a long established fact that a reader will be distractby the
            readable content of a page when looki;ng at its
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
            }}
            to="/appointment"
          >
            <Button color="inherit">Get Appointment</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
