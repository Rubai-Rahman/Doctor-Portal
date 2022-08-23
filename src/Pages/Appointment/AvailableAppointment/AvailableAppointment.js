import { Alert, AlertTitle, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings  = [
    {id:1,
    name:'Teeth Orthodontics',
    time:"08.00 AM - 09.00 AM",
    space:10,},
    {id:2,
    name:'Cavity Protection',
    time:"07.00 AM - 08.00 AM",
    space:5,},
    {id:3,
    name:'Cosmetic Dentistry',
    time:"10.00 AM - 07.00 AM",
    space:8,},
    {id:4,
    name:'Teeth Cleaning',
    time:"06.00 PM - 07.00 PM",
    space:5,},
    {id:5,
    name:'Pediatric Dental',
    time:"06.00 PM - 07.00 PM",
    space:9,},
    {id:6,
    name:'Oral Surgery',
    time:"06.00 PM - 07.00 PM",
    space:10,}
]
const AvailableAppointment = ({ date }) => {
  const [bookingSuccess,setBookingSuccess] = useState(false);
  return (
    <Container>
      {bookingSuccess&& (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
            Booking Created Successfully
            </Alert>
          )}
      <Typography
        variant="h4"
        sx={{ my: 3, fontWeight: 600, color: "#19D3AE" }}
      >
        Available Appointment {date.toDateString()}{" "}
      </Typography>
      <Typography variant="h4" sx={{ my: 3, fontSize: 22, color: "#939393" }}>
        Please Select a service{" "}
      </Typography>
        <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking key={booking.id}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
                date={date}></Booking>)
            }
        </Grid>
    </Container>
  );
};

export default AvailableAppointment;
