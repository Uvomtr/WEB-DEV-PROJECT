// BookingModal.js
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BookingModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleBookingSubmit = () => {
    // Perform any necessary actions with the booking information here
    console.log("Booking Information:", { name, email, address });

    // Close the modal after processing the booking
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className="centered-modal" // Apply the centered-modal class
      >
        <Box
          className="centered-modal-box" // Apply the centered-modal-box class
          sx={{ width: 300, padding: 2, background: "white", borderRadius: 8 }}
        >
          <h2>Booking Information</h2>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={handleAddressChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleBookingSubmit}
            style={{ marginTop: 10 }}
          >
            Submit Booking
          </Button>
          <Button fullWidth onClick={onClose} style={{ marginTop: 5 }}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BookingModal;
