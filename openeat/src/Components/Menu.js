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
    category: "european",
  },
  {
    id: 2,
    name: "Antonio's",
    description: "Antonio's is a culinary gem in Tagaytay City, known for delivering an exceptional dining experience in a charming setting.",
    image: "burger.jpg",
    price: 55,
    category: "international",
  },
  {
    id: 3,
    name: "Blackbird at The Nielson Tower",
    description: "Blackbird at The Nielson Tower is a fine dining institution with art deco interiors, world-class service, and refined international cuisine.",
    image: "burger.jpg",
    price: 68,
    category: "asian",
  },
  {
    id: 4,
    name: "Benjarong",
    description: "Benjarong stands as a cherished establishment, offering authentic Thai cuisine and now presenting creative, modern tasting menus.",
    image: "burger.jpg",
    price: 250,
    category: "asian",
  },
  {
    id: 5,
    name: "China Blue",
    description: "China Blue by Jereme Leung is a stylish establishment offering artful, innovative, and undeniably delicious modern Chinese fare.",
    image: "burger.jpg",
    price: 300,
    category: "asian",
  },
  {
    id: 6,
    name: "Gallery",
    description: "Gallery by Chele is Chef Chele Gonzalez’s signature dining destination, showcasing a fusion of Filipino produce, sustainable practices, and global techniques.",
    image: "burger.jpg",
    price: 100,
    category: "international",
  },
  {
    id: 7,
    name: "Hapag",
    description: "Hapag is a modern Filipino restaurant known for creative takes on familiar dishes while proudly showcasing native ingredients.",
    image: "burger.jpg",
    price: 2143142,
    category: "asian",
  },
  {
    id: 8,
    name: "Helm",
    description: "Helm by Josh Boutwood promises a true chef's table experience with Chef Josh Boutwood's creative prowess.",
    image: "burger.jpg",
    price: 213,
    category: "international",
  },
  {
    id: 9,
    name: "Kazunori",
    description: "Kazunori is a Japanese staple guaranteeing satisfaction, whether for a quick lunch, casual dinner, or a memorable omakase experience.",
    image: "burger.jpg",
    price: 23,
    category: "asian",
  },
  {
    id: 10,
    name: "Lusso",
    description: "Lusso brings truly luxe French and Italian dishes to discerning patrons with Chef Margarita Forés’ signature touch.",
    image: "burger.jpg",
    price: 10.99,
    category: "european",
  },
  {
    id: 11,
    name: "M Dining",
    description: "M Dining is a no-brainer choice for an exquisite meal in an elegant restaurant, where Chef Tom Bascon’s Asian inflexions on European cuisine shine.",
    image: "burger.jpg",
    price: 10.99,
    category: "european",
  },
  {
    id: 12,
    name: "Mecha Uma",
    description: "Mecha Uma is a modern Japanese omakase experience, showcasing Chef Bruce Ricketts' culinary excellence.",
    image: "burger.jpg",
    price: 10.99,
    category: "japanese",
  },
  {
    id: 13,
    name: "Metiz",
    description: "Metiz champions Filipino ingredients and local producers through modern dishes grounded in memories of regional flavors.",
    image: "burger.jpg",
    price: 10.99,
    category: "asian",
  },
  {
    id: 14,
    name: "Metronome",
    description: "Metronome, whether for hearty French bistro fare or a wildly creative tasting menu, never misses a beat at this eye-catching establishment.",
    image: "burger.jpg",
    price: 20,
    category: "european",
  },
  {
    id: 15,
    name: "Mōdan",
    description: "Mōdan presents a brilliant, highly personal modern Japanese tasting menu like no other under the expertise of Chef Jorge Mendez.",
    image: "burger.jpg",
    price: 20,
    category: "asian",
  },
  {
    id: 16,
    name: "Toyo Eatery",
    description: "Toyo Eatery, Chef Jordy Navarra's modern Filipino restaurant, has become pivotal in pushing the envelope of our nation's cuisine.",
    image: "burger.jpg",
    price: 10.99,
    category: "asian",
  },
  {
    id: 17,
    name: "Tsukiji",
    description: "Tsukiji sets the benchmark for top-tier Japanese cuisine, featuring fresh seafood flown in from the eponymous Tsukiji Fish Market.",
    image: "burger.jpg",
    price: 10.99,
    category: "asian",
  },
  {
    id: 18,
    name: "Txanton",
    description: "Txanton offers a jamón tasting experience, paired with delectable wines and hearty mains to complement the flavors.",
    image: "burger.jpg",
    price: 10.99,
    category: "european",
  },
  {
    id: 19,
    name: "Txoko Asador",
    description: "Txoko Asador presents utterly delicious and truly brilliant renditions of popular Spanish dishes.",
    image: "burger.jpg",
    price: 2000,
    category: "european",
  },
  {
    id: 20,
    name: "Wagyu Studio",
    description: "Wagyu Studio, an award-winning Japanese concept, places A5 Kobe beef in the spotlight, showcasing Chef Yoki Kitayama's creative and extravagant bites.",
    image: "burger.jpg",
    price: 350,
    category: "asian",
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
