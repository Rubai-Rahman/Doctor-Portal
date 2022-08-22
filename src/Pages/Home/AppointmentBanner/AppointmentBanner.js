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
      <Grid container spacing={2} columns={16}>
        <Grid item xs={12} md={6}>
          <img style={{ width: 400, marginTop: "-95px" }} src={doc} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            marginLeft: "100px",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 3 }}
              style={{ color: "#19D3AE" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ my: 3 }} style={{ color: "white" }}>
              Make an appointment Today
            </Typography>
            <Typography variant="body1" style={{ color: "white" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point
            </Typography>
            <br />
            <Link style={{ textDecoration: "none" }} to="/appointment">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#19D3AE",
                  backgroundImage:
                    "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
