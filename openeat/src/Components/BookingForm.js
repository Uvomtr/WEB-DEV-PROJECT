import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [comments, setComments] = useState("");

  const handleItemToggle = (itemName) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemName)) {
        // Remove the item if already selected
        return prevSelectedItems.filter((item) => item !== itemName);
      } else {
        // Add the item if not selected
        return [...prevSelectedItems, itemName];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      name,
      address,
      phoneNumber,
      selectedItems,
      comments,
    });
  };

  return (
    <form className="food-delivery-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Delivery Address:
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>

      <fieldset>
        <legend>Selected Items</legend>
        <div className="food-items">
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("Burger")}
              onChange={() => handleItemToggle("Burger")}
            />
            Burger
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("Pizza")}
              onChange={() => handleItemToggle("Pizza")}
            />
            Pizza
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("Salad")}
              onChange={() => handleItemToggle("Salad")}
            />
            Salad
          </label>

          {/* Add more food items as needed */}
        </div>
      </fieldset>

      <label>
        Additional Comments:
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </label>

      <button type="submit">Place Order</button>
    </form>
  );
};

export default BookingForm;
