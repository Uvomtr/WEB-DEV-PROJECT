// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import AddToCart from "./AddtoCart";
import Cart from "./Cart";

const foodItems = [
  {
    id: 1,
    name: "A Mano",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "AMano.png",
    price: 19,
    category: "beef",
  },
  {
    id: 2,
    name: "The Aristocrat Restaurant",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 55,
    category: "beef",
  },
  {
    id: 3,
    name: "Barbara's Heritage Restaurant",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 68,
    category: "beef",
  },
  {
    id: 4,
    name: "Ilustrado Restaurant",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 250,
    category: "beef",
  },
  {
    id: 5,
    name: "Yurakuen Japanese Restaurant ",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 300,
    category: "beef",
  },
  {
    id: 6,
    name: "9 SPOONS",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 100,
    category: "beef",
  },
  {
    id: 7,
    name: "Market Cafe",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 2143142,
    category: "beef",
  },
  {
    id: 8,
    name: "Cafe Adriatico",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 213,
    category: "beef",
  },
  {
    id: 9,
    name: "Bistro Remedios",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 23,
    category: "pork",
  },
  {
    id: 10,
    name: "Rado's Lechon",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "beef",
  },
  {
    id: 11,
    name: "Crispy pata",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "pork",
  },
  {
    id: 12,
    name: "Fried Chicken",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "chicken",
  },
  {
    id: 13,
    name: "SUshi",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "others",
  },
  {
    id: 14,
    name: "Sisig",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 20,
    category: "pork",
  },
  {
    id: 15,
    name: "Ice Cream",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 20,
    category: "others",
  },
  {
    id: 16,
    name: "Jolibee",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "beef",
  },
  {
    id: 17,
    name: "Mcdo",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "beef",
  },
  {
    id: 18,
    name: "Bonchon",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 10.99,
    category: "pork",
  },
  {
    id: 19,
    name: "Salmon",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 2000,
    category: "fish",
  },
  {
    id: 20,
    name: "Pork",
    description: "Delicious beef burger with cheese and vegetables.",
    image: "burger.jpg",
    price: 350,
    category: "pork",
  },
];

const Menu = () => {
  const [sortedItems, setSortedItems] = useState([...foodItems]);
  const [sortOption, setSortOption] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Add sort order state

  const handleSort = () => {
    const sorted = [...sortedItems].sort((a, b) => {
      if (sortOption === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortOption === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });

    setSortedItems(sorted);

    // Toggle the sort order for the next click
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems([...cartItems, newItem]);
  };

  const filteredItems =
    selectedCategory === "all"
      ? sortedItems
      : sortedItems.filter((item) => item.category === selectedCategory);

  return (
    <div id="menu-section">
      <div className="menu-container">
        <div className="menu-filters">
          <label>
            Sort by:
            <select value={sortOption} onChange={handleOptionChange}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </label>
          <label>
            Filter by category:
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="beef">Beef</option>
              <option value="pork">Pork</option>
              <option value="vegan">Vegan</option>
              <option value="fish">Fish</option>
              <option value="others">Others</option>
            </select>
          </label>
          <button onClick={handleSort}>Sort</button>
        </div>
        <div className="menu-items">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: php{item.price}</p>
              <AddToCart item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>

        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Menu;
