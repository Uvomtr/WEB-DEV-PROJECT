import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./BookingPopup.css";

const BookingPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [location, setLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleBookNow = () => {
    // Handle booking logic here
    // You can send the form data to your backend or perform any necessary actions
    console.log("Booking data:", {
      name,
      username,
      email,
      password,
      restaurant,
      location,
      bookingDate,
    });

    // Close the modal
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className="modal-container">
        <div>
          <TextField
            className="text-field"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Restaurant"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Booking Date"
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginTop: '15px' }}
          />

          <Button
            style={{ marginTop: '15px', background: '#5981b5' }}
            className="book-button"
            variant="contained"
            color="primary"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default BookingPopup;
