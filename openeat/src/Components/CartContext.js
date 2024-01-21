import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Your logic for adding items to the cart
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    // Your logic for removing items from the cart
    setCartItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
