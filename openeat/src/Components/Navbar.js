import React, { useState } from "react";
import Logo from "./Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Modal from "./BookingModal";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  const handleBookingButtonClick = () => {
    setOpenBookingModal(true);
  };

  const closeBookingModal = () => {
    setOpenBookingModal(false);
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#menu-section">Menu</a>
        <a href="#about-section">About</a>
        <a href="#testimonial-section">Testimonials</a>
        <a href="#contact-section">Contact</a>
        {/* Remove the following button */}
        {/* <button onClick={handleCartClick}>
          <ShoppingCartRoundedIcon className="navbar-cart-icon" />
        </button> */}
        <button className="primary-button" onClick={handleBookingButtonClick}>
          Bookings Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Modal open={openBookingModal} onClose={closeBookingModal}>
        <h2>Booking Information</h2>
        <button onClick={closeBookingModal}>Close</button>
      </Modal>
    </nav>
  );
};

export default Navbar;