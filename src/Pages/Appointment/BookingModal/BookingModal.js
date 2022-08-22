import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ booking, handleClose, openBooking, date }) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo)
    setBookingInfo(newInfo)
    
  };
  console.log("hello");

  const handleBooking = (e) => {
    const appointment = {
      time,
      serviceName: name,
      date: date.toLocalDateString(),
    };

    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#19D3AE",
              fontWeight: 600,
              fontSize: 25,
              marginBottom: 4,
              textAlign: "center",
            }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBooking}>
            <TextField
              style={{ width: "90%" }}
              disabled
              id="filled-disabled"
              defaultValue={time}
            />
            <TextField
              style={{ width: "90%" }}
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
            />
            <TextField
              style={{ width: "90%", m: 1 }}
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
            />
            <TextField
              style={{ width: "90%" }}
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
            />
            <TextField disabled style={{ width: "90%" }} defaultValue={date} />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "30%",
                my: 1,
                mr: 6,
                backgroundImage:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                color: "white",
                float: "right",
              }}
            >
              send
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
