// Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePayment = () => {
    // Implement your payment logic here
    // For now, let's just log the payment details
    console.log("Payment Successful!");
    console.log("Ordered Items:", cartItems);
    console.log("Total Price:", getTotalPrice());
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
