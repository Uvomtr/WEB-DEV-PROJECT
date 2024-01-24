import React, { useState } from "react";
import OrderReview from "./OrderReview";

const Cart = ({ cartItems, clearCart }) => {
  const [isOrderReviewOpen, setOrderReviewOpen] = useState(false);
  const [isClearCartDialogOpen, setClearCartDialogOpen] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePayment = async () => {
    console.log("Processing payment...");

    // Simulate an asynchronous payment process
    try {
      // Simulate a delay (e.g., contacting a payment gateway)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Payment successful
      console.log("Payment Successful!");
      console.log("Ordered Items:", cartItems);
      console.log("Total Price:", getTotalPrice());
    } catch (error) {
      // Payment failed
      console.error("Payment Failed:", error);
    }
  };

  const handleEditOrder = () => {
    // Implement logic to allow the customer to edit the order
    console.log("Editing Order...");
  };
  const handleProceedToPayment = () => {
    setOrderReviewOpen(false);
    handlePayment();
  };

  const handleClearCart = () => {
    // Show the confirmation dialog
    setClearCartDialogOpen(true);
  };

  const confirmClearCart = () => {
    // Clear the cart and close the confirmation dialog
    clearCart(); // Assuming clearCart resets the state to an empty array
    setClearCartDialogOpen(false);
  };

  const cancelClearCart = () => {
    // Close the confirmation dialog without clearing the cart
    setClearCartDialogOpen(false);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <button onClick={() => setOrderReviewOpen(true)}>Review Order</button>
          {isOrderReviewOpen && (
            <OrderReview
              cartItems={cartItems}
              handleEditOrder={handleEditOrder}
              handleProceedToPayment={handleProceedToPayment}
            />
          )}
          <p>Total: ${getTotalPrice()}</p>
          <button onClick={handleClearCart}>Clear Cart</button>

          {/* Confirmation dialog for clearing the cart */}
          {isClearCartDialogOpen && (
            <div className="confirmation-dialog">
              <p>Are you sure you want to clear the cart?</p>
              <button onClick={confirmClearCart}>Yes</button>
              <button onClick={cancelClearCart}>No</button>
            </div>
          )}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
