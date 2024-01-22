// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import AddToCart from "./AddtoCart";
import Cart from "./Cart";

const foodItems = [
  {
    id: 1,
    name: "Burger",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 3,
    name: "Pares",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 4,
    name: "Lugaw",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 5,
    name: "Adobo",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 6,
    name: "tinola",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 7,
    name: "Mani",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 8,
    name: "Mango",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 9,
    name: "Sinigang",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 10,
    name: "Mechado",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 11,
    name: "Crispy pata",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 12,
    name: "Fried Chicken",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 13,
    name: "SUshi",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 14,
    name: "Sisig",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 15,
    name: "Ice Cream",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 16,
    name: "Jolibee",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 17,
    name: "Mcdo",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 18,
    name: "Bonchon",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 19,
    name: "Salmon",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  {
    id: 20,
    name: "Pork",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
  },
  // Add more food items with similar structure
];

const Menu = () => {
  const [sortedItems, setSortedItems] = useState([...foodItems]);
  const [sortOption, setSortOption] = useState("name");
  const [cartItems, setCartItems] = useState([]);

  const handleSort = () => {
    const sorted = [...sortedItems].sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      }
      return 0;
    });
    setSortedItems(sorted);
  };

  const handleOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const addToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="menu-container">
      <h1>Food Menu</h1>
      <label>
        Sort by:
        <select value={sortOption} onChange={handleOptionChange}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
      <button onClick={handleSort}>Sort</button>
      <div className="menu-items">
        {sortedItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <AddToCart item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Menu;
