import { Button, Grid } from "@mui/material";
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
      <Grid item xs={12} md={4}>
        <Paper elevation={3}>
          <h2>{name}</h2>
          <h4>{time}</h4>
          <p> {space} Space Available</p>
          <Button onClick={handleOpen} variant="contained">
            Book Appointment
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
