import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpen = () => setOpenBooking(true);
  const handleClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ margin: 2 }}>
          <Typography
            variant="h4"
            sx={{
              mt: 3,
              fontWeight: 500,
              fontSize: 30,
              color: "#19D3AE",
              padding: 2,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h4"
            sx={{ my: 3, fontSize: 22, color: "#FFFFf", fontWeight: 600 }}
          >
            {time}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 15, color: "#939393" }}>
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ my: 3, backgroundColor: "#19D3AE" }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        openBooking={openBooking}
        handleClose={handleClose}
        booking={booking}
      ></BookingModal>
    </>
  );
};

export default Booking;
