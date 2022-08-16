import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
  const handleBooking =e =>{
    alert("sumbiting")
    e.preventDefault();
    handleClose()
  }
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBooking} > 
            <TextField
              style={{ width: "90%" }}
              disabled
              id="filled-disabled"
              defaultValue={time}
            />
            <TextField
              style={{ width: "90%" }}
              id="filled-disabled"
              defaultValue="Name"
            />
            <TextField
              style={{ width: "90%", m: 1 }}
              id="filled-disabled"
              defaultValue="Email"
            />
            <TextField
              style={{ width: "90%" }}
              id="filled-disabled"
              defaultValue="Phone Number"
            />
            <TextField
              disabled
              style={{ width: "90%" }}
              id="filled-disabled"
              defaultValue={date}
            />
            <Button type="submit" variant="contained">
              send
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
