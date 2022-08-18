import { Container, Grid } from "@mui/material";
import React from "react";
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
  return (
    <Container>
      <h2>AvailableAppointment on{date.toDateString()} </h2>
        <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking key={booking.id}
                booking={booking}
                date={date}></Booking>)
            }
        </Grid>
    </Container>
  );
};

export default AvailableAppointment;