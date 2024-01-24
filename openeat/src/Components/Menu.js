// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import AddToCart from "./AddtoCart";
import Cart from "./Cart";

const foodItems = [
  {
    id: 1,
    name: "A Mano",
    description: "A Mano has become a Metro Manila staple, offering an enticing blend of authentic and exciting Italian specialties.",
    image: "AMMano.png",
    price: 19,
    category: "beef",
  },
  {
    id: 2,
    name: "Antonio's",
    description: "Antonio's is a culinary gem in Tagaytay City, known for delivering an exceptional dining experience in a charming setting.",
    image: "burger.jpg",
    price: 55,
    category: "beef",
  },
  {
    id: 3,
    name: "Blackbird at The Nielson Tower",
    description: "Blackbird at The Nielson Tower is a fine dining institution with art deco interiors, world-class service, and refined international cuisine.",
    image: "burger.jpg",
    price: 68,
    category: "beef",
  },
  {
    id: 4,
    name: "Benjarong",
    description: "Benjarong stands as a cherished establishment, offering authentic Thai cuisine and now presenting creative, modern tasting menus.",
    image: "burger.jpg",
    price: 250,
    category: "beef",
  },
  {
    id: 5,
    name: "China Blue",
    description: "China Blue by Jereme Leung is a stylish establishment offering artful, innovative, and undeniably delicious modern Chinese fare.",
    image: "burger.jpg",
    price: 300,
    category: "beef",
  },
  {
    id: 6,
    name: "Gallery",
    description: "Gallery by Chele is Chef Chele Gonzalez’s signature dining destination, showcasing a fusion of Filipino produce, sustainable practices, and global techniques.",
    image: "burger.jpg",
    price: 100,
    category: "beef",
  },
  {
    id: 7,
    name: "Hapag",
    description: "Hapag is a modern Filipino restaurant known for creative takes on familiar dishes while proudly showcasing native ingredients.",
    image: "burger.jpg",
    price: 2143142,
    category: "beef",
  },
  {
    id: 8,
    name: "Helm",
    description: "Helm by Josh Boutwood promises a true chef's table experience with Chef Josh Boutwood's creative prowess.",
    image: "burger.jpg",
    price: 213,
    category: "beef",
  },
  {
    id: 9,
    name: "Kazunori",
    description: "Kazunori is a Japanese staple guaranteeing satisfaction, whether for a quick lunch, casual dinner, or a memorable omakase experience.",
    image: "burger.jpg",
    price: 23,
    category: "pork",
  },
  {
    id: 10,
    name: "Lusso",
    description: "Lusso brings truly luxe French and Italian dishes to discerning patrons with Chef Margarita Forés’ signature touch.",
    image: "burger.jpg",
    price: 10.99,
    category: "beef",
  },
  {
    id: 11,
    name: "M Dining",
    description: "M Dining is a no-brainer choice for an exquisite meal in an elegant restaurant, where Chef Tom Bascon’s Asian inflexions on European cuisine shine.",
    image: "burger.jpg",
    price: 10.99,
    category: "pork",
  },
  {
    id: 12,
    name: "Mecha Uma",
    description: "Mecha Uma is a modern Japanese omakase experience, showcasing Chef Bruce Ricketts' culinary excellence.",
    image: "burger.jpg",
    price: 10.99,
    category: "chicken",
  },
  {
    id: 13,
    name: "Metiz",
    description: "Metiz champions Filipino ingredients and local producers through modern dishes grounded in memories of regional flavors.",
    image: "burger.jpg",
    price: 10.99,
    category: "others",
  },
  {
    id: 14,
    name: "Metronome",
    description: "Metronome, whether for hearty French bistro fare or a wildly creative tasting menu, never misses a beat at this eye-catching establishment.",
    image: "burger.jpg",
    price: 20,
    category: "pork",
  },
  {
    id: 15,
    name: "Mōdan",
    description: "Mōdan presents a brilliant, highly personal modern Japanese tasting menu like no other under the expertise of Chef Jorge Mendez.",
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
