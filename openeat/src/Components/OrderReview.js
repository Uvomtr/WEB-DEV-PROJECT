// OrderReview.js
import React from "react";
import "./OrderReview.css"; // Add a separate CSS file for styling

const OrderReview = ({
  cartItems,
  handleEditOrder,
  handleProceedToPayment,
}) => {
  return (
    <div className="order-review-popup">
      <h2>Order Review</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x{item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleEditOrder}>Edit Order</button>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default OrderReview;
