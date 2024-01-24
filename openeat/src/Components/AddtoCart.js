// AddToCart.js
import React, { useState } from "react";

const AddToCart = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Call the addToCart function passed as a prop in Menu.js
    addToCart(item, quantity);
    // Reset quantity to 1 after adding to the cart
    setQuantity(1);
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
